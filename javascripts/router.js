App.Router.map(function() {
  this.route("connect");

  this.resource('about', function() {
    this.route('experience', {path: '/:experience_id'});
  });

  this.resource('personal', function() {
    this.route('interest', {path: '/:interest_id'});
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
    {id: 1, description: "Classical Musicians", img: "images/classical.jpg"},
    {id: 2, description: "Warm Puppies", img: "images/puppy.jpg"},
    {id: 3, description: "Crashing busts of Beethoven", img: "images/busts.gif"},
    {id: 4, description: "Stomping out germs", img: "images/germs.jpg"},
    {id: 5, description: "Harassing baby brothers", img: "images/rerun.jpg"},
    ];
  }
});
