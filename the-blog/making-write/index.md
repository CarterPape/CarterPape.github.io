---
layout: "browsing/post-index"
title: "making write, the app"
description: "a series of notes about *write*, an app I am creating for macOS"
---

{% assign feed = site.categories["making-write"] %}
This is {{ page.description }}. The series provides a bit of documentation about the creation of the app, how it works, how I am designing it, and perhaps most importantly, lessons I have learned during the development process.

{% for post in feed %}
    {%- include post/preview.html post=post render-filing=false -%}
{% endfor %}