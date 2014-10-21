NewsReader.Views.FeedIndex = Backbone.View.extend({

  initialize: function ( ) {
    this.listenTo(this.collection, "sync", this.render);
  },

  template: JST["feedIndex"],

  render: function() {
    var template = this.template;
    this.$el.html(template({ collection: this.collection }));

    return this;
  }
});