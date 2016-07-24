Template.goalsList.helpers({
  goalsOption() {
    return Goals.find();
  },

});

Template.goalsList.events({
  'submit .goalsList'(event) {
    event.preventDefault();
    const text = event.target.my_text.value;
    Meteor.call('AddGoal', text);
    const ev = event;
    ev.target.my_text.value = '';
  },

});
