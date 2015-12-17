require "rubygems"
require "bundler/setup"
require "stringex"
require "cgi"

## -- Config -- ##

public_dir      = "public"    # compiled site directory
posts_dir       = "_posts"    # directory for blog files
new_post_ext    = "md"  # default new post file extension when using the new_post task
new_page_ext    = "md"  # default new page file extension when using the new_page task
scripts_file    = "_includes/scripts.html"
config_file     = "_config.yml"


#############################
# Create a new Post or Page #
#############################

# usage rake new_post
desc "Create a new post in #{posts_dir}"
task :new_post, :title do |t, args|
  if args.title
    title = args.title
  else
    title = get_stdin("Enter a title for your post: ")
  end
  filename = "#{posts_dir}/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}.#{new_post_ext}"
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
  tags = get_stdin("Enter tags to classify your post (comma separated): ")
  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
    post.puts "tags: [#{tags}]"
    post.puts "image:"
    post.puts "  feature: "
    post.puts "  credit: "
    post.puts "  creditlink: "
    post.puts "comments: false"
    post.puts "---"
  end
end

# usage rake new_page
desc "Create a new page"
task :new_page, :title do |t, args|
  if args.title
    title = args.title
  else
    title = get_stdin("Enter a title for your page: ")
  end
  filename = "#{title.to_url}.#{new_page_ext}"
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
  tags = get_stdin("Enter tags to classify your page (comma separated): ")
  puts "Creating new page: #{filename}"
  open(filename, 'w') do |page|
    page.puts "---"
    page.puts "layout: page"
    page.puts "permalink: /#{title.to_url}/"
    page.puts "title: \"#{title}\""
    page.puts "tags: [#{tags}]"
    page.puts "image:"
    page.puts "    feature: "
    page.puts "    credit: "
    page.puts "    creditlink: "
    page.puts "---"
  end
end

# usage rake new_page
desc "Add a new message of the minute"
task :motm, :message do |m, args|
    if args.message
        message = args.message
    else
        message = get_stdin("Enter the message: ")
    end
    message = CGI.escapeHTML(message)
    filename = scripts_file
    if !File.exist?(filename)
        abort("The scripts file was not found")
    end
    puts "Creating new message: #{message}"
    text = File.read(filename)
    new_contents = text.gsub(/var POSSIBLE_MESSAGES = \[\n[ ,] /,
                             "var POSSIBLE_MESSAGES = [\n  \"#{message}\"\n, ")
    
    File.open(filename, "w") {|file| file.puts new_contents }
    puts "Done"
end

# usage rake local
desc "Prepare for local editing"
task :local do |args|
    filename = config_file
    if !File.exist?(filename)
        abort("The config file was not found")
    end
    text = File.read(filename)
    new_contents = text.gsub(/(url: *)http:\/\/carterpape.github.io/, '\1http://localhost:4000')
    File.open(filename, "w") {|file| file.puts new_contents }
    puts "Done"
end

# usage rake remote
desc "Prepare for committing to server"
task :remote do |args|
    filename = config_file
    if !File.exist?(filename)
        abort("The config file was not found")
    end
    text = File.read(filename)
    new_contents = text.gsub(/(url: *)http:\/\/localhost:4000/, '\1http://carterpape.github.io')
    File.open(filename, "w") {|file| file.puts new_contents }
    puts "Done"
end

def get_stdin(message)
  print message
  STDIN.gets.chomp
end

def ask(message, valid_options)
  if valid_options
    answer = get_stdin("#{message} #{valid_options.to_s.gsub(/"/, '').gsub(/, /,'/')} ") while !valid_options.include?(answer)
  else
    answer = get_stdin(message)
  end
  answer
end