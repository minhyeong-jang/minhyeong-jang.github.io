source "https://rubygems.org"
ruby RUBY_VERSION

# Ruby 3.2+ compatibility: tainted? method was removed
if RUBY_VERSION >= '3.2'
  [Object, String, Array, Hash].each do |klass|
    klass.class_eval do
      def tainted?; false; end
      def taint; self; end
      def untaint; self; end
    end
  end
end

gem "jekyll", "3.9.0"
gem "csv"
gem "bigdecimal"
gem "webrick"

# If you have any plugins, put them here!
group :jekyll_plugins do
   gem "jekyll-feed", "~> 0.6"
   gem "jekyll-paginate"
   gem "jekyll-sitemap"
   gem 'github-pages', ">= 212"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
