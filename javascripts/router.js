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
    return this.store.find('interest');
  }
});
