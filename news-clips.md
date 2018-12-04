---
layout: "browsing/page"
permalink: "/news-clips/"
title: news clips
---

The following are news stories on which I was first or only author and podcast episodes I edited and produced. These works are meant to highlight the thoroughness, voice, and clarity of my reporting.

For a comprehensive look at my work:
- visit [Praeci]
- browse [my blog][the blog]
- [search my name][Technician articles] on [Technician's website][Technician]
- [search my name][The Journal articles] on [The Journal's website][The Journal]

## print clips

{% for clip in site.data.news-clips.print %}
### [{{ clip.title }}]({{ clip.link }})
#### {{ clip.publish-info }}
{{ clip.description }}
{% endfor %}

## podcast episodes

{% for clip in site.data.news-clips.podcast %}
### [{{ clip.title }}]({{ clip.link }})
#### {{ clip.publish-info }}
{{ clip.description }}
{% endfor %}

[Praeci]: http://praeci.com
[Technician]: http://www.technicianonline.com
[Technician articles]: http://www.technicianonline.com/search/?f=html&q=carter+pape&c%5B0%5D=news%2A&s=start_time&sd=desc&l=10&t=article%2Ccollection%2Cvideo%2Cyoutube&nsa=eedition
[the blog]: {{ site.baseurl }}{% link the-blog/index.md %}
[The Journal]: https://the-journal.com
[The Journal articles]: https://the-journal.com/search?query=Carter+Pape