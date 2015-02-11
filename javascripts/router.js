App.Router.map(function() {
  this.route("about");
  this.route("personal");
  this.route("connect");
  this.route("experience", {path: 'about/:experience_id'});
});

App.AboutRoute = Ember.Route.extend({
  model: function() {
    return [
      {id: 1, description: "Fussbudget", link: "http://www.peanuts.com/comicstrips/3259085"},
      {id: 2, description: "Own Psychiatric Practice for 3 Years", link: "http://www.peanuts.com/comicstrips/3286446"},
      {id: 3, description: "Role of Christmas Queen in Christmas Play", link: "https://www.youtube.com/watch?v=-NJGRiV8jGM"},
      {id: 4, description: "Right Fielder for local baseball team", link: "http://www.peanuts.com/comicstrips/3259297"},
    ];
  }
});
