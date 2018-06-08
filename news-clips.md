---
layout: page
permalink: "/news-clips/"
title: news clips
---

The following are podcast episodes I edited and produced and news stories on which I was first or only author. These works are meant to highlight the voice, clarity, and insightfulness of my reporting work.

For a comprehensive look at my work, visit [Praeci][Praeci]{:target="_blank"}, browse [my blog][the blog], and [search my name][Technician articles]{:target="_blank"} on the [Technician website][Technician]{:target="_blank"}.

## podcast episodes

{% for clip in site.data.news-clips.podcast %}
### [{{ clip.title }}]({{ clip.link }}){:target="_blank"}  
#### {{ clip.publish-info }}  
{{ clip.description }}
{% endfor %}

## print clips

{% for clip in site.data.news-clips.print %}
### [{{ clip.title }}]({{ clip.link }}){:target="_blank"}  
#### {{ clip.publish-info }}  
{{ clip.description }}
{% endfor %}

[Praeci]: http://praeci.com
[Technician]: http://www.technicianonline.com
[Technician articles]: http://www.technicianonline.com/search/?f=html&q=carter+pape&c%5B0%5D=news%2A&s=start_time&sd=desc&l=10&t=article%2Ccollection%2Cvideo%2Cyoutube&nsa=eedition
[the blog]: {{ site.baseurl }}{% link the-blog/index.html %}