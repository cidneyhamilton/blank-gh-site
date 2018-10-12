---
layout: default
---

{% include microblog_header.html %}

<article class="post h-entry">

  <ul>
    <li class="microblog">
        <a href="{{ page.url }}"><span class="date">{{ page.date | date: "%a, %b %d, %Y at %I:%M%P" }}</span></a> &raquo; 
        {{ page.content }}
      </li>
  </ul>

  <a class="u-url" href="{{ page.url | relative_url }}" hidden></a>
</article>

{% include blog_footer.html %}
