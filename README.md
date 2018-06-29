Minhyeong-jang / doriri.biz
===========================

> 해당 블로그는 [jekyll](https://jekyllrb.com/)를 사용하였습니다.

### 설치

1. ruby 설치
2. jekyll 설치
3. git fetch or pull or clone

### Ruby 설치

```console
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew install ruby
$ gem install jekyll
```

### Git Clone

```console
$ git clone https://github.com/minhyeong-jang/doriri.git
$ cd doriri
$ bundle install
```

### 실행

```
$ bundle exec jekyll serve
$ open http://localhost:4000
```

### 배포(발행)

```
$ git commit -m '...'
$ git push origin master
````