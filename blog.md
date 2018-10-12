---
layout: page
title: Dev Log
permalink: /blog/
---

<ul>
  {% for post in site.posts %}
  	{% if post.category == 'blog' %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
    {% endif %}
  {% endfor %}
</ul>