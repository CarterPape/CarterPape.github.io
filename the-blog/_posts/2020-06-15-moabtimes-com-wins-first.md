---
title: "I created a website that won a statewide award."
excerpt: "The 2019 version of *The Times-Independent*'s website won best in class among Utah newspapers."
date: 2020-07-19 17:07 -06:00

social_image:
    path: "/assets/images/for-posts/IMG_6686.jpg"
    caption: "An [archived view](https://web.archive.org/web/20191213143945/https://moabtimes.com/) of [moabtimes.com](https://moabtimes.com) from Dec. 13, 2019. *Photo by Carter Pape, licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)*{:.credit}"
    alt: "An archived view of moabtimes.com from Dec. 13, 2019."
    title: "An archived view of moabtimes.com from Dec. 13, 2019."
---

Last month, _The Times-Independent_ received from the Utah Press Association the 2019 award for Best Website among the largest weekly newspapers in Utah.

_The Times-Independent_ competed this year among Utah weeklies with circulations of 3,000 or more, including [_Park Record_](https://www.parkrecord.com), [_Salt Lake City Weekly_](https://www.cityweekly.net), and [Emery TV News](https://etvnews.com). College newspapers compete in a separate category of their own, and dailies like [_The Salt Lake Tribune_](https://www.sltrib.com) also have their own group.

For a variety of reasons, including that volunteers from out of state judge Utah's Better Newspaper Contest and that this year's award ceremony was cancelled due to the pandemic, the press association and judges did not provide specific comments about why each of this year's winners were selected.

In lieu of judges' comments, I wanted to give some thoughts of my own about the 2019 version of the website and what made it worthy of recognition. I built the site over the course of two months essentially from the ground-up and spent a lot of time making sure that it would be something people enjoyed using.

To avoid confusion, I will say at this point that the current version of [`moabtimes.com`](https://moabtimes.com) is not the one that I built. [Tom Perkins](https://awebstudio.com) built and manages the 2020 version of `moabtimes.com`; he has built websites for a variety of Moab companies including that of *The Times-Independent* Associate Editor Sena Taylor Hauer's horseback riding business, [Moab Horses](https://moabhorses.com).

The [2019 version of `moabtimes.com`](https://web.archive.org/web/20200215002625/https://moabtimes.com/) is available via Internet Archive's [Wayback Machine](https://web.archive.org).[^Internet-Archive] To get a feel for how the website looked at the time, [click around](https://web.archive.org/web/20200217010322/https://moabtimes.com/2020/02/10/moab-loses-padre-espiritual-in-car-crash-suspect-faces-manslaughter-charge/), but be prepared for many missing pages and photos and much slower page load times. The Wayback Machine is extremely useful but doesn't (and perhaps can't) do everything.

Here is what I think made `moabtimes.com` a winner:

## It stole from others.
{:#stealing}
{:.balance-text}

When building a new website, there is no need to reinvent the wheel. By that, I mean that there is no need to build something from scratch and make novel design choices in the process; many other sites have already made design choices worth learning from.

The websites for [The New York Times](https://www.nytimes.com), [The Washington Post](https://www.washingtonpost.com), [Politico](https://www.politico.com), [Axios](https://www.axios.com), and other digitally-focused news sites have a lot to teach about designing a news site, from the big things like front page layout and color scheming to smaller things like the location of the search bar, location and size of the masthead, screen width of articles, number of fonts used, how much white space to use, how much text to use, how many images to use, …

These are websites with their own professional web designers that have iterated on the design of their sites for years. If there is anyone from whom to steal ideas, it is them.

One of the best examples of clean, ad-free, distraction-free (besides the unfortunate pop-up it has about its newsletter) web design that I have found from a digital news site is from [ProPublica](https://www.propublica.org).

As a nonprofit with a solid base of donations and foundation dollars, the publication doesn't use any advertising from what I have seen, getting at one of the key challenges that faces news publications: the business model.

Solving this revenue problem has meant that ProPublica is free to do pretty much whatever it wants with its web design — no ads, few distractions: just the good stuff. That really becomes apparent browsing around the site (again, with the nagging exception of the newsletter popup).

## It was small and fast.
{:#fast}
{:.balance-text}

Moab generally has pretty good internet speeds, but if you trek far enough from the valley, those speeds either fall drastically or disappear completely.[^rural-broadband] As of writing, uncapped broadband internet is unavailable in Castle Valley, a town of just under 400 people, and in some places in the southern part of Spanish Valley.

For that reason, and because even some people who live near downtown Moab do not pay for (and maybe cannot pay for) the fastest internet speeds available to them, it is important to make web pages small enough that people can actually load them.

It's like trying to download a movie versus loading a small image. Cutting the cruft that can build up on websites — needless scripts, images that are too large, unused typefaces — helps keep page sizes small, making your website accessible to more people.

Maintaining a fast web server can be a relatively low-cost task, but you have to [program it with the right priorities](#software) then keep it that way. A [mid-tier Amazon Lightstail server](https://aws.amazon.com/lightsail/pricing/) hosted the 2019 version of `moabtimes.com`, and [Cloudflare](https://www.cloudflare.com)'s content delivery network served the content, combining for one of the most cost-effective and fast back ends currently available to small businesses. More on the [systems](#systems) and [software](#software) later.

Together, these cost-effective web technologies serving a stripped-down WordPress site made for page speeds that consistently rated 90% or better on [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=moabtimes.com) — on par or better than most national news outlets.

For more on the key principals of modern website administration, see Google's [web.dev](https://web.dev/) project.

## It was designed for focus.
{:#focus}
{:.balance-text}

Local news does not need to be the center of attention for people. Gaining attention can help a newspaper's bottom line in the short term, but keeping `moabtimes.com` focused rather than trying to be everything to everyone meant that the newspaper built rapport with readers for giving them exactly what they came for and not selling them on anything more.

For-profit news organizations — desperate for eyes; having seen the success of Facebook, Twitter, YouTube, and other sites in fully consuming content consumers' attention with their platforms; and failing to sustain themselves on the economics of advertising that worked before social media — can find themselves doing whatever they can to yank at and hold readers' attention, which I made sure `moabtimes.com` and the newspaper's social media presence didn't do.

As is my personal website, the 2019 version of `moabtimes.com` was designed to focus readers on what they were reading, watching, or looking at. That meant no distracting sidebars, no pop-ups, and no elements that move unless the user wants them to move.

The newspaper is and always has been supported by advertising, so there was by necessity a single ad spot at the top of each page — though that is much less than the number of ad spots on [the *Moab Sun News*'s site](https://www.moabsunnews.com).

On my last visit, I counted the number of ads on the 12 tops stories on their site and got a range of five to seven ads per story (usually seven), not including the donation solicitations at the top of every page. That's not exactly a fair comparison, though, since the *Sun* is free and supported by ads while the *T-I* runs on both ads and subscriptions.

Eliminating distractions and designing pages for readability (i.e. choosing readable fonts, picking the optimal width for the text so lines aren't too long or too short, …) gives the reader an opportunity to digest the information at their own pace rather than pushing them to click away to an ad, a donation page, irrelevant information or another story.

However, building a newspaper around advertising will always, necessarily lead to dividing the readers' attention between the news and commercial promotions — even if advertising is only a part of the organization's revenue. News sites like ProPublica that don't monetize readers' attention are rare.

## Everything unnecessary was stripped away.
{:#necessity}
{:.balance-text}

In my experience designing websites, promoting focus means keeping things simple. I aim to give the reader just the words to read and well-placed, relevant images to view; in many cases, nothing more is needed.

I think about this in terms of browsing versus reading. When a reader visits the website's homepage, they're probably in a browsing or discovery mode. They might not know exactly what they're seeking, so I give them the menu of what is available to read and guide them toward the important stories by putting them at the top and using good photos and headlines.

Readers can also come to a website knowing exactly what they're looking for; in that case, I give them a search bar to help them dig for the thing they want. There are also the middle cases where the reader knows what section they want to read from, or what topic interests them. The site can also serve those interests.

Once a reader has selected a story they want to read, I use a page design [stripped of all potential distractions](https://web.archive.org/web/20200213233902/https://moabtimes.com/2020/02/07/county-opposes-sand-flats-oil-gas-lease-sales/). This has two purposes: One is that the content is the very reason the reader is on the site, so I don't distract them from the content, and I support the content with a minimalist design.

Second is that it is hard to read something on a phone or computer without getting distracted, even before factoring in how jarring a pop-up or notification can be while you are trying to focus on the words. I do whatever I can to ensure the web design does noy contribute to the distracting nature of digital content.

Minimizing distractions also applies when users are in browsing mode. News sites — especially desperate local news sites — will try to turn themselves into the center of their readers' attention, for a variety of reasons and with a variety of methods.

Local news sites sometimes syndicate non-local stories from national outlets to minimize the reason for readers to go elsewhere for news; they boost their social media pages on their website to try to draw readers on every possible platform; I've even seen news sites host on their homepage a list of movies currently available on Netflix.

*The Times-Independent*'s website didn't do those things. It gave readers the news they came to read and didn't distract them with anything else.

## The right technical systems supported it.
{:#systems}
{:.balance-text}

Using [Amazon Lightsail](https://aws.amazon.com/lightsail/) is not the most surgical approach to web service; it's not exactly a one-size-fits-all solution, but it is closer to that than a modular approach, so it is simple and low-maintenance.

While I was building and maintaining `moabtimes.com` (and, by choice, not being paid extra for it), I was also working as [a full-time reporter](https://www.moabtimes.com/author/carter-pape/). This meant I needed ways to use less of my brain thinking about the website, but I had to do so in a way that didn't sacrifice on the level of service the site provided to the reader. Amazon Lightsail offered that solution.

A more ideal solution would have been to use [Amazon Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) to serve the website for scalability and modularity purposes. If the site was hit with a flood of traffic, more servers could spin up to ensure page speeds remained high. If a server had gone down (which started happening during the transition to the new site for reasons that are still unclear to me), it would automatically get replaced with a healthy server. A whole host of other benefits come of using Beanstalk, but a few key benefits came with using a simpler solution, as well.

As for the other systems, Cloudflare provided the site's domain registration, domain name system, content delivery network, site security, and many other things, all for the lowest price of any such collection of services. Choosing Cloudflare was a no-brainer, especially given that it consistently ranks as one of the fastest DNS and CDN services on the planet.[^Cloudflare-rankings]

As I alluded to, the essentials of content delivery and protection are all free through Cloudflare, and as a domain registrar, it imposes [only the bare minimum cost](https://www.cloudflare.com/products/registrar/) imposed by the organization that oversees the use of internet domains. Not only is it among the best; it is probably the lowest-cost option for small sites.

Cloudflare is, quite simply, amazing. Amazon Web Services, as well, is excellent and powerful.

## It was built with the right software.
{:#software}
{:.balance-text}

The most important choice I think I had to make when redesigning `moabtimes.com` was what content management system to use. The CMS is the core piece of software that runs the site; it is what writers use to write; it is what readers use to read; it is the thing on which advertising and all peripheral features of the site are built.

Other less important choices had to do with what particular version of Linux to run on the server, whether to use Nginx or Apache, what plugins to use… Those are all important choices to get right, but getting them wrong is not nearly as consequential as picking the wrong CMS.

Fortunately, the most popular content management system[^WordPress-popularity] also happens to be the best.[^WordPress-quality] It is open source; it is widely used; it is customizable; most professional web developers are familiar with it; and it has a lively support community, among so many other advantages.

In this respect, WordPress was an obvious choice. Being built in large part with PHP, a language I already speak, I was set up to succeed as I built a custom theme for the site, and the universe of plugins available with WordPress gave me plenty of choices for how to achieve the functionality the site needed.

## It was open source.
{:#open-source}
{:.balance-text}

One of the foundational parts of WordPress is that it is open source. My suspicion is that its popularity has much to do with that fact. A consequence of it being open source is that it requires all themes and plugins built on top of WordPress to also be open source, because the software is [licensed under GNU Public License version 2.0](https://wordpress.org/about/license/), a [copyleft license](https://www.gnu.org/licenses/copyleft.en.html).

The working name of the WordPress theme that powered the website was [RedRock](https://github.com/the-times-independent/RedRock). That theme is publicly available on GitHub and is [licensed under the GNU Public License version 3.0](https://github.com/the-times-independent/RedRock/blob/master/LICENSE.md). Anyone can modify it or use it for their own project. It is not the prettiest codebase I have ever written (I created it from an existing theme and codebase, [Rebalance](https://wordpress.com/theme/rebalance)), but it is pretty good for what it is.

--------

The 2019 version of `moabtimes.com` is a project of which I am very proud and one that gained the recognition of the state's newspaper association for the value it provided to readers. The principles I've described here are not the only considerations I made in building the site, but they are among the ones I think are most important when executing a project of this kind.

`moabtimes.com` will not be the last website I build, and it taught me a lot about the improvements I could make to my own website. Hopefully next time I get to use Beanstalk and learn even more web technologies.


[^Internet-Archive]:
    [Internet Archive](https://archive.org) describes itself as "a non-profit library of millions of free books, movies, software, music, websites, and more." The bulk of Internet Archive, though, is web pages; the nonprofit has saved close to a half-trillion web pages since 1996.
    
    The folks who work at Internet Archive [explained in 2016](https://blog.archive.org/2016/10/23/defining-web-pages-web-sites-and-web-captures/) the difference between a web page and a website as they use the terms, but I will summarize it as such: A web page is a URL and a timestamp. It's a snapshot in time of a specific place on the internet.
    
    A website is more general; it's the thing that comes paired with `.com`, `.net`, or some other postfix (for example, `nytimes.com` or `archive.org`). Subdomains count as part of the same website; for example, `blog.archive.org` is the same website as `archive.org`.
    
    You are looking at this blog post at a specific point in time, so what you are looking at is a web page, according to Internet Archive; it has a URL and a timestamp. The web page is served by my website, `carterpape.com`.
    
    Since web locations can change on a regular basis, Internet Archive does not settle for archiving what it finds at a specific URL once; it revisits the URL in some cases [hundreds of times per day](https://web.archive.org/web/*/nytimes.com), capturing what it looked like at many specific moments and how it changed over time.

[^rural-broadband]: I have [written very minimally](https://www.moabtimes.com/article/where-is-broadband-available-in-moab/) about this topic before based on [a state map of broadband internet availability](https://mapserv.utah.gov/broadband/#/route/minDownSpeed=4&minUpSpeed=7&transTypes=40%7C41%7C10%7C20%7C30%7C50%7C70%7C71&extent=-12196644%7C4651808%7C577791). My experience is that mobile wireless coverage is not nearly as extensive as the map depicts.

[^Cloudflare-rankings]:
    Here are a list of sources that rank Cloudflare against other content delivery networks and domain name systems:

    - Data analytics platform [PerfOps](https://perfops.net) ranks Cloudflare #1 for performance among [authoritative](https://www.dnsperf.com) and [public DNS resolvers](https://www.dnsperf.com/#!dns-resolvers), #8 for [CDN query speed](https://www.cdnperf.com), and #2 for [CDN uptime](https://www.cdnperf.com/#!rum).
    - Technology review site [TechRadar](https://www.techradar.com/) ranks Cloudflare [#1 among content delivery networks](https://www.techradar.com/news/the-best-cdns-of-2018).
    - European-based content delivery network [KeyCDN](https://www.keycdn.com/) ranks Cloudflare [#2 among domain name systems](https://www.keycdn.com/blog/best-free-dns-hosting-providers).
    - Domain name server testing site [SolveDNS](https://www.solvedns.com/) consistently ranks Cloudflare [top 10 among domain name systems](https://www.solvedns.com/dns-comparison/).
    - Media site [Mashable](https://mashable.com/) ranks Cloudflare [#3 among content delivery networks](https://mashable.com/roundup/best-content-delivery-networks/).
    - Technology review site [G2](https://www.g2.com/){:data-proofer-ignore="true" title="This link might be broken."} ranks Cloudlfare [#1 among content delivery networks](https://www.g2.com/categories/content-delivery-network-cdn){:data-proofer-ignore="true" title="This link might be broken."}
    
    So, it gets a few good comments.

[^WordPress-popularity]: WordPress is [15x more widely used](https://w3techs.com/technologies/overview/content_management) than the second most widely used CMS, as of writing.

[^WordPress-quality]:
    Here are some reviews of WordPress:
    
    - Technology review site [TechRadar](https://www.techradar.com) ranks [WordPress top CMS](https://www.techradar.com/best/cms).
    - Technology review site [Toolbox](https://www.toolbox.com) ranks [WordPress top CMS](https://marketing.toolbox.com/articles/10-best-content-management-systems-cms-software-in-2020).
    - Web hosting provider [Hostinger](https://www.hostinger.com/) ranks [WordPress top CMS](https://www.hostinger.com/tutorials/best-cms).
    - Web hosting provider [Ionos](https://www.ionos.com) details [why WordPress is the most popular content management system](https://www.ionos.com/digitalguide/hosting/cms/cms-comparison-a-review-of-the-best-platforms/).
    - Technology review site [TrustRadius](https://www.trustradius.com){:data-proofer-ignore="true" title="This link might be broken."} has WordPress as [one of its top ranked content management systems](https://www.trustradius.com/cms){:data-proofer-ignore="true" title="This link might be broken."}.
    
    Again, a few good comments.
