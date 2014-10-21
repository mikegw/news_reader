NewsReader.Views.FeedShow = Backbone.View.extend({

  initialize: function ( ) {
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST["feedShow"],

  render: function() {
    var template = this.template({ feed: this.model });
    this.$el.html(template);
    return this;
  }
});