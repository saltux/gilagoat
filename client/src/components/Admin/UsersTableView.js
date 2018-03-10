import React, { Component } from 'react';
import API from '../../utils/API'
import { Icon, Table } from 'semantic-ui-react'
import UsersTableRow from './UsersTableRow'

class UserTableView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users:[]
         }
    }

    componentDidMount() {
        this.loadUsers();
      }
    
      loadUsers = () => {
        console.log("Loading Users")
        API.getusers()
          .then(res =>
            this.setState({ users: res.data })
          ).then(() =>
            console.log(this.state.users)
          )
          .catch(err => console.log(err));
      };

    render() { 
        return ( 
            <div style={{marginTop:"5%"}}>
              <h1>{this.props.status} Users</h1>
            <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Phone</Table.HeaderCell>
                <Table.HeaderCell>More Info</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
        
            <Table.Body>

            {this.state.users.map(user => (
                  <UsersTableRow key={user._id} first_name={user.first_name} last_name={user.last_name} email={user.email} phone={user.phone} id={user._id}/>
                ))}

            </Table.Body>
          </Table>
          </div>

         )
    }
}
 
export default UserTableView;