import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Webcam from 'react-webcam'

class Photo extends Component {
  constructor (props) {
    super(props)

    this.takePhoto = this.takePhoto.bind(this)
    this.resetPhoto = this.resetPhoto.bind(this)
  }

  takePhoto () {
    this.props.handlePhoto(this.webcam.getScreenshot())
  }

  resetPhoto () {
    this.props.handlePhoto()
  }

  render () {
    const { props } = this

    return (
      <div>
        {
          !props.photo &&
          <div>
            <Webcam
              audio={ false }
              height={ 200 }
              width={ 200 }
              ref={ (node) => this.webcam = node }
              screenshotFormat='image/jpeg'
            />

            <button onClick={ this.takePhoto }> Tirar foto </button>
          </div>
        }

        {
          props.photo &&
          <div>
            <img
              src={ props.photo }
              alt='Foto tirada da refeição'
            />

            <button onClick={ this.resetPhoto }> Tirar outra foto </button>
          </div>
        }
      </div>

    )
  }
}

Photo.propTypes = {
  handlePhoto: PropTypes.func.isRequired,
  photo: PropTypes.string
}

export default Photo
