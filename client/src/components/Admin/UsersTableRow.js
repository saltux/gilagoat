import React from "react";
import {Table, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const UsersTableRow = props =>

<Table.Row>
    <Table.Cell>{props.first_name}</Table.Cell>  
    <Table.Cell>{props.last_name}</Table.Cell>
    <Table.Cell>{props.email}</Table.Cell>
    <Table.Cell>{props.phone}</Table.Cell>
    <Table.Cell> <Link to={"/users/" + props.id}><Button basic color='pink'>More Info</Button></Link></Table.Cell>
   
</Table.Row>;

export default UsersTableRow;