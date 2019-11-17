---
layout: "browsing/page"
permalink: "/projects/"
title: projects
last_updated: "Nov. 17, 2019"
---

## moabtimes.com

[moabtimes.com][The Times-Independent] is _The Times-Independent_'s website. It is built on WordPress, and although the content is protected by copyright, the source code (namely, the WordPress theme, called [RedRock]) has [an open source license](https://github.com/the-times-independent/RedRock/blob/master/LICENSE).

I am currently developing a paywall for the website to restrict access by non-subscribers via a monthly quota of free articles. The plugin, called [RedRock Subscriptions], is built with [Memberful], is based on the company's own WordPress plugin, and is set to go live by January 2020.

## **write**

**write** is a digital notepad currently under development for macOS that provides focused, beautiful, and responsive word processing for web content writers. **write** responds to Markdown syntax, allowing writers and editors to see and do text formatting without lifting a finger from the keyboard. The app provides an environment for web content creation that is distraction-free and simple to use.

For more about **write**, read my [introduction][write introduction] to the [series of articles][write series] I am writing as I develop the app. You can also see the project [on GitHub](https://github.com/CarterPape/write).

## _Praeci_

_Praeci_ is a reporting project I created for presenting NC State and Raleigh news with a focus on succinct writing and attractive presentation. I built the website myself using Jekyll and GitHub Pages.

I customized a template built by Artem Sheludko, adding custom layouts and elements. I also built the site's podcast RSS feed syndication, enabled by Amazon S3 for storage of podcast audio and by [PodTrac](http://analytics.podtrac.com) download analytics.

[See the _Praeci_ code on GitHub](https://github.com/Praeci/praeci.github.io)

## Basic binary genetic optimization

This project was an excursion into genetic optimization. I built the original framework in Swift 2 to complete the simple task of genetically optimizing a data structure containing two floats to be as close as possible to a given pair of numbers. I later added a module that uses the genetic optimization to fit a polynomial of variable order to a set of points. I have also been updating the syntax to keep up with current Swift versions.

Swift is not the optimal language for building this tool. However, I used Swift anyway because I was interested to learn the language at the same time that I was thinking about building a genetic optimization framework.

[See the project on GitHub](https://github.com/CarterPape/Basic-binary-genetic-optimization)


[Memberful]: https://memberful.com
[RedRock]: https://github.com/the-times-independent/RedRock
[RedRock Subscriptions]: https://github.com/the-times-independent/RedRock-Subscriptions
[The Times-Independent]: https://moabtimes.com/
[write introduction]: {% link the-blog/making-write/_posts/2018-07-23-i-alone-can-fix-this.md %}
[write series]: {% link the-blog/making-write/index.md %}
