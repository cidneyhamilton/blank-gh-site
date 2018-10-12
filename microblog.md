---
layout: blog_index
title: Microblog
permalink: /microblog/
blurb: 140 character micro-updates.
---

<ul>
  {% for post in site.posts %}
  	{% if post.category == 'microblog' %}
    <li class="microblog">
      <span class="date">{{ post.date | date: "%a, %b %d, %Y at %I:%M%P" }}</span> &raquo; {{ post.excerpt }}
    </li>
    {% endif %}
  {% endfor %}
</ul>