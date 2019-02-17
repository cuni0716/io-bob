import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import retrieveUsers from '../actions/users';
import Card from '../components/card';

class HomeContainer extends Component {
  componentDidMount() {
    const { retrieveUsersAction } = this.props;
    retrieveUsersAction();
  }

  render() {
    const { users } = this.props;
    console.log('[ users ]', users);
    return (
      <div className="card-container">
        {users.map(user => (
          <Card
            key={user._id}
            name={user.name}
            bags={user.bags}
          />
        ))}
      </div>
    );
  }
}

HomeContainer.propTypes = {
  retrieveUsersAction: PropTypes.func.isRequired,
  users: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    bags: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  users: state.users.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  retrieveUsersAction: retrieveUsers,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
