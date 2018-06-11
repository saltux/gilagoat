import React from 'react'
import { Modal } from 'semantic-ui-react'
// import GlobalModalCard from './GlobalModalCard'
import NavLogo from '../img/nav-logo.png'
import axios from 'axios';
import { API_URL } from '../tools/api-config';


class GlobalModal extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    messageLoading: false,
    success: "",
    error: "",
  }

  handleSubmit = () => {
    const { name, email, message } = this.state;
    this.setState({ messageLoading: true }, () => {
      axios.post(`${API_URL}/api/send-message`, { name, email, message })
        .then(response => {
          if (response.status === 200) {
            this.setState({ messageLoading: false, success: "Thank you, your message has been sent." })
          }
          else {
            this.setState({ messageLoading: false, error: "Sorry, there was an issue sending your message." })
          }
        }).catch(error => {
          console.log("There was an error...", error)
          this.setState({ messageLoading: false, error: "Sorry, there was an issue sending your message." })
        })
    })
  }

  render() {
    const { name, email, message, messageLoading, success, error } = this.state;
    return (
      <Modal
        trigger={
          <div className="nav-icon">
            <img src={NavLogo} alt="" className='nav-icon-img' style={{ float: 'right' }} />
          </div>
        }
        basic
        size='small'
      >
        <Modal.Content>
          <div className="modal-container">
            {/* <div className="modal-login">
              <Link to='/login'>
                <button className='modal-login-button'>DEALER LOGIN</button>
              </Link>
            </div> */}
            {success ?
              <div className="success-message">{success}</div>
              : null
            }
            {error ?
              <div className="error-message">{error}</div>
              : null
            }
            <div className="modal-contact">
              <div className="contact-header">Contact Us</div>
              <div className="contact-form-container">
                <div className='contact-form'>
                  <input type="text" name='name' placeholder="Name" value={name} onChange={e => this.setState({ name: e.target.value })}   className="contact-input"/>
                  <input type="text" name='email' placeholder="Email" value={email} onChange={e => this.setState({ email: e.target.value })} className="contact-input"/>
                  <textarea name='message' placeholder="Message" value={message} onChange={e => this.setState({ message: e.target.value })} className="contact-input"/>
                  <button onClick={this.handleSubmit} className="login-form-button centered" disabled={messageLoading}>{!messageLoading ? "Submit" : "Submitting..."}</button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Content>

      </Modal>
    )
  }
}



export default GlobalModal