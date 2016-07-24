Meteor.subscribe('userData');

Template.login.helpers ({
    userImage: function(){
        if(Meteor.user().services.facebook){
            return 'https://graph.facebook.com/' + Meteor.user().services.facebook.id + '/picture/?type=small';
        } else {
            return 'http://placehold.it/40×40';
        }
    }
});


Template.login.events({
    'click #facebook-login': function(event) {
    Meteor.loginWithFacebook({ requestPermissions: ['email', 'public_profile', 'user_friends', 'user_likes']}, function(err){
        if (err) {
            throw new Meteor.Error("Facebook login failed");
        }
        console.log(Meteor.user().services.facebook.name);
        console.log(Meteor.user().services.facebook.id);
        console.log(Meteor.user().services.facebook.email);
        console.log(Meteor.user().services.facebook.gender);  
        

    });
    },
 
    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});