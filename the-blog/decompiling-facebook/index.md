---
layout: post-index
title: "decompiling Facebook"
description: "a series of notes on Facebook, privacy, regulation, mental health, and everything in between"
redirect-from: "/the-blog/decompiling-facebook/"
---

{% assign feed = site.categories.decompiling-facebook %}
This is {{ page.description }}. They provide a way for you to follow my thinking each week as I research a larger piece on what's broken with social media, and how to fix it. See the [first post][series intro] for details.

{% for post in feed %}{% if post.unlisted != true %}
    {% assign title=post.title %}
    {% assign formatted_date=post.date | date: '%B %-d' %}
    {% assign length=post.content | number_of_words | append: " words" %}

{% include inline-post.html post=post title=title formatted_date=formatted_date length=length %}
{% endif %}{% endfor %}

[series intro]: {% link the-blog/decompiling-facebook/_posts/2018-06-05-introduction.md %}
