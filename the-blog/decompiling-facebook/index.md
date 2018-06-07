---
layout: post-index
title: "decompiling Facebook"
description: "a series on Facebook, privacy, regulation, mental health, and everything in between"
redirect-from: "/the-blog/decompiling-facebook/"
---

{% assign feed = site.categories.decompiling-facebook %}

This is {{ page.description }}. You can expect updates every weekday. See the [first post][series intro]

{% for post in feed %}{% if post.unlisted != true %}
    {% assign title=post.title %}
    {% assign formatted_date=post.date | date: '%B %-d' %}
    {% assign length=post.content | number_of_words | append: " words" %}

{% include inline-post.html post=post title=title formatted_date=formatted_date length=length %}
{% endif %}{% endfor %}

[series intro]: {% link the-blog/decompiling-facebook/_posts/2018-06-05-introduction.md %}