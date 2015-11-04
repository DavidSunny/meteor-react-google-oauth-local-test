class LoginState {
  static get() {
    if (Meteor.user()) {
      return LoginState.LOGGED_IN;
    } else if (Meteor.loggingIn()) {
      return LoginState.LOGGING_IN;
    } else if (!Accounts.loginServicesConfigured()) {
      return this.WAITING_CONFIG;
    } else {
      return this.LOGGED_OUT;
    }
  }
}

LoginState.LOGGED_IN = 'loggedIn';
LoginState.LOGGED_OUT = 'loggedOut';
LoginState.LOGGING_IN = 'loggingIn';
LoginState.WAITING_CONFIG = 'waitingConfig';

LoginMenu = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      loginState: LoginState.get() 
    };
  },

  handleLogout(e) {
    e.preventDefault();
    this.logout();
  },

  handleLogin(e) {
    e.preventDefault();
    this.login();
  },

  login() {
    Meteor.loginWithGoogle({requestPermissions: ['email']});
  },

  logout() {
    Meteor.logout();
  },

  render() {
    switch(this.data.loginState) {
      case(LoginState.LOGGING_IN):
        return <LoggingInMenuItem />
      case(LoginState.LOGGED_IN):
        return <LoggedInMenuItem onLogout={this.handleLogout} />
      case(LoginState.LOGGED_OUT):
        return <LoggedOutMenuItem onLogin={this.handleLogin} />
      default:
        return null;
    }
  }
});
