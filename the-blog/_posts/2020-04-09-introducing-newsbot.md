---
title: "I made a program that helps report the news."
excerpt: "Although it is not yet sophisticated enough to write stories from scratch, it does save me a lot of time and mental energy."
date: 2020-04-09 02:33 -06:00

social-image:
    path: "/assets/images/for-posts/a-NewsBot-email.png"
    caption: "an email from NewsBot with an update on the investigation of Frontier communications of Utah"
    alt: "an email from NewsBot with an update on the investigation of Frontier communications of Utah"
    title: "an email from NewsBot with an update on the investigation of Frontier communications of Utah"
    class: screenshot
---

This past weekend, I completed the most recent version, 0.3.0, of [NewsBot][NewsBot on GitHub], a series of time-saving automations that contribute to my work reporting for [The Times-Independent]. At this point, NewsBot is a collection of web scrapers — some of which are [private](https://github.com/CarterPape/NewsBot/tree/92ef25ca911c1f60a157c83f4089baeabfab502f#the-private-subproject) — that regularly capture updates, saving me from keeping a series of bookmarks that I check every hour or so. In the future, it will likely expand past mere web scraping.

I will explain the idea behind NewsBot with an example.

{% capture content %}
[![an email from NewsBot with an update on the investigation of Frontier communications of Utah](/assets/images/for-posts/a-NewsBot-email.png)](/assets/documents/for-posts/a-NewsBot-email.eml)
{% endcapture %}

{% capture caption %}
This is an email from NewsBot with an update on the investigation of Frontier communications of Utah. The email came within minutes of the documents being uploaded to the docket.
{% endcapture %}

{% include authoring/figure/screenshot.html %}

The Utah Division of Public Utilities is [investigating Frontier Communications of Utah](https://moabtimes.com/2019/07/08/state-probing-frontier-following-service-complaints/) following formal complaints of poor quality of service in certain remote areas around Moab, where the company holds a state certificate granting it a monopoly for landline services.

To keep up with the investigation, typically I would have to regularly visit the [the docket webpage](https://psc.utah.gov/2019/05/20/docket-no-19-041-04/), where filings in the investigation are hosted, to check for new documents. It would be easy to miss a development in the investigation while we are focused on other stories that are physically happening in Moab.

Instead, NewsBot regularly [checks the docket](https://github.com/CarterPape/NewsBot/blob/92ef25ca911c1f60a157c83f4089baeabfab502f/newsbot/spiders/frontier_investigation_spider.py#L71) and [sends an email](https://github.com/CarterPape/NewsBot/blob/92ef25ca911c1f60a157c83f4089baeabfab502f/newsbot/item_pipelines/item_emailer.py#L98) whenever [new](https://github.com/CarterPape/NewsBot/blob/92ef25ca911c1f60a157c83f4089baeabfab502f/newsbot/item_pipelines/emailed_item_filter.py#L31) documents appear on it. The bot is currently programmed to load the page [every 5 to 15 minutes](https://github.com/CarterPape/NewsBot/blob/92ef25ca911c1f60a157c83f4089baeabfab502f/newsbot/spiders/frontier_investigation_spider.py#L43), so when a new filing appears, we get it very soon after it is available.

[*View the NewsBot source on GitHub*][NewsBot on GitHub]
{: style="text-align: center;"}

Lots of news gets disseminated as updates to a website, online database or other web location. Certainly not most, but plenty. Getting the earliest possible notice on a development in a story like the Frontier investigation sometimes involves closely watching a specific web page.

Another prime example of what makes NewsBot helpful is the tracking of proposals for oil and gas leases on federal lands.

Anyone is allowed to [submit an expression of interest](https://nflss.blm.gov/eoi/submit) to the Bureau of Land Management that they would like to lease a public parcel of land for oil or gas extraction. These nominations get listed on the [National Fluids Lease Sale System](https://nflss.blm.gov/eoi/list). There is a science to how nominations are listed and marked in the system, and it lends itself better to a computer figuring it out than a human.

As far as I know, there is no listserv for new nominations, and even if there were, I would want to filter notifications to only get those that concern a select few parcels. Instead, NewsBot can watch for new listings on that site.

NewsBot, as of writing, does not track this list of oil and gas lease nominations, but it is high on the priority list to do so. This functionality will allow us to get extremely timely updates on what lands in and around Moab are being nominated for oil and gas sales.

The list goes on of websites that are useful to track for the most up-to-date information, and the point of this project is to, over time, track more of them, synthesize the information more cohesively, and save time and mental energy for the humans that staff the newspaper.

-------

## Do this first: Report the truth.

That is my personal mantra when it comes to reporting. It is good to be first, but the raison d'être of the newspaper — the thing that justifies its existence — is that it reports only that which is true and correct. Truth is [first priority](https://twitter.com/SuperToughScene/status/1248364481425571847). Being first is secondary.

NewsBot collects information in a timely manner, but more importantly, it gets the information straight from the source. In some cases, I can skip a step and go to the humans who populate the websites I am watching for information. Obviously, it is important to connect with and cite human sources in any reporting, but information technology in the form of court dockets, online databases, logs, lists, forums, … They all exist for a reason.

Information systems are tools for humans to use to standardize and make reliable the flow and availability of information. NewsBot is a tool for hooking into these systems and, using a predetermined set of rules, extracting and relaying the parts that are most important.



[The Times-Independent]: https://moabtimes.com/
[NewsBot on GitHub]: https://github.com/CarterPape/NewsBot
