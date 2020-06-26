---
categories:
    - the-blog
    - making-write
layout: "browsing/post-list"
title: "making write, the app"
description: "a series of notes about *write*, an app I am creating for macOS"
---

{% assign making_write_feed = site.categories["making-write"] %}
This is {{ page.description }}. The series provides a bit of documentation about the creation of the app, how it works, how I am designing it, and perhaps most importantly, lessons I have learned during the development process.

{% for each_post in making_write_feed %}
    {%- include post/preview.html the_post=each_post -%}
{% endfor %}
