---
layout: "browsing/page"
body-tag-class: "news-clips"
permalink: "/news-clips/"
title: news clips
last_updated: "Nov. 21, 2018"
---

The following are works on which I was first or only author or producer. These works are meant to highlight the clarity and voice of my reporting, my aptitude for capturing striking imagery, and my presence in podcast and radio productions.

For a comprehensive look at my work:
- read [articles with my byline][my T-I articles] on [_The Times-Independent_'s website][The Times-Independent]
- visit _[Praeci]_
- browse [my blog][the blog]
- [search my name][Technician articles] on [_Technician_'s website][Technician]
- [search my name][The Journal articles] on [_The Journal_'s website][The Journal]

{% for clip in site.data.news-clips %}

------

{% if clip.photo-src %}
<a href="{{ clip.link }}"><img src="{{ clip.photo-src }}" /></a>
{% elsif clip.embed-element %}
{{ clip.embed-element }}
{% endif %}

{% if clip.title %}
### [{{ clip.title }}]({{ clip.link }})
{:.balance-text}
{% endif %}

{% if clip.publish-info %}
#### {{ clip.publish-info }}
{% endif %}

{% if clip.description %}
{{ clip.description }}
{% endif %}

{% endfor %}

[my T-I articles]: https://moabtimes.com/author/carter-pape/
[Praeci]: http://praeci.com
[Technician]: http://www.technicianonline.com
[Technician articles]: http://www.technicianonline.com/search/?f=html&q=carter+pape&c%5B0%5D=news%2A&s=start_time&sd=desc&l=10&t=article%2Ccollection%2Cvideo%2Cyoutube&nsa=eedition
[the blog]: {{ site.baseurl }}{% link the-blog/index.md %}
[The Journal]: https://the-journal.com
[The Journal articles]: https://the-journal.com/search?query=Carter+Pape
[The Times-Independent]: https://moabtimes.com
