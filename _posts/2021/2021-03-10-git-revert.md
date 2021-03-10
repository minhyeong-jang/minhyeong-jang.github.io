---
layout: post
tags: [dev-blog, dev-etc]
image: /covers/github.png
title: Git revert 충돌 해결하기
author: minhyeong.jang
date: 2021-03-10 19:40
---

작업을 스테이지에 올렸다가 릴리즈 날짜에 배포가 불가능하면 해당 기능을 잠시 스테이지에서 빼둬야한다.  
이때 develop 브랜치에서 Revert를 생성하여 Merge 하는 작업을 진행한다.

여기까지는 괜찮았으나 작업중인 브랜치에서 devleop을 Pull 받으니 문제가 나타났다.

develop에서는 Merge를 통하여 해당 내용들을 전부 삭제했으니 작업중인 브랜치에 있는 내용들도 전부 삭제 시켜버린다.

동일 파일을 작업하던 부분들까지 날려버리니 멘붕이 나버렸다.

여러번의 검색 끝에 간단한 해결방법을 찾았는데 결국 `Revert를 Revert하자!` 라는게 편한 방법이다.

## 해결방법

Merge, Revert한 브랜치명을 develop으로 명칭하고 진행한다.

### Revert Commit SHA Key를 가져오자.

develop에서 `git log`를 확인하여 `revert한 커밋 키 값`을 가져온다.

```bash
git checkout develop
git log

commit [REVERT_COMMIT_SHA_KEY] (tag: ...)
Author: Doriri <public.doriri@gmail.com>
Date:   ...

    Revert "커밋 메시지"
```

여기서 `REVERT_COMMIT_SHA_KEY` 해당 부분을 복사해준다.

### New Branch & Revert를 Revert 하자.

새로운 브랜치를 생성하고, Revert 커밋을 Revert 해보자.

```bash
git checkout -b [new_branch]
git revert [REVERT_COMMIT_SHA_KEY]
```

그리고 마무리로 기존 브랜치를 pull 받으면 끝이다.

```bash
git pull origin [origin_branch]
```

### 커맨드 요약

```bash
git checkout develop
git checkout -b feature/new-branch
git revert [SHA_REVERT_COMMIT]
git pull [YOUR_BRANCH]
```
