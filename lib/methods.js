Meteor.methods({ 

  AddGoal(text) {
    check(text, String);
    const uniqueGoal = Goals.find({ goalName: text }).count();
    if (uniqueGoal === 0) {
      Goals.insert({ goalName: text, owner: Meteor.user().username,
				createdAt: Date() },
        err => { if (err) throw new Meteor.Error(`${err}`); });
    }
  },
    
});