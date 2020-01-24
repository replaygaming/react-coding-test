import React, { Component } from 'react';
import { pokerGameService } from './types';

import Table from './components/Table';

import './App.css';

function Loader() {
  return (
    <div className="Table">
      <h1 className="loader">Setting up the table...</h1>
    </div>
  );
}

class App extends Component {
  static propTypes = {
    pokerGameService: pokerGameService.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      table: null,
      loading: false
    };
  }

  componentDidMount() {
    const { pokerGameService } = this.props;
    this.setState({
      loading: true
    });
    const request = {
      tableId: 1
    };
    const tableDataPromise = pokerGameService.getTableData(request);
    tableDataPromise.then(table => {
      this.setState({
        table: table,
        loading: false
      });
    });
  }

  isLoading = () => {
    const { table, loading } = this.state;
    return loading || table === null;
  };

  render() {
    const { table } = this.state;

    return (
      <div className="App">
        {this.isLoading() ? <Loader /> : <Table table={table} />}
      </div>
    );
  }
}

export default App;
