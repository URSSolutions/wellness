import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ModalContainer, ModalDialog } from 'react-modal-dialog'
import Webcam from 'react-webcam'

class PhotoModal extends Component {
  constructor (props) {
    super(props)

    this.takePhoto = this.takePhoto.bind(this)
  }

  takePhoto () {
    const { props } = this

    props.handlePhoto(this.webcam.getScreenshot())
    props.handleClose()
  }

  render () {
    const { props } = this

    return (
      <ModalContainer onClose={ props.handleClose }>
        <ModalDialog onClose={ props.handleClose }>
          <Webcam
            audio={ false }
            height={ 350 }
            width={ 350 }
            ref={ (node) => this.webcam = node }
            screenshotFormat="image/jpeg"
          />

          <button onClick={ this.takePhoto }> Tirar Foto </button>
        </ModalDialog>
      </ModalContainer>
    )
  }
}

PhotoModal.propTypes = {
  handleClose: PropTypes.func.isRequired
}

export default PhotoModal
