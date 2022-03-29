---
layout: post
tags: [develop, react]
image: /covers/programmers.jpg
title: Nextjs EC2 배포하기 - 1
author: minhyeong.jang
date: 2021-09-04 22:44
published: false
---

## 비밀번호 초기화

```sql
# mysql 시작
mysql.server start

# 비밀번호 없이 접속
mysqld_safe --skip-grant-tables &

# mysql 접속
mysql -u root

# mysql db 사용
use mysql;

# 비밀번호 초기화 및 적용
UPDATE user SET authentication_string=null WHERE user='root';
flush privileges;

# 재접속 ( skip-gant 프로세스 오류나는 경우 killall mysqld 명령어 실행 )
exit;
mysql -u root;

# 패스워드 변경
ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'Qwe123!@#'

# 재접속
mysql -uroot -p
```

### 패스워드 정책 변경

```sql
# mysql 패스워드 정책 변경, 버전에 따라 _ 또는 . 사용
SET GLOBAL validate_password_policy=LOW;
# or
SET GLOBAL validate_password.policy=LOW;
```

### 접속 오류가 나는 경우

```
Authentication plugin 'caching_sha2_password' cannot be loaded
```

와 같이 인증 오류가 나는 경우, 비밀번호 변경 시 암호화 방식을 변경해야한다.

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Qwe123!@#'
```

### 참고자료

#### 패스워드 변경

https://minkyoe.tistory.com/1

#### MySQL validate_password_policy unknown system variable

https://stackoverflow.com/questions/55237257/mysql-validate-password-policy-unknown-system-variable
