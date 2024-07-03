import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uiReducer } from '../reducers/uiReducer'; // Adjust the import path as needed

class App extends Component {
  render() {
    const { isLoggedIn, displayDrawer } = this.props;

    return (
      <div>
        {/* Your existing JSX structure */}
        <div>
          {isLoggedIn ? (
            <p>Welcome back!</p>
          ) : (
            <p>Please log in.</p>
          )}
        </div>
        <div>
          {displayDrawer ? (
            <p>Notification drawer is visible.</p>
          ) : (
            <p>Notification drawer is hidden.</p>
          )}
        </div>
        {/* End of your existing JSX structure */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.get('isUserLoggedIn'),
  displayDrawer: state.ui.get('isNotificationDrawerVisible'),
});

export default connect(mapStateToProps)(App);

