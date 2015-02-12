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
    return this.store.find('experience');
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
