---
title: "LibSass is dying. How will Jekyll respond?"
---

[The king](https://sass-lang.com/libsass) is [(almost) dead](https://sass-lang.com/blog/libsass-is-deprecated). Long live [the king](https://github.com/sass/dart-sass)!

[LibSass](https://sass-lang.com/libsass), which undergirds [Jekyll's native Sass pre-compiler](https://github.com/jekyll/jekyll-sass-converter), [is deprecated](https://sass-lang.com/blog/libsass-is-deprecated). Jekyll has roughly until November to transition to Dart Sass or drop native Sass support altogether.

Here's exactly how Jekyll is affected:

- The [`jekyll`](https://github.com/jekyll/jekyll) gem [depends on](https://github.com/jekyll/jekyll/blob/c9c9dc7dac74bce963101dd5c8670226dae01d85/jekyll.gemspec#L39) the [`jekyll-sass-converter`](https://github.com/jekyll/jekyll-sass-converter) gem.
- The `jekyll-sass-converter` gem [depends on](https://github.com/jekyll/jekyll-sass-converter/blob/d2b4d3e797c4fa549fc68aba0cb2c21c64c13db4/jekyll-sass-converter.gemspec#L19) the [`sassc`](https://rubygems.org/gems/sassc/versions/1.1.0) gem (also known as [`sassc-ruby`](https://github.com/sass/sassc-ruby) and not to be confused with [`sassc`](https://github.com/sass/sassc), a wrapper around LibSass written in C).
- The `sassc` gem, because it is a Ruby wrapper around LibSass, is [among those affected](https://sass-lang.com/blog/libsass-is-deprecated#how-do-i-migrate) by the project's deprecation.
- There are currently [no plans](https://github.com/sass/sassc-ruby/issues/220) for migrating the `sassc` gem to [Dart Sass](https://sass-lang.com/dart-sass), which is the "primary" or ["reference"](https://github.com/sass/dart-sass) implementation of Sass.

This is the second time, as far as I am aware, that the default Sass implementation that Jekyll was using has been deprecated. [The first](https://github.com/jekyll/jekyll-sass-converter/issues/74) was when [Ruby Sass](https://sass-lang.com/ruby-sass) [died](https://sass-lang.com/blog/ruby-sass-is-unsupported).

Ending Ruby Sass took one year and two days. The language designers announced deprecation [on April 2, 2018](https://sass-lang.com/blog/ruby-sass-is-deprecated); they declared end-of-life [on April 4, 2019](https://sass-lang.com/blog/ruby-sass-is-unsupported). This time around, the deprecation announcement of LibSass came [on Oct. 26, 2020](https://sass-lang.com/blog/libsass-is-deprecated), so Oct. 28 seems like a reasonable target date for transitioning away from LibSass.

As you can see, I have been scouring for references on this and trying to figure out the plans for moving on from LibSass. For myself, I am planning to jury-rig a script to compile Sass with Dart Sass, and hopefully it is as fast and easy as simply using the `jekyll-sass-converter` gem natively, but I have only so much patience for scripting since I prefer to instead financially support people who develop open source projects.

So, my question is: **What is the Jekyll project's plan for migrating away from LibSass?** I think it would be best to maintain rather than drop Sass support and to do so by moving to Dart Sass, but I'm likely not the person who would do that programming, and I am only so tied into the weeds of the project itself.

Any and all guidance, references, opinions, or updates welcome.
