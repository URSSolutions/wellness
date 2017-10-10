import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ModalContainer, ModalDialog } from 'react-modal-dialog'
import Webcam from 'react-webcam'

import PhotoModal from '../components/photo-modal'

class ActivityModal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      photoModal: false,
      photo: ''
    }

    this.takePhoto = this.takePhoto.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.handlePhoto = this.handlePhoto.bind(this)
  }

  takePhoto () {
    this.webcam.getScreenshot()
  }

  toggleModal () {
    this.setState({ photoModal: !this.state.photoModal })
  }

  handlePhoto (photo) {
    this.setState({ photo })
  }

  render () {
    const { props, state } = this

    return (
      <div>
        <ModalContainer onClose={ props.handleClose }>
          <ModalDialog onClose={ props.handleClose }>
            {
              state.photoModal &&
              <PhotoModal
                handleClose={ this.toggleModal }
                handlePhoto={ this.handlePhoto }
              />
            }

            {
              state.photo &&
              <img
                src={ state.photo }
                alt='Foto tirada da refeição'
              />
            }

            <button onClick={ this.toggleModal }> Enviar foto da refeição </button>
          </ModalDialog>
        </ModalContainer>
      </div>
    )
  }
}

ActivityModal.propTypes = {
  handleClose: PropTypes.func.isRequired
}

export default ActivityModal
