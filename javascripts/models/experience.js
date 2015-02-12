App.Experience = DS.Model.extend({
  description: DS.attr('string'),
  img: DS.attr('string'),
});

App.Experience.FIXTURES = [
  {id: 1, description: "Fussbudget", img: "images/fuss.jpg"},
  {id: 2, description: "Own Psychiatric Practice for 3 Years", img: "images/psych.jpg"},
  {id: 3, description: "Role of Christmas Queen in Christmas Play", img: "images/queen.jpg"},
  {id: 4, description: "Right Fielder for local baseball team", img: "images/baseball.jpg"},
  {id: 5, description: "Collected Halloween candy for kids trapped in delusions of the Great Pumpkin", img: "images/halloween.jpg"},
  {id: 6, description: "Assists local kids in football punting practice", img: "images/football.jpg"},
];
