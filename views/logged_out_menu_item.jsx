LoggedOutMenuItem = React.createClass({
  propTypes: {
    onLogin: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <li className="active">
        <a href onClick={this.props.onLogin}>
          Login with Google
        </a>
      </li>
    );
  }
});
