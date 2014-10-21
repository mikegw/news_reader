NewsReader.Routers.FeedsRouter = Backbone.Router.extend({
  routes: {
    "" : "index",
    "feeds/:id": "feedShow"
  },

  initialize: function (el) {
    this.$el = $(el);
    //this.$indexEl = $()
  },

  index: function () {
    NewsReader.feeds.fetch();
    var indexView = new NewsReader.Views.FeedIndex({collection: NewsReader.feeds});
    this.$el.html(indexView.render().$el);
  },

  feedShow: function(id) {
    var feed = NewsReader.feeds.getOrFetch(id);
    console.log("this feed", feed)
    feed.fetch();
    var showView = new NewsReader.Views.FeedShow({ model: feed });
    this.$el.html(showView.render(id).$el);
  }



});