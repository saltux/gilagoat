import React from 'react'
import { Segment, Divider, Button } from 'semantic-ui-react'

const styles={
    marginTop: "5%"
}
const UserCard = (props) => (
  <Segment raised style={styles}>
    <h1>{props.first_name + " " + props.last_name}</h1>
    <h5>{props.email}<br/>{props.phone}</h5>
    <Button basic color='pink'>Email User</Button>
    <Divider horizontal>Contact Message</Divider>
    <p>{props.message}</p>
  </Segment>
)

export default UserCard