ServiceConfiguration.configurations.upsert({service: 'google'}, {
  $set: {
    clientId: '230507117427-7cad4m1rl2i2voad5lqv2ih6405iol2n.apps.googleusercontent.com',
    secret: 'JCHjMjR8ExcKcyAaVB724AB3',
    loginStyle: 'popup'
  }
});

Accounts.onCreateUser((options, user) => {
  if (user.services.google) {
    let userInfo = user.services.google;
    user.login = userInfo.name;
    user.email = userInfo.email;
    user.verified = userInfo.verified_email;
  }

  return user;
});

Meteor.publish('user', function () {
  return Meteor.users.find({_id: this.userId}, {fields: {_id: 1, profile: 1, login: 1, email: 1}});
});
