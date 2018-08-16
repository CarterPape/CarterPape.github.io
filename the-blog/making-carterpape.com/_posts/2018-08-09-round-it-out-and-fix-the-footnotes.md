---
title: "round it out and fix the footnotes"
date: 2018-08-09 10:36:00 -0400

keywords:
    - personal website
    - GitHub
    - website maintenance
    - web design
    - rounded corners
    - footnotes
    - target blank
    - Markdown
    - animation
    - jekyll references
---

I've recently done some changes to the website that I thought might be useful to document, so this article provides a rundown of some of what I changed.


## The footnote backlink symbol now makes sense.
**Previously:** Footnote backlinks on my site used the ↩︎︎ character.  
**[Now][GitHub: footnote backlink]:** Footnote backlinks on my site now use the ⤴ character.

The default symbol that kramdown renders for footnotes, which I had been using previously, never really made sense to me as an icon that meant, "Click me to go back up." I regarded this as a minor issue;[^gruber-footnote-symbol] a different footnote-related issue caused me to change this.

I have not made a habit of debugging my website from my phone before deploying changes. Because of this, I have not actively maintained the look of the site on mobile, so issues pop up on me periodically. One such issue was that the footnote backlink symbol I was using rendered as the ↩️ emoji on my iPhone when I visited my website.

Upon seeing this, I decided I needed to look into how to change the footnote backlink symbol I was using for my website. Seeing as I was fixing a footnote-related problem, I decided I might as well look at backlink symbol alternatives, and I ended up finding one.[^it-was-hiding]

While originally, I was going to attempt to make a custom Jekyll plugin to change the footnote backlink symbol, I found a much more programmatically sound manner of addressing the issue from [olivermak.es], about which [I wrote previously][me on olivermak.es].

All I needed was to add the following kramdown option to my `_config.yml` document:

~~~~ yml
kramdown:
    footnote_backlink: "⤴"
~~~~

Of course kramdown should be the one addressing the footnote backlink problem; it is the entity rendering the footnotes! Thus, I had found the perfect solution, and it even circumvented the "↩︎︎ renders as ↩️ on iPhones" problem.


## External links now open in a new tab.
**Previously:** I had to manually specify `target="_blank"` for each external link on my site.  
**[Now][GitHub: external links]:** All external links automatically get the `target="_blank"` attribute.

In my browsing Jekyll plugins, I found [`jekyll-target-blank`]. Adding the plugin to your Jekyll project makes all external links (links that lead to pages that are not on your site) open in a new tab when clicked.

The way you tell a browser to open a link in a new tab is by adding `target="_blank"` to the attribute list of the relevant `a` tag, so presumably this plugin just adds that key-value attribute pair to all anchor tags with external `href` values, but I'm not actually sure how it works.[^how-do]


## Links now fade during mouseover events.
**Previously:** Links changed colors instantly when moused over ([like this](#){:style="transition: none;"}).  
**[Now][GitHub: link fading]:** Links change color animatedly during mouseover events ([like this](#)).

I can't remember where I saw this trick, but as soon as I realized that the website I was browsing did link color fading, I knew I needed to do it myself. The sudden color change on my site seemed quite jarring compared to the desired behavior. Fortunately, the fix required only [one line addition][GitHub: link fading].


## The selected footnote gets highlighted.
**Previously:** Clicking a footnote would scroll the browser to the selected footnote at the bottom of the article[^learn-bookmarking], but it wouldn't visually highlight it.  
**[Now][GitHub: footnote highlighting]:** Clicking a footnote scrolls the view to the selected footnote *and* visually outlines the selected footnote.

Previously, when you would clicked a footnote reference on my site (like this:[^like-this]), your browser would respond by just scrolling to the bottom of the page. The browser was *trying* to scroll such that the first line of the footnote you selected was at the very top of the view, but the browser couldn't have scrolled as far down as it wanted to because that would have put the bottom of the rendered page somewhere in the middle of the view, which would look awkward.

It instead would settle for scrolling as far down the page as possible without going past the bottom. This would put the targeted footnote in the middle of the view. This would create a problem whereby the reader would have to spend a moment searching for the correct footnote. 

When you follow a [link to a comment][a GitHub comment] on a GitHub issue, your browser may exhibit a similar scrolling behavior, but the contrast is that GitHub also visually highlights the selected comment, so you know what you're supposed to be reading. I realized I wanted to replicate this once I saw GitHub doing it.

I found that GitHub uses the [pseudo-class] CSS selector `:target`[^missed-that-one] to outline the "targeted" element (the element whose `id` is specified at the end of the URL, and to which the browser scrolls upon page load), so I implemented a similar fix.


## The corners of "card" views are now rounded.
**Previously:** The corners of article views and other main content views were sharp.  
**[Now][Github: rounded corners]:** Corners are rounded.

I had never set a `border-radius` value on any elements on my website because I felt like rounded corners created a somewhat cheesy look. I felt like all the rounded corners that I noticed on digital interfaces were not tastefully executed. In retrospect, this was clearly false; for example, Apple uses rounded corners everywhere on the digital interfaces they design, and generally they look great.

While looking at the CSS that GitHub uses to highlight selected comments, I noticed box shadows they use on their comments to create a "card" look. This caught my eye because it was similar to what I use on my site, but one thing was different: they round their corners.

After playing with a nonzero border radius on the card elements on my site, I quickly realized that I needed to switch. The round corners look so much better than the sharp edges I had before.


## features that were not added

### Footnote forward references don't get highlighted.

After I added footnote highlighting, I figured that I might add highlighting on back references as well to provide a way for the user to continue reading from where they left off after reading a footnote.

I experimented with a few looks; I settled on a simple pink highlight that would appear behind the forward reference (the number that appears in the main body of the text) when a user clicked the corresponding back reference (the ⤴ character). This worked fine as a means of guiding the eye to the right spot, but it caused my eye to spuriously jump back to that colorful spot on the screen even after reading on.

Having just created a `:hover` animation on links, I figured I could just create another animation. I would have the pink highlight behind the forward reference gradually fade away after the page scrolled to its place.[^javascript-scrolling] This would prevent the element from permanently being a distraction.

However, after playing around with different animation timings, I figured that implementing back reference highlighting, especially with animation, just didn't… feel right. That's my story and I'm sticking with it.

### I still don't have universal Markdown link references.

As I browsed Jekyll plugins, I found one that I thought may prove useful: [`jekyll-references`]. Here's an excerpt from the plugin's `README`:

{% capture content %}
> ### Usage
> Add `references.rb` file to your `_plugins` directory (create it if needed).
> Create a file named `_references.md` in your Jekyll site root,
> then add your markdown reference-style link definitions to it.
> 
> For example:
> 
>     [google]: http://www.google.com  "Google it!"
>     [wiki]: http://wikipedia.org  "Online Encyclopedia"
>     [id]: url  "tooltip"
> 
> You can now reference these links in any markdown file.
> For example:
> 
>     [Google][google] is a popular search engine and [Wikipedia][wiki] an
>     online encyclopedia.
{% endcapture %}

{% capture caption %}
— from GitHub repository [`jekyll-references`](https://github.com/olov/jekyll-references/blob/master/README.md) by user [olov](https://github.com/olov).
{% endcapture %}

{% include authoring/figure/attributed-quote.html %}

I am still considering bringing this plugin into the fold, but I have reservations. I will probably be using it within a month.

-----

That should explain most of the major changes I have made to my website recently. I did not cover the [new styling for block quote elements][GitHub: block quote styling], nor the major [programmatic changes][GitHub: figure element] I have been making behind the scenes, but this article should give you some insight into my process for maintaining this site.

I will be writing more descriptive commit messages from now on as a way of documenting changes the way God intended. If you want to follow my progress that way, you can follow [my commits to the master branch](https://github.com/CarterPape/CarterPape.github.io/commits/master).

I'm also weighing the ideas of branch-driven development and use of GitHub's issue tracking as means of aiding my development process. I have yet to decide whether that is appropriate. On one hand, that seems like too much for a personal website. On the other hand, it would be a good way to further familiarize myself with the process of developing the way it should be done.




[^gruber-footnote-symbol]:
    Also, John Gruber has used the ↩︎︎ symbol [since 2005][Gruber on footnotes], so I figured he had a good rationale for using it. If he's rationalized using it, why should I change? The answer: because changing it became convenient.
    
[^how-do]:
    I still do not fully understand how the plugin works. Is every anchor tag on the site affected by this `target="_blank"` trick? Can just the ones rendered from Markup be changed? 🤷🏼‍♂️

[^it-was-hiding]:
    The ⤴ symbol I picked ironically did not render correctly on the Wikipedia page I was browsing for options. It did render in the Unicode consortium PDF that the Wikipedia page references. That seems like a lesson on the importance of reading referenced documents.

[^javascript-scrolling]:
    I also started thinking about how I would make the page scroll smoothly using CSS, but after some googling, I discovered that the only way to implement smooth scrolling when you click an on-page bookmark link was to use JavaScript. I love JavaScript, but in the spirit of keeping this site as low-overhead as possible, I've generally avoided JavaScript in favor of less script-y solutions.
    
    Of course, I say "low overhead," but I have yet to optimize image file sizes. I guess that should be a priority.
    
[^learn-bookmarking]:
    [A good W3Schools page](https://www.w3schools.com/html/html_links.asp) describes how you can implement this behavior. The technique uses what W3Schools calls "HTML bookmarks."

[^like-this]:
    How convenient that this footnote gets outlined for you so that you know what you're supposed to be reading?

[^missed-that-one]:
    This `:target` functionality was one I had not known to exist prior to seeing its use in GitHub's HTML code, so I also browsed the list of HTML tags and CSS selector to make sure I was once again briefed on current web standards.



[`jekyll-references`]: https://github.com/olov/jekyll-references "a Jekyll plugin that allows you to create global Markdown link references"
[`jekyll-target-blank`]: https://github.com/keithmifsud/jekyll-target-blank "a Jekyll plugin that makes external links open in a new tab"
[a GitHub comment]: https://github.com/gettalong/kramdown/pull/167#issuecomment-67556623 "note the blue border that is added to the comment at this link"
[GitHub: block quote styling]: https://github.com/CarterPape/CarterPape.github.io/commit/28dfa1b5d5d6c36039c26ddc71fae82a88f7535e "the commit containing the changes I made to block quote styling"
[GitHub: external links]: https://github.com/CarterPape/CarterPape.github.io/commit/0220c7fa5b52db750cdf73b86ed16bc6537d6734 "the commit on GitHub that adds the external link plugin I used for this change"
[GitHub: figure element]: https://github.com/CarterPape/CarterPape.github.io/commit/a694b11f7aa468db1ba7f66e14e7ec111d008edb "the commit on GitHub containing a new Jekyll include file I am using in my posts"
[GitHub: footnote backlink]: https://github.com/CarterPape/CarterPape.github.io/commit/8bc9eccb2f6a0c65de97720bd302d6618eed9594#diff-aeb42283af8ef8e9da40ededd3ae2ab2R38 "the diff on GitHub that created the footnote backlink symbol change"
[GitHub: footnote highlighting]: https://github.com/CarterPape/CarterPape.github.io/commit/fb2cce409d1ccce866d586826a4e92572fb6c4c0 "the commit on GitHub that created footnote highlighting"
[GitHub: link fading]: https://github.com/CarterPape/CarterPape.github.io/commit/8bc9eccb2f6a0c65de97720bd302d6618eed9594#diff-b3d05ca4cdcb64807acb71a9a9242186R75 "the diff on GitHub that adds link fading"
[Github: rounded corners]: https://github.com/CarterPape/CarterPape.github.io/commit/8bc9eccb2f6a0c65de97720bd302d6618eed9594#diff-6758c1b8821482430af37822790a26ceR6 "the diff on GitHub that created the rounded corners"
[Gruber on footnotes]: https://daringfireball.net/2005/07/footnotes "John Gruber talking about adding footnotes to his site"
[me on olivermak.es]: {% link the-blog/making-carterpape.com/_posts/2018-07-28-olivermak-es-is-pretty.md %} "an article I wrote about a beautiful website"
[olivermak.es]: https://olivermak.es "a beautiful website"
[pseudo-class]: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes "the Mozilla foundation's documentation of CSS pseudo-classes"