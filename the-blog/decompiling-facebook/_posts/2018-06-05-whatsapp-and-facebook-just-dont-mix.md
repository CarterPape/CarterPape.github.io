---
title: "Facebook and privacy just don't mix."
excerpt: "The tension in the story of Facebook and WhatsApp is a close parallel to a larger tension between user privacy and Facebook's profit motives."

social_image:
    path: "https://s3.amazonaws.com/carterpape-assets/WhatsApp+preview.png"

date: 2018-06-05 21:46:00 -0400
last_modified_at: 2018-08-10 12:00:00 -0400

ext-link: "https://www.washingtonpost.com/business/economy/whatsapp-founder-plans-to-leave-after-broad-clashes-with-parent-facebook/2018/04/30/49448dd2-4ca9-11e8-84a0-458a1aa9ac0a_story.html"

tags: [WhatsApp, Facebook]
keywords:
    - WhatsApp
    - end-to-end encrpytion
    - privacy
    - advertising model
    - Facebook's profit incentives
    - Facebook
    - secret conversations
    - Facebook Messenger
    - Messenger
---

I'll begin near the end, with the departure of WhatsApp's founders from Facebook after they got acquired by the tech giant. From Elizabeth Dwoskin's story in *The Washington Post* published April 30, 2018, [_WhatsApp founder plans to leave after broad clashes with parent Facebook_]({{ page.ext-link }}):

> The billionaire chief executive of WhatsApp, Jan Koum, is planning to leave the company after clashing with its parent, Facebook, over the popular messaging service’s strategy and Facebook’s attempts to use its personal data and weaken its encryption, according to people familiar with internal discussions.

The Facebook executive who was chief defender of WhatsApp users' privacy has left. Is this a bellwether in the story of regulating Facebook? 

## the stakes of Koum's departure

Because of Facebook's acquisition of WhatsApp, users have faced broken promises regarding how the information they share with WhatsApp is used:

> Eighteen months later, the promise not to share data evaporated. Facebook pushed WhatsApp to change its terms of service to give the social network access to the phone numbers of WhatsApp users, along with analytics such as what devices and operating systems people were using.
> 
> …
> 
> Acton and Koum acquiesced, enabling Facebook to recommend that users’ WhatsApp contacts become their Facebook friends and making it possible for Facebook to collect more data about those relationships. The changes also allowed advertisers to feed lists of phone numbers into Facebook’s advertising system, known as Custom Audience, and find new people to target with ads.

Kuom's departure, which came six months after the departure of his co-founder Brian Acton, raises the stakes for WhatsApp's user base as they stand to possibly lose some of the platform's core promises in the absence of its original co-founders. It raises a few questions:
- When acquiring WhatsApp, was Facebook primarily interested in assimilating the WhatsApp audience into its other products (Facebook, Instagram, Messenger, …)?
- How did Facebook square the tension between the values of privacy and user empowerment at the core of WhatsApp and the advertising model that drives Facebook's revenue?
- Will WhatsApp users ever see ads in the app?
- Will WhatsApp messages remain encrypted end-to-end?

WhatsApp built end-to-end encryption into the app in 2016, after its acquisition by Facebook, giving users a totally private messaging experience. By contrast, Messenger, which is Facebook's messaging platform, can monetize users' conversations.[^Messenger]

In other words, Facebook has the ability to mine users' conversations on Messenger for ad targeting fodder because those messages are not encrypted end-to-end.

The result is that Facebook can present advertisements to you in your news feed that are targeted to you based on the private conversations you're having in Messenger. If you're talking about how hungry you are with your friends, maybe you'll start seeing advertisements for local restaurants!

**This is what Facebook's critics mean when they say that Facebook turns users into the product.**

## Facebook's own equivalent to WhatsApp

To better understand Facebook's thinking on WhatsApp and how it fits into their product suite, I looked up press releases and statements Facebook has made about [secret conversations][full help page on secret conversations], which was a feature it added to its Messenger service to provide users the same end-to-end encryption that is built into WhatsApp, Apple's Messages, Signal, and other secure messaging platforms.

As it turns out, Facebook kind of trips over itself explaining secret conversations in their [initial press release][secret conversations press release] about it, awkwardly dodging the technical detail that end-to-end encryption's main draw is that it prevents Facebook from seeing the content of your messages (i.e. it prevents your messages from being monetized):

> Your messages and calls on Messenger already benefit from strong security systems… [but] We’ve heard from you that there are times when you want additional safeguards — perhaps when discussing private information like an illness or a health issue with trusted friends and family, or sending financial information to an accountant.[^private-on-messenger]

The announcement manages to sidestep all mentions of what those "additional safeguards" are: a means of preventing Facebook from seeing your messages. The only mention of third parties in explaining secret conversations is at the end of the [white paper][Messenger white paper] that accompanies the secret conversations announcement:

> Third parties — Facebook included — do not have access to message plaintext and messages can only be decrypted by their intended recipient.

This line begs the question: why wouldn't Facebook bake this maximum level of security into _all_ its messaging? That's a question for Facebook to answer, but their business model provides a possible explanation: access to users' private conversations helps Facebook's ad targeting business.

Something else to note: Facebook makes secret conversations pretty inaccessible to users.

First, it keeps the secret conversations functionality within the Messenger app a secret. Without looking, can you figure out what you might do to send a secret message? Once you've thought about that, go look at how you actually [enable secret conversations].

Second, Facebook does not enable secret conversations on the Messenger website (i.e. you cannot use secret conversations in a browser on your computer). This is in part because their conversation encryption protocol is not compatible with use in an internet browser.

Because broad usage of Facebook's secret conversations (rather than standard Messenger conversations) would cut out Facebook's ability to use your conversations to inform their ad targeting operations, they have a profit incentive to _not_ make secret conversations their standard for messaging.

## At Facebook, privacy is secondary to profit.

Facebook does a very thorough job building privacy settings into the Facebook experience, ensuring that users can easily identify whether the post or image they're sharing is going to be visible to just their friends and family or to the whole world.

What Facebook doesn't do is provide users information within these settings about how their information is shared with Facebook and its advertising partners. You have a say in whether your posts are public or private to your friends, but you don't get a say in whether Facebook uses the content of your posts for targeting advertisements to you.

The location where your profile picture was taken, the ideas you share in the missives you write in Facebook posts, the content of messages you send to your friends and loved ones, and nearly all of the other information you provide to Facebook… all of it can be used for ad targeting purposes, and it's in Facebook's interest not to remind you that such is the case.

_This post was last updated August 16, 2018 with minor grammatical and layout changes._




[^Messenger]:
    Understanding whether Facebook actually uses Messenger conversations to do ad targeting will be the subject of a future post. For now, I can say that it is nearly certain, but merely the fact that I have been researching this and can't find a clear answer from Facebook itself says something about their problem with transparency.
    
[^private-on-messenger]:
    It seems unlikely to me that anyone who understands that their messages on Messenger can be monetized would feel okay using the service to share sensitive information like financial or medical records.



[Decompiling Facebook index]: /the-blog/decompiling-facebook/
[enable secret conversations]: https://www.facebook.com/help/messenger-app/811527538946901?helpref=uf_permalink
[full help page on secret conversations]: https://www.facebook.com/help/messenger-app/1084673321594605/?helpref=hc_fnav
[Messenger white paper]: https://web.archive.org/web/20200803073615/https://fbnewsroomus.files.wordpress.com/2016/07/messenger-secret-conversations-technical-whitepaper.pdf
[secret conversations press release]: https://newsroom.fb.com/news/2016/07/messenger-starts-testing-end-to-end-encryption-with-secret-conversations/
