---
categories:
    - the-blog
layout: "browsing/post-list"
title: "the blog"
description: "a public repository of my personally and professionally relevant musings, updates, ideas, and more"
redirect_from:
    - /blog/
---

{% assign feed = site.categories["the-blog"] %}

{% for post in feed %}
    {%- include post/preview.html post=post -%}
{% endfor %}
