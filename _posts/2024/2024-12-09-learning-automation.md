---
layout: post
tags: [develop, dev-etc]
image: /covers/algorithm.jpg
title: 한국이러닝 학습 진도율 100% 만들기
author: minhyeong.jang
date: 2024-12-09 15:05
published: true
---


1. 강의 시청 화면에서 cmd + i 눌러서 개발자도구 오픈
2. console에 스레드에 있는 코드 입력
3. 붙여넣기 안되는 분들은 allow pasting 수기 입력 후 진행
4. 마지막 챕터 끝에 5초 정도 듣기

```js
var no = $("#no").val();
var num = $("#num").val();
var log_num = location.search.match(/max_num=([\d]*)\&/)[1];
var cl_start_time = Math.floor(new Date().getTime()/1000) - 4020;
var cl_start_check = $("#cl_start_check").val();
var user_id1 = location.search.match(/user_id1=([a-zA-Z0-9]*)$/)[1];
var allData = {
	no,
	num,
	log_num,
	cl_start_time,
	cl_start_check,
	user_id1,
  page_time: 147.146,
};
var allData2 = {
	no,
	num,
	cur_page: Number(log_num),
	max_num: 0,
	user_id1,
	goyong_yn: "9"
};
$.ajax({
    url: "jindo_check_cl.php",
    type:'POST',
    data: allData
});
$.ajax({
    url: "timestamp.php",
    cache: false
});
$.ajax({
    url: "ajax.jumsu2_update_page.php",
    type:'POST',
    data: allData2,
    async: false
});

setTimeout(() => {
	$('#frame')[0].src = 		$('#frame').attr('src').replace(/[\d]{2}\.html$/, `${pad(6, 2)}.html`)
}, 500);
```