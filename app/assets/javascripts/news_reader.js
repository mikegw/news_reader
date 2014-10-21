window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.feeds = new NewsReader.Collections.Feeds();
    this.feeds.fetch();
    
    var router = new NewsReader.Routers.FeedsRouter($('#content'));
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
