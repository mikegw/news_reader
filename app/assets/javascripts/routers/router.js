NewsReader.Routers.FeedsRouter = Backbone.Router.extend({
  routes: {
    "" : "index"
  },

  initialize: function (el) {
    this.$el = $(el);
    //this.$indexEl = $()
  },

  index: function () {
    //this.$indexEl=
    console.log(this.$el);
    var collection = new NewsReader.Collections.Feeds();
    var that = this;
    collection.fetch({
      success: function () {
        console.log("HUZZAH!");
        var indexView = new NewsReader.Views.FeedIndex({
          collection: collection
        });
        console.log(indexView.render());
        that.$el.append(indexView.render().$el);
      }
    });


  }
});