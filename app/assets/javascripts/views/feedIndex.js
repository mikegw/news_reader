NewsReader.Views.FeedIndex = Backbone.View.extend({
  template: JST["feedIndex"],

  render: function() {
    var template = this.template;
    this.$el.html(template({ collection: this.collection }));

    return this;
  }
});