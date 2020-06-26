---
categories:
    - the-blog
    - decompiling-facebook
layout: "browsing/post-list"
title: "decompiling Facebook"
description: "a series of notes on Facebook, privacy, regulation, mental health, and everything in between"
redirect-from: "/the-blog/decompiling-facebook/"
---

{% assign decompiling_facebook_feed = site.categories["decompiling-facebook"] %}
This is {{ page.description }}. This series provide a way for you to follow my thinking each week as I research a larger piece on what's broken with social media, and how to fix it. See the [first post][series intro] for details.

{% for each_post in decompiling_facebook_feed %}
    {%- include post/preview.html the_post=each_post -%}
{% endfor %}

[series intro]: {% link the-blog/decompiling-facebook/_posts/2018-06-05-introduction.md %}
