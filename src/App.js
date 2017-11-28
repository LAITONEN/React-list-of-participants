import React, { Component } from 'react';
// relative
import NavHeader from './containers/NavHeader/NavHeader';
import Table from './containers/Table/Table';
import Text from './reusable/Text/Text';
// css
import css from './App.css';

class App extends Component {

  render() {
    return (
      <div className={css.App}>
        <NavHeader />
        <div className={css.Body}>
          <Text type="body-title">List of participants</Text>
          <Table />
        </div>
      </div>
    );
  }
}

export default App;
