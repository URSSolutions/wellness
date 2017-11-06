import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FeedbackForm extends Component {
  constructor (props) {
    super(props)

    this.state = { description: '', descriptionSetted: false }

    this.setDescription = this.setDescription.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.feedbackSubmit = this.feedbackSubmit.bind(this)
  }

  componentDidUpdate () {
    this.setDescription()
  }

  setDescription () {
    const { feedback } = this.props
    const { descriptionSetted } = this.state

    if (feedback && feedback.description && !descriptionSetted) {
      this.setState({ description: feedback.description, descriptionSetted: true })
    }
  }

  handleChange (event) {
    this.setState({ description: event.target.value })
  }

  feedbackSubmit () {
    if (this.props.feedback && this.props.feedback.description) {
      return this.props.handleFeedbackSubmit(false, this.state.description)
    }

    this.props.handleFeedbackSubmit(true, this.state.description)
  }

  render () {
    return (
      <div className='collection'>
        <div className='collection-item'>

          <h2 className='user-home__name'> Feedback </h2>

          <div className='input-field col s10 margin-top-triple'>
            <textarea
              id='description'
              name='description'
              className='materialize-textarea'
              data-length='240'
              value={ this.state.description }
              onChange={ this.handleChange }>
            </textarea>
            <label htmlFor='textarea1'>Digite um feedback sobre o dia de hoje para o usuário!</label>
          </div>

          <div className='col s4'>
            <button className='btn waves-effect waves-light' onClick={ this.feedbackSubmit }>
              Enviar Feedback <i className='material-icons right'>send</i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

FeedbackForm.propTypes = {
  feedback: PropTypes.object.isRequired,
  handleFeedbackSubmit: PropTypes.func.isRequired
}

FeedbackForm.defaultProps = {
  feedback: {}
}

export default FeedbackForm
