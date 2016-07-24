FlowRouter.route('/', {

  subscriptions() {
    this.register('Goals', Meteor.subscribe('Goals'));
  },
  action() {
    BlazeLayout.render('bodyLayout', { main: 'login' });
  },
});