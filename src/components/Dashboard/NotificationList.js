import React, { Component } from 'react';
import { connect } from 'react-redux';

import NotificationListItem from './NotificationListItem'
import { getNotifications } from '../../actions/notifications';

const fakeNotifications = [
  {
    "name": "Bob Labla",
    "action": "replied",
    "time": "a day ago",
    "id": 0
  },
  {
    "name": "John Hancock",
    "action": "subscribed",
    "time": "2 days ago",
    "id": 1
  },
  {
    "name": "Herbie Hancock",
    "action": "replied",
    "time": "5 days ago",
    "id": 2
  },
  {
    "name": "Jon Snow",
    "action": "replied",
    "time": "10 days ago",
    "id": 3
  },
  {
    "name": "Bilbo Baggins",
    "action": "subscribed",
    "time": "13 days ago",
    "id": 4
  },
];

class NotificationList extends Component {
  static defaultProps = {
    notifications: []
  }

  componentDidMount() {
    this.props.getNotifications();
  }

  render() {
    return (
      <div className="six columns border padding-8">
        {console.log(this.props.notifications.data)}
        <h3>Notifications</h3>
        {this.props.notifications ?
        this.props.notifications.map((notification) => {
          return <NotificationListItem
            key={notification.id}
            notification={notification}
          />;
        })
        : null
      }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications
  }
}

export default connect(mapStateToProps, {
  getNotifications: getNotifications
})(NotificationList);
