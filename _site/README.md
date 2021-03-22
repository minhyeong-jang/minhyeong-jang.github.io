# Minhyeong-jang

> 해당 블로그는 [jekyll](https://jekyllrb.com/)을 사용하였습니다.

## 설치 방법

### 모듈 설치

```console
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew install ruby
$ gem install jekyll
$ bundle install
```

[ERROR: Failed to build gem native extension.](https://stackoverflow.com/questions/20559255/error-while-installing-json-gem-mkmf-rb-cant-find-header-files-for-ruby)  
Gem 또는 bundle 오류가 나는 경우 다음 명령어로 설치합니다.

```
$ sudo gem install -n /usr/local/bin jekyll
$ sudo gem install -n /usr/local/bin bundler:2.2.8
```

## 실행 및 배포

### 실행

```
$ bundle exec jekyll serve
$ open http://localhost:4000
```

### 게시글 배포

```
$ git commit -m '...'
$ git push origin master
```

## 게시글 작성 형식

### 파일 네이밍

글 : `{year}-{month}-{day}-{title}.md // 2018-07-01-wordpress.md`  
이미지 : `{title}-{num} // wordpree-1.png`

### 블로그 마크업

대메뉴 : `h1`  
대메뉴 설명 : `h2`  
중메뉴 : `h3`  
소메뉴 : `h4`  
이미지 : `![wordpress.com]({{ site.baseurl }}/wordpress-info-1.png)`  
이미지 설명 : `<img-info></img-info>`  
글 개행 : `<br/>`  
강조 : ` `` `  
코드 : ` ``` code ``` `
