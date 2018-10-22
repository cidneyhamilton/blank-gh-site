---
layout: blog
title: Dev Log
permalink: /blog/
---

<section class="contents">
<ul>
  {% for post in site.posts %}
  	{% if post.category == 'blog' %}
    <li>
      <span class="date">{{ post.date | date: "%a, %b %d, %Y" }}</span> &raquo;
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
    {% endif %}
  {% endfor %}
</ul>
</section>