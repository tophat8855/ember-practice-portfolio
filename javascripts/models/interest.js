App.Interest = DS.Model.extend({
  description: DS.attr('string'),
  img: DS.attr('string'),
});

App.Interest.FIXTURES = [
  {id: 1, description: "Classical Musicians", img: "images/classical.jpg"},
  {id: 2, description: "Warm Puppies", img: "images/puppy.jpg"},
  {id: 3, description: "Crashing busts of Beethoven", img: "images/busts.gif"},
  {id: 4, description: "Stomping out germs", img: "images/germs.jpg"},
  {id: 5, description: "Harassing baby brothers", img: "images/rerun.jpg"},
];
