window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new NewsReader.Routers.FeedsRouter($('#content'));

    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
