---
layout: post-index
title: "the blog"
description: "a public repository of my personally and professionally relevant musings, updates, ideas, and more"
redirect_from:
    - /blog/
---

{% assign feed = site.categories.the-blog %}

{% for post in feed %}
    {%- assign categories-string = post.categories | join: "," -%}
    {%- if categories-string == "the-blog" -%}
        {%- include inline-post.html post=post render-filing=false -%}
    {%- else -%}
        {%- include inline-post.html post=post render-filing=true -%}
    {%- endif -%}
{% endfor %}
