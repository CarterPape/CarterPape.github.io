---
layout: "browsing/page"
title: apps
last_updated: "May 14, 2020"
redirect_from: "/projects/"
---

I don't just [report]({% link journalism.md %}). I also [program](https://github.com/carterpape).

I started out studying computer science and physics in college but ended up graduating in math, so I have both the skills and interest to program. Some of my projects support the work I do as a reporter; some of it is an outlet for my programmer impulses; some of it is both.

Here are some highlights of my completed and active projects.

## moab.news

[`moab.news`](https://moab.news) is basically a daily blog that I write for myself, my family, my close friends, and my boss.

It's a place for me to put draft stories, partial stories, lists of links, documents, and anything else I need or want to aggregate in the process of reporting.

It's also an outlet for formatting my own stories online. I don't get to control the look and feel of [*The Times-Independent*'s website][The Times-Independent], but I do get to control the look and feel of `moab.news`.

The editorial standards to which I hold myself on `moab.news` are [not the same](https://moab.news/what-is-this/) as the standards to which I hold myself in my actual reporting. I and my editor vet stories between when I put them on `moab.news` and when they are published in The Times-Independent.

_[See the `moab.news` source code on GitHub](https://github.com/CarterPape/write)._

## NewsBot

[NewsBot] is a tool that runs scheduled tasks — chiefly web scraping — to automate some of the more rote parts of my and The Times-Independent's workflows. Such tasks include gathering and formatting weather data that is used in the weekly print edition of the newspaper, checking for updates on [investigations](https://www.moabtimes.com/2019/07/08/state-probing-frontier-following-service-complaints/) that we are following, looking out for new [oil](https://www.moabtimes.com/articles/sand-flats-pulled-from-potential-drilling-sites/) and [gas](https://www.moabtimes.com/articles/230-parcels-many-near-arches-canyonlands-up-for-oil-gas-lease-sale/) lease sales in the area and more.

With each feature I have added to NewsBot, it has proven to be a boon to my team's productivity. It has saved the office time by taking care of some of the routine tasks we typically face daily or weekly, affording us greater mental and temporal capacity to focus on the more important, less mindless parts of our jobs.

_[See the public parts of NewsBot on GitHub](https://github.com/CarterPape/NewsBot)._

## moabtimes.com [{% include icon.html which="award" %}]({% link awards.md %}#2018-model-the-way){:title="first place: the Utah Press Association's 2019 award for best website"}

[moabtimes.com][The Times-Independent] is _The Times-Independent_'s website. Prior to May 2020, I maintained the website after developing it myself and [won and award for doing so]({% link the-blog/_posts/2020-06-15-moabtimes-com-wins-first.md %}).

Although the content on the site is protected by copyright, the source code from the previous iteration of the site (namely, the WordPress theme, called [RedRock]) has [an open source license](https://github.com/the-times-independent/RedRock/blob/master/LICENSE.md).

I had begun developing a paywall for the website to restrict access by non-subscribers via a monthly quota of free articles. The plugin, called [RedRock Subscriptions], is built with [Memberful], and is based on [that company's own WordPress plugin](https://wordpress.org/plugins/memberful-wp/).

_[See RedRock on GitHub](https://github.com/the-times-independent/RedRock)._

## Praeci [{% include icon.html which="award" %}]({% link awards.md %}#2018-model-the-way){:title="NC State Student Involvement's 2018 Model the Way award for general excellence"}

[Praeci](https://praeci.com) [was](https://praeci.com/praeci-is-defunct) a reporting project I created for presenting NC State and Raleigh news with a focus on succinct writing and attractive presentation. I built the website myself using Jekyll and GitHub Pages.

I customized a template built by Artem Sheludko, adding custom layouts and elements. I also built the site's podcast RSS feed syndication, enabled by Amazon S3 for storage of podcast audio and by [PodTrac](https://analytics.podtrac.com) download analytics.

_[See the Praeci code on GitHub](https://github.com/Praeci/praeci.github.io)._

## Basic binary genetic optimization

This project was an excursion into genetic optimization. I built the original framework in Swift 2 to complete the simple task of genetically optimizing a data structure containing two floats to be as close as possible to a given pair of numbers. I later added a module that uses the genetic optimization to fit a polynomial of variable order to a set of points. I have also been updating the syntax to keep up with current Swift versions.

Swift is not the optimal language for building this tool. However, I used Swift anyway because I was interested to learn the language at the same time that I was thinking about building a genetic optimization framework.

_[See the project on GitHub](https://github.com/CarterPape/Basic-binary-genetic-optimization)._


[Memberful]: https://memberful.com
[RedRock]: https://github.com/the-times-independent/RedRock
[RedRock Subscriptions]: https://github.com/the-times-independent/RedRock-Subscriptions
[The Times-Independent]: https://www.moabtimes.com/
[write introduction]: {% link the-blog/making-write/_posts/2018-07-23-i-alone-can-fix-this.md %}
[write series]: {% link the-blog/making-write/index.md %}
[NewsBot]: {% post_url the-blog/2020-04-09-introducing-newsbot %}
