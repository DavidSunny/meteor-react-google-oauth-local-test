NavMenu = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav navbar-right">
            <LoginMenu />
          </ul>
        </div>
      </nav>
    );
  }
});
