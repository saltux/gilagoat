import React from 'react'
import { Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// import GlobalModalCard from './GlobalModalCard'
import NavLogo from '../img/nav-logo.png'


const GlobalModal = () => (
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
        <div className="modal-login">
          <Link to='/login'>
            <button className='modal-login-button'>DEALER LOGIN</button>
          </Link>
        </div>
        <div className="modal-contact">
          <div className="contact-header">Contact Us</div>
          <div className="contact-form-container">
            <form className='contact-form'>
              <input type="text" name='name' placeholder="Name" />
              <input type="text" name='email' placeholder="Email" />
              <textarea name='email' placeholder="Message" />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Modal.Content>

  </Modal>
)

export default GlobalModal