---
layout: page
permalink: "/news-clips/"
title: news clips
---

The following are podcast episodes I edited and produced and news stories on which I was first or only author. These works are meant to highlight the voice, clarity and insightfulness of my reporting work.

For a more complete look at my work, visit [Praeci]({{site.praeci_link}}){:target="_blank"} or [search my name]({{site.tech_articles_link}}){:target="_blank"} on the [Technician website]({{site.technician_link}}){:target="_blank"}.

## podcast episodes

{% for clip in site.data.news-clips.podcast %}
### [{{clip.title}}]({{clip.link}}){:target="_blank"}

{{clip.publish-info}}

{{clip.description}}
{% endfor %}

## print clips

{% for clip in site.data.news-clips.print %}
### [{{clip.title}}]({{clip.link}}){:target="_blank"}

{{clip.publish-info}}

{{clip.description}}
{% endfor %}