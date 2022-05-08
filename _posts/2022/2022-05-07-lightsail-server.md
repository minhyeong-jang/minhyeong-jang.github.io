---
layout: post
tags: [develop, dev-etc]
image: /covers/nextjs.png
title: AWS Lightsail Nextjs, Nodejs 셋팅
author: minhyeong.jang
date: 2022-05-07 12:00
published: true
---

## 개요

출퇴근 페이지를 개선하면서 도메인을 변경했고, 서버를 이전하기로 했다.

프로젝트 사이즈, 서버 비용을 감안하여 EC2보다는 Lightsail으로 작업을 진행했다.

## Lightsail 설정

### Instance 생성

![lightsail Spec]({{ site.image_post_url }}/2022/lightsail-server-1.png "lightsail Spec")

인스턴스 이미지는 OS만 설치하도록 설정했다. ( Ubuntu 20.04 LTS )  
nginx가 설치된 형태도 진행해봤는데, 다른 패키지 설치 과정에서 충돌나거나 nginx.conf 파일에서 추가적인 작업을 하는 등의 이슈로 그냥 OS만 설치하는게 마음이 편했다.

### Static IP / DNS 생성

![lightsail Spec]({{ site.image_post_url }}/2022/lightsail-server-2.png "lightsail Spec")

도메인을 가비아에서 구매했고, Lightsail 서버에 연동이 필요했다.

Network 탭에서 Static IP, DNS zone을 클릭하여 IP, DNS를 발급받았다.

![lightsail Spec]({{ site.image_post_url }}/2022/lightsail-server-3.png "lightsail Spec")

발급받은 후 모습이며, Static IP는 생성한 인스턴스에 연결해야하고 DNS에서는 records를 생성하여 도메인을 추가해야한다.

> **가비아에서 도메인 설정 방법**  
> 도메인 정보 변경 -> 네임서버 설정  
> DNS 정보 -> DNS 관리 -> A 레코드, IP 입력

## 서버 설정

### 서버 접근

Lightsail에서 Connect하면 브라우저 콘솔로 서버에 접근할 수 있지만, iterm이 편하다 보니 ssh key 파일을 다운받아 진행했다.

( pem 파일은 계정 Account 또는 인스턴스 Connect 탭에서 설치 가능하다.)

```bash
sudo ssh -i "key.pem" [StaticIP] -l ubuntu

# Warning이 뜨는 경우, 권한 변경
sudo chmod 600 /path/key.pem
```

### 패키지 설치

```bash
# yarn 설치
sudo apt-get update
sudo apt-get install yarn
source ~/.bashrc

# nvm 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh

# git 설치
sudo apt-get install git

# node, npm 설치
nvm install node -y
npm install -g npm
```

<!-- # 방화벽 설치
sudo apt-get install firewalld -y
sudo systemctl unmask firewalld
sudo systemctl enable firewalld
sudo systemctl start firewalld -->

### Git

Git에 접근하기 위해 서버 ssh 키를 생성하였다.

```bash
ssh-keygen -t rsa -b 4096 -C "your@email"
cat .ssh/id_rsa.pub
```

위에 나온 key를 https://github.com/settings/keys에 등록한다.

```bash
git clone git@github.com:project
cd project
yarn

# ERROR: There are no scenarios; must have at least one. 에러가 나는 경우
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn
```

### PM2

PM2를 사용하여 프로세스 관리를 진행한다.

```bash
npm install -g pm2@latest
```

프로젝트에는 `ecosystem.config.js` 파일을 생성하여 기본 설정을 해뒀다.

```js
module.exports = {
  apps: [
    {
      name: "Project Name",
      script: "yarn start:production",
      max_memory_restart: "512M",
      exec_mode: "fork",
      env: {
        NODE_ENV: "development",
        PORT: 5000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 5000,
      },
      log_date_format: "YYYY-MM-DD HH:mm Z",
      out_file: "logs/out.log",
      instances: 1,
      autorestart: true,
      watch: false,
    },
  ],
};
```

Build 및 Start에 대한 Script는 package.json에 정의하고,

프로젝트 경로에서 pm2를 실행한다. ( deploy 스크립트를 생성하여 아래 pm2 start를 넣어도 상관없다. )

```bash
pm2 start ecosystem.config.js
pm2 save
```

## Nginx

### 설정 파일 수정

위에서 실행한 프로젝트의 Port 번호로 포트포워딩 작업을 할 예정이다.

```bash
# nginx 설치
sudo apt-get install nginx -y
```

해당 시점에서 URL 혹은 Server IP로 페이지를 접근하면 Welcome Nginx!가 화면에 보일 것이다.

다음으로는 nginx 설정에 포트포워딩 작업을 진행한다.

```bash
# 서버 설정 파일 수정
sudo vim /etc/nginx/sites-available/default

# nginx config 작성
server {
  server_name www.url.com;

  location / {
    proxy_pass http://127.0.0.1:5000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}

server {
  server_name api.url.com;

  location / {
    proxy_pass http://127.0.0.1:5001;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

서버네임에 도메인을 작성하고 프록시 영역에 pm2로 실행한 포트를 연동해준다.

위 케이스는 API를 위한 서브도메인을 설정하여서 해당 포트도 연동하였다.

```bash
# nginx 정상 포맷 여부 확인
sudo nginx -t

# nginx 재시작 ( 설정 반영 )
sudo systemctl reload nginx
```

이렇게하면 연동된 프로젝트를 웹 페이지에서 확인할 수 있다.

### SSH 인증처리

letsencrypt 인증서를 발급 받을건데, certbot를 사용하여 SSH 인증 처리를 진행한다.

```bash
sudo apt-get install python3-certbot-nginx -y

sudo certbot --nginx
# 1. 이메일 입력
# 2. letsencrypt 동의 Y
# 3. 정보 수신 X
# 4. Redirect
```

해당 작업이 끝나면 nginx default 파일에 도메인에 맞는 SSL 설정들이 추가된 것을 확인할 수 있다.

```bash
sudo systemctl reload nginx
```

### Non www 설정 ( nxdomain )

마지막으로 www이 안붙은 경우 www를 붙여서 url redirect를 적용하려고한다.

도메인에서는 @는 아무것도 없다는 표현으로 사용하는데, 도메인을 구입한 사이트에서 호스트가 @인 도메인 네임서버를 추가하고 lightsail DNS에도 동일하게 적용한다.

이후 nginx 파일을 추가 수정한다.

```bash
# http -> https redirect 부분에 다음처럼 적용
  if ($host = domain.com) {
    return 301 https://$host$request_uri;
  }
  if ($host = www.domain.com) {
    return 301 https://$host$request_uri;
  }

# 새로운 SSH Redirect 추가
server {
  listen 443 ssl;
  server_name domain.com;
  ssl_certificate /path/to/fullchain.pem; # managed by Certbot
  ssl_certificate_key /path/to/privkey.pem; # managed by Certbot

  return 301 https://www.$host$request_uri;
}
```

## 참고

- 전체 설정 https://velog.io/@turret1234/AWS-Lightsail-nginx-React-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0-2
- DNS 설정 https://ddochea.tistory.com/119
