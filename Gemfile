source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run. When you want to use a different version, change it below, save the file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and uncomment the line below. To upgrade, run `bundle update github-pages`. gem "github-pages", group: :jekyll_plugins
# If you have any plugins, put them here!
group :jekyll_plugins do
    gem "jekyll-feed"
    gem "jekyll-target-blank"
    gem "jekyll-minifier"
    gem "jekyll-redirect-from"
    gem "jekyll-seo-tag"
    gem "jekyll-optional-front-matter"
    gem "jekyll-twitter-plugin"
    gem "jekyll-sass-converter",
        github: "ntkme/jekyll-sass-converter",
        branch: "main"
    gem "jekyll-reduce-title-redundancy",
        github: "CarterPape/jekyll-reduce-title-redundancy",
        branch: "master"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
    gem "tzinfo"
    gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", :platforms => [:mingw, :x64_mingw, :mswin]


gem "classifier-reborn"
gem "webrick"
gem "html-proofer"
