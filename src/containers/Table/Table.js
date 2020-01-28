import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTableRequest } from '../../actions/Table';
import Table from '../../components/Table';

import './Table.css';

const TableHOC = ({ actions, match, loading, error, data }) => {
  useEffect(() => {
    actions.fetchTableRequest({
      id: match.params.id,
    });
  }, [match.params.id]);

  if (loading) {
    return (
      <p className="TableMessage Loading">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="TableMessage Error">
        Something happened on our end. Please try again later.
      </p>
    );
  }

  if (data) {
    return (<Table table={data} />);
  }

  return null;
};

const mapStateToProps = (state, props) => {
  return {
    ...state.table[props.match.params.id],
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    ...bindActionCreators({
      fetchTableRequest,
    }, dispatch),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableHOC);
