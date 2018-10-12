---
layout: page
title: Microblog
permalink: /microblog/
---

<ul>
  {% for post in site.posts %}
  	{% if post.category == 'microblog' %}
    <li>
      {{ post.content }}
      <footer class="microblog-meta">
        <small>
        	<a href="{{ post.url }}">{{ post.date | date: "%a, %b %d, %Y at %I:%M%P" }}</a>
        </small>
      </footer>
    </li>
    {% endif %}
  {% endfor %}
</ul>