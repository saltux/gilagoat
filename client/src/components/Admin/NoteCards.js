import React from 'react'
import { Message, Grid, Button, Divider} from 'semantic-ui-react'

const styles={
    marginTop: "2%",
    marginLeft: "auto",
    marginRight: "auto"
}

const NoteCard = (props) => (
<Grid.Column width={8}>
          <Message floating style={styles} textAlign="center">
            {props.message}
            <br/>
            <hr/>
            <Button.Group>
            <Button>Edit</Button>
            <Button.Or />
            <Button>Delete</Button>
        </Button.Group>
            <br/>
            <p>Created by Ryan Walz</p>
        </Message>
        

  </Grid.Column>

)

export default NoteCard;