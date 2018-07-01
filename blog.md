---
layout: blog
title: Blog
description: 소통 / 개발 / 후기
permalink: /blog
image: /files/covers/blog.jpg
---
<ul id="post-list">
    {% for post in site.posts %}
        {% include item.html %}
    {% endfor %}
</ul>
{% include pagination.html %}