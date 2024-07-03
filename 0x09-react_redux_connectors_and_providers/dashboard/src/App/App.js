import React from 'react';
import { connect } from 'react-redux';

const App = ({ isLoggedIn }) => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {isLoggedIn ? <p>You are logged in</p> : <p>Please log in</p>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);

