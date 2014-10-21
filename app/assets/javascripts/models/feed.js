// MODEL MODEL MODEL
NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "/api/feeds",
  parse: function(jsonResp) {
    if (jsonResp.latest_entries) {
      this.entries().set(jsonResp.latest_entries, {parse: true});
      delete jsonResp.latest_entries; // right here
    }
    return jsonResp;
  },

  entries: function() {
    if (this._entries) {
      return this._entries;
    } else {
      this._entries = new NewsReader.Collections.Entries({}, { feed: this });
      return this._entries;
    }
  }
});