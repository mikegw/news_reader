//COLLECTION COLLECTION COLLECTION
NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url:"/api/feeds",
  model: NewsReader.Models.Feed,


  getOrFetch: function(id) {
    if (NewsReader.feeds.get(id)) {
      var feed = NewsReader.feeds.get(id);
      // feed.fetch();
    } else {
      var feed = new NewsReader.Models.Feed({id: id});
      feed.fetch({
        success: function() {NewsReader.feeds.add(feed)}
      });
    }

    return feed;
  }


})