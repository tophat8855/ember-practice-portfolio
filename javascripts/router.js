App.Router.map(function() {
  this.route("personal");
  this.route("connect");

  this.resource('about', function() {
    this.route('experience', {path: '/:experience_id'});
  });

});

App.AboutRoute = Ember.Route.extend({
  model: function() {
    return [
      {id: 1, description: "Fussbudget", img: "images/fuss.jpg"},
      {id: 2, description: "Own Psychiatric Practice for 3 Years", img: "images/psych.jpg"},
      {id: 3, description: "Role of Christmas Queen in Christmas Play", img: "images/queen.jpg"},
      {id: 4, description: "Right Fielder for local baseball team", img: "images/baseball.jpg"},
      {id: 5, description: "Collected Halloween candy for kids trapped in delusions of the Great Pumpkin", img: "images/halloween.jpg"},
      {id: 6, description: "Assists local kids in football punting practice", img: "images/football.jpg"},
    ];
  }
});

App.PersonalRoute = Ember.Route.extend({
  model: function() {
    return[
    {id: 1, description: "Classical Musicians", link: "http://www.peanuts.com/comicstrips/3256867"},
    {id: 2, description: "Warm Puppies", link: "http://www.peanuts.com/comicstrips/3256711"},
    {id: 3, description: "Crashing busts of Beethoven", link: "http://vignette2.wikia.nocookie.net/peanuts/images/f/fd/Pe550227.gif/revision/latest?cb=20130709010950"},

    ];
  }
});
