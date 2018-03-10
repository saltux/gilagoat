import React, { Component } from 'react';
import API from '../../utils/API'
import Navbar from '../Admin/Navbar'
import UserCard from '../Admin/IndividualUserCard'
import { Grid } from 'semantic-ui-react'
import UserCardNotes from './IndividualCardNotes'


class IndividualUserView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    }
  }


  componentDidMount() {

    API.getuser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data }))
      .then(res => console.log(this.state))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={3}>
            <Navbar />
          </Grid.Column>
          <Grid.Column width={13}>
            <UserCard first_name={this.state.user.first_name} last_name={this.state.user.last_name} message={this.state.user.message} date={this.state.user.date} email={this.state.user.email} phone={this.state.user.phone} />
            <UserCardNotes />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default IndividualUserView;