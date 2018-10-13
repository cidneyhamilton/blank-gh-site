---
layout: microblog
title: Micro-Updates
permalink: /microblog/
blurb: 140 character micro-updates.
---

<ul>
  {% for post in site.posts %}
  	{% if post.category == 'microblog' %}
    <li class="microblog">
      <a href="{{ post.url }}"><span class="date">{{ post.date | date: "%a, %b %d, %Y at %I:%M%P" }}</span></a> &raquo; 
      {{ post.content }}
    </li>
    {% endif %}
  {% endfor %}
</ul>