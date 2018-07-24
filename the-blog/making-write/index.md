---
layout: post-index
title: "making write, the app"
description: "a series of notes about *write*, an app I am creating for macOS"
---

{% assign feed = site.categories.making-write %}
This is {{ page.description }}. The series provides a bit of documentation about the creation of the app, how it works, how I am designing it, and perhaps most importantly, lessons I have learned during the development process.

{% for post in feed %}{% if post.unlisted != true %}
    {% assign title=post.title %}
    {% assign formatted_date=post.date | date: '%B %-d' %}
    {% assign length=post.content | number_of_words | append: " words" %}

{% include inline-post.html post=post title=title formatted_date=formatted_date length=length %}
{% endif %}{% endfor %}