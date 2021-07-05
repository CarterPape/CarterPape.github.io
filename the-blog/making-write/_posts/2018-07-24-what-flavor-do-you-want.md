---
title: "What flavor do you want?"
description: "Markdown comes in all sorts of variations. Which one should I use in my app?"
date: 2018-07-24 10:00:00 -0400

tags: [markdown flavors]
keywords:
    - markdown standard
    - CommonMark
    - Markdown
    - kramdown
    - markdown flavor
    - markdown variation
    - markdown implementation
    - markdown parser
    - text editor
    - software development
---

One of the defining properties of Markdown is its [wide variety of implementations][markdown implementation list].[^so-many-Markdown] Because there are so many versions of Markdown from which to choose, an important part of my exercise writing a Markdown-aware text editor is to figure out which Markdown standard to use and thus which features the app will boast.

## CommonMark provides an impressively complete specification…

A good starting point for thinking about Markdown implementations is a look at the [CommonMark spec]. CommonMark's documentation completely and unambiguously defines a Markdown standard based on the core features from [the original Markdown spec][Gruber's Markdown spec], plus a few (like [link references][CommonMark spec: link references]) that were not a part of the original Markdown specification.

CommonMark's documentation goes to great lengths to define the behavior of even the most extreme of edge cases,[^CommonMark-on-emphasis] which is the mark of a great spec.

However, not only does CommonMark provide a great specification of a common Markdown standard; the creators of CommonMark also describe [a strategy][CommonMark appendix] for parsing CommonMark documents. This strategy works for implementing a CommonMark parser, but a careful developer can use it as a guideline in creating a parser for other flavors of Markdown—namely, more feature-rich versions.

## …but kramdown has such attractive features…

[kramdown] is perhaps the most feature-rich Markdown interpreter, or at least the most popular among extended Markdown implementations.

kramdown is compatible with many of the less extended Markdown standards, and it provides features that CommonMark does not. Tables, footnotes, and attribute lists are a few such examples.[^features-I-use]

Additionally, [Jekyll], a static site generator popularized by [GitHub Pages], uses kramdown as [the default Markdown processor][Jekyll uses kramdown], while GitHub Pages [*only* supports kramdown][GitHub uses kramdown].

This make kramdown a well-endorsed and quite popular standard. It also means that I have grown accustomed to using kramdown's features, and I am convinced that many of them should be considered "standard" Markdown features.[^standard-markdown-features]

## …and I want a feature-rich standard that is well-defined…

There are no perfect Markdown flavors. CommonMark has a complete spec but is missing great features (e.g. footnotes). kramdown has a wide and useful feature set, but its documentation lacks enough depth to meaningfully aid me if I implement my own kramdown parser.

The creators of kramdown have published a [syntax document][kramdown syntax document], but it is merely an overview compared to the [CommonMark spec]. The kramdown syntax documentation barely touches on how it handles edge cases, and it certainly does not provide as many examples as the CommonMark spec.

The complete kramdown spec is a consequence of its [parser code][kramdown on GitHub]. The kramdown syntax documentation does not try to unambiguously define a specification the way CommonMark's documentation does, which means articulating the complete kramdown spec requires reading, running, and testing the kramdown processor code.

If CommonMark has the specification completeness that I need for developing a Markdown interpreter, but kramdown is what I and plenty others actually use, what is the solution?

## …so I will implement a CommonMark parser, then attempt to implement a kramdown parser.

It seems like the best path forward is to start by implementing a CommonMark parser, simply because the CommonMark documentation is more verbose and complete than the kramdown documentation.

Once I have successfully implemented a CommonMark parser in the app, I should have a good enough understanding of how the parser functions to properly add kramdown features on top of it and modify existing behaviors to conform to the kramdown spec.[^or-reinvent-the-wheel]

Perhaps I can even make both CommonMark and kramdown parsing available to the user by allowing them to choose which the standard in which they're writing. My initial impression of this idea, however, is that it will unnecessarily complicate the user experience.

## my thoughts on a unifying Markdown standard

As I was researching for this part of development, I skimmed an article from 2014 entitled "[The State of Markdown]," in which the author seems pretty adamant that the diversity of standards for Markdown is a Really Bad Thing and that people really need to hop on the CommonMark train so that we can all have one unifying standard.

Whether one unifying Markdown standard can or will exist, I am unsure. Whether Markdown even needs such a unifying standard is a question I think is worth asking. It's a markup language with relatively informal roots.[^Markdown-started-poorly] In its current form, it just doesn't feel like the kind of thing that needs a unifying standard.

Without the addition of key features like footnotes, it seems to me unlikely that CommonMark will become **the** Markdown standard, and it does not appear as though any such additions will happen anytime soon, for the following reasons:

- Since the publishing of the standard in 2014, no major features have ever been added.[^citation-CommonMark-change-log]
- The [list of proposed changes][proposed CommonMark feature list] is bloated and has only ever grown.[^citation-feature-list-history]
- [The finalized 1.0 spec is set to be released later this year.][CommonMark 1.0]

If CommonMark can't become the common Markdown standard, I think it's very unlikely that any Markdown standard will rise to the top in the near future.




[^citation-CommonMark-change-log]: Refer to the specification's [change log][CommonMark change log].

[^citation-feature-list-history]: Refer to the histories of [each](https://github.com/commonmark/CommonMark/wiki/Proposed-Extensions/_history) of the [two](https://github.com/commonmark/CommonMark/wiki/Proposed-Extensions-to-CommonMark/_history) lists of proposed extensions on the [CommonMark GitHub wiki].

[^CommonMark-on-emphasis]: Over 20 percent of the examples provided in the CommonMark spec are dedicated to explaining how [emphasis and strong emphasis][CommonMark spec: emphasis] indicators are interpreted. Additionally, 17 rules defining the use of emphases are outlined in the section.

[^features-I-use]: While I have yet to create a table with Markdown, it's comforting to know it's an option. I use attribute lists mostly for styling images in my posts, and as you can see, I use footnotes very regularly.

[^Markdown-started-poorly]: As the authors of the CommonMark spec [point out][CommonMark spec: why a spec is needed], the [canonical description of Markdown][Gruber's Markdown spec] is buggy and ambiguous.

[^or-reinvent-the-wheel]: Or, more realistically, I will have to either write a whole new parser for kramdown or make (or find) a wrapper for the existing kramdown Ruby parser. Again, I expect this to be easier once I have the experience of implementing a CommonMark parser.

[^so-many-Markdown]:
    This huge variety of implementations is worth exploring more in depth. The proliferation of differing Markdown standards is unique; with other markup languages, you see different interpreters adopting slightly different standards, but not with such strong disagreement between the standards.
    
    You see this with HTML; browsers render certain minor or newly developed elements differently. In addition, some modern browsers adopt different standards for novel CSS selectors. The biggest disagreement between browsers concerns the parts of the standard that are "under development." With every other part of the standard, there is very good agreement.
    
    This is not the case with Markdown, even the fundamentals of how to interpret a list differs between major standards.
    
    Part of what may explain this is the existence of a standards body, [W3C], for web languages like HTML. The existence of W3C puts pressure on browsers to adopt the common standards that other browsers are using, resulting in good agreement between browsers on how to render most webpages.
    
    W3C has not chosen to standardize Markdown the way they have standardized HTML and CSS, and I think it is safe to assume that this strongly correlates with the massive count of Markdown standards that exist. I'd have to look further into this to assert that such is truly the case.

[^standard-markdown-features]: For example, even John Gruber, [the inventor of Markdown][Gruber's Markdown spec], [uses footnotes][Gruber using footnotes] on [his blog][Daring Fireball], yet they are not included in his Markdown spec. Footnotes are not specified in the CommonMark spec, either.


[CommonMark 1.0]: https://commonmark.org/#when
[CommonMark appendix]: https://spec.commonmark.org/0.28/#appendix-a-parsing-strategy
[CommonMark change log]: https://spec.commonmark.org/changelog.txt
[CommonMark GitHub wiki]: https://github.com/CommonMark/CommonMark/wiki
[CommonMark spec]: https://spec.commonmark.org/0.28/
[CommonMark spec: emphasis]: https://spec.commonmark.org/0.28/#emphasis-and-strong-emphasis
[CommonMark spec: link references]: https://spec.commonmark.org/0.28/#link-reference-definitions
[CommonMark spec: why a spec is needed]: https://spec.commonmark.org/0.28/#why-is-a-spec-needed-
[Daring Fireball]: https://daringfireball.net
[GitHub Pages]: https://pages.github.com
[GitHub uses kramdown]: https://help.github.com/articles/updating-your-markdown-processor-to-kramdown/
[Gruber's Markdown spec]: https://daringfireball.net/projects/markdown/
[Gruber using footnotes]: https://daringfireball.net/2005/07/footnotes
[Jekyll]: https://jekyllrb.com
[Jekyll uses kramdown]: https://github.com/jekyll/jekyll/pull/1988
[kramdown]: https://kramdown.gettalong.org/
[kramdown on GitHub]: https://github.com/gettalong/kramdown
[kramdown syntax document]: https://kramdown.gettalong.org/syntax.html
[markdown implementation list]: https://github.com/markdown/markdown.github.com/wiki/Implementations
[proposed CommonMark feature list]: https://github.com/commonmark/CommonMark/wiki/Proposed-Extensions
[The State of Markdown]: https://philsturgeon.uk/markdown/2014/11/30/state-of-markdown/
[W3C]: https://www.w3.org
