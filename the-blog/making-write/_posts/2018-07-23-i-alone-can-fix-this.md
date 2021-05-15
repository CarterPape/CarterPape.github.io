---
title: "I alone can fix this."
excerpt: "There are things iA Writer and other apps don't do that I wish they would, so here's a first draft of a design solution."
date: 2018-07-23 20:39:00 -0400

social_image:
    path: "https://s3.amazonaws.com/carterpape-assets/write-render.png"

tags: [text editors]
keywords:
    - iA Writer
    - programming
    - app development
    - best text editor
    - best text editors
    - write, the app
    - markdown editor
    - software development
---

It can be hard to just sit down and write. There are plenty of distractions in modern word processors. Using even the simplistic text editors—the ones that don't have page layout settings or font preferences—can prevent you from focusing on the action of writing. They can do this with fancy but irrelevant functionality, awkward workflows, or any number of other pitfalls that come with designing a text editor.

## *iA Writer*

iA Writer is a (the?) standard-bearer for distraction-free writing that allows you to just "focus on the words". iA Writer is a really well-designed app, and enormously popular, receiving high praise even in the New York Times. The team at iA Inc. even keeps a blog with tips about web content creation.[^CHINA]

While iA Writer is a very good app designed and developed by very talented people, it of course is not perfect. Specifically, iA Writer is not optimized for the kind of writing that I find myself doing.

For one example, iA Writer chooses not to change the font size of header text when you make it in the editor. This takes away from the seeing the organization of text as one is writing it, which I find important in my own writing. Headers look the same as bold text, which is confusing.

Additionally, iA Writer uses a monospace font in their text editor. This is harder to read than most fonts, which tend to be optimized for readability (something that is not the first priority in designing a monospace fonts). Although the iA Writer experience focuses on the production (rather than consumption) of words, editing text (which such an app should support and prioritize) inherently involves reading text. Readability is thus important in the design of a text editor.

In part because of iA Writer's imperfections (and its price tag), I was inspired this summer to make my own text editor, one that I could design and tweak myself based on what I found to be most needed in my writing workflows. The app's design focuses on creating an optimal web content writing experience, a scope that is more specific than iA Writer's and therefore provides opportunities for optimization.

## *write*

I am making an app that gives users a focused writing environment and is catered toward people who have experience writing web content. The name of the app is *write*.

I'm making this app as something that I would want to use regularly myself, because that's my plan. The app's design is based on what I want and like in text editors that I use for my own writing. However, the traits I suspect that what I like in a text editor may be commonly appreciated among web content writers besides myself, so I hope to see others use this app and critique it as well.

The idea for this app came to me as I was using [Paper], which is available on the macOS App Store and continues to be my writing environment of choice while *write* is under development.

Paper is a decent place for writing and editing prose that is sprinkled with Markdown elements. It recognizes and formats the common form of links that look like `\[this\]\(https://link.location\)`. Paper bolds lines containing ATX headers; it bolds or emphasizes text with asterisks and underscores; it shows ordered and unordered lists.

However, there are plenty of things that Paper does not do or recognize. Paper does not recognize link references; it does not recognize header levels deeper than three; it only provides one look for headers (the same look that bolded text has); it doesn't recognize blockquotes; … the list is long.

## the beginning

![a screenshot of Paper, which does does not properly render all Markdown elements in the view][Paper screenshot]

It was disappointing to use Paper for the first time and discover the number of markdown elements that the app didn't recognize. Simultaneously, the minimalistic design and functioning of the app was very attractive and unique.

I realized that I could surely recreate the functionality provided by Paper while adding my own elements, design touches, and so on, so I made an Xcode project and started creating a simple text editor in the mold of Paper. I [named it][naming the app] "write".

After playing around enough to enable opening and closing text documents, perfecting the window's layout, and adding a word counter, I realized that the job would be doable. I had not scratched the surface of the hardest part of the project (parsing Markdown), but the fundamentals were there, and I decided to start on the design phase.

## whipping up a design document

I decided to create a realistic render-looking view of how I wanted the app to look. After a few rudimentary drawings that attempted to flesh out how the app would handle blockquotes and list indentation, I decided I should give a go at drawing the app up in Adobe Illustrator.

After a few hours of work, most of which was spent ruminating on design choices (Should blockquotes be grayed out a bit? Should hyperlinks be hidden or always shown? Where should a monospace be used?), I had created a document that explained the design and functioning of the app itself, with a few notes on what else needed to be decided.

As a first draft, I think the design covers the basics quite well, but I will need to address the left over concerns I came up with after creating the document before I actually start realizing the design.

If you are interested to see [the original Adobe Illustrator file][design in ai], I have made it public (with the used fonts). You can also view [the file as a `.pdf`][design in pdf] if you can't view `.ai` files.

![a render of write, the app, which properly formats all elements in the view][write render]


[^CHINA]: They also have periodic [editorializing][Oliver Reichenstein on China] about tech-related topics on the blog.

[design in ai]: https://s3.amazonaws.com/carterpape-assets/how+the+app+will+look.zip "direct download of the original .ai file and related assets"
[design in pdf]: https://s3.amazonaws.com/carterpape-assets/how+the+app+will+look.pdf "direct download of a .pdf version of the write app rendering"
[Oliver Reichenstein on China]: https://ia.net/topics/designed-in-china-assembled-in-california
[Paper]: https://www.papereditor.app/ "link to the app's website"
[Paper on Twitter]: https://twitter.com/papereditorapp
[Paper screenshot]: https://s3.amazonaws.com/carterpape-assets/paper-screenshot.png "a screenshot of Paper, the app I am currently using and upon whose functionalities I seek to improve"
[write render]: https://s3.amazonaws.com/carterpape-assets/write-render.png "a render of write, the app, created with Adobe Illustrator"

[naming the app]: {% link the-blog/making-write/_posts/2018-07-23-naming.md %} "blog post about how I named write, the app"
