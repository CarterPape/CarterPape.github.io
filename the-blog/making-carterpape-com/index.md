---
categories:
    - the-blog
    - making-carterpape-com
layout: "browsing/post-list"
title: "making write, the app"
description: "a series of notes on creating this website"
---

{% assign making_carterpape_com_feed = site.categories["making-carterpape-com"] %}
This is {{ page.description }}. The series provides documentation about the creation of [carterpape.com]({{ site.url }}), from front-end to back-end, including the people and websites from whom I drew design inspiration and the tools I am using under the hood.

{% for each_post in making_carterpape_com_feed %}
    {%- include post/preview.html the_post=each_post -%}
{% endfor %}
