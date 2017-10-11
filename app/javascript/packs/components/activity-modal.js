import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Webcam from 'react-webcam'

import Photo from '../components/photo'

class ActivityModal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      photo: '',
      name: '',
      category: '',
      description: ''
    }

    this.handlePhoto = this.handlePhoto.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  handleChange (event) {
    const { name, value } = event.target

    if (name === 'category') {
      return this.setState({
        category: value,
        photo: '',
        name: '',
        description: ''
      })
    }

    this.setState({ [name]: value })
  }

  handlePhoto (photo = '') {
    if (!photo) {
      return this.setState({ photo: '' })
    }

    this.setState({ photo })
  }

  handleSubmit () {
    console.log(this.state)

    this.resetState()
  }

  resetState () {
    this.setState({
      photo: '',
      name: '',
      category: '',
      description: ''
    })
  }

  render () {
    const { props, state } = this

    return (
      <div>
       <div id='modal1' className='modal'>
         <div className='modal-content'>
           <div className='row'>
             <div className='input col s12'>

               <label htmlFor='category'> Categoria </label>

               <select
                 className='browser-default'
                 name='category'
                 id='category'
                 value={ state.category }
                 onChange={ this.handleChange }>

                 <option value=''> </option>
                 <option value='meal'> Refeição </option>
                 <option value='physical'> Exercício </option>
                 <option value='weight'> Peso </option>
               </select>
             </div>
           </div>

           {
             state.category && state.category !== 'weight' &&
             <div className='row'>
               <div className='field col s12'>
                 <label htmlFor='name'> Nome </label>

                 <input name='name' id='name' value={ state.name } onChange={ this.handleChange } />
               </div>
             </div>
           }

           {
             state.category &&
             <div className='row'>
               <div className='field col s12'>
                 <label htmlFor='description'> { state.category === 'weight'? 'Peso': 'Descrição' } </label>

                 <textarea name='description' id='description' value={ state.description } onChange={ this.handleChange } />
               </div>
             </div>
           }

           {
            state.category === 'meal' &&
            <Photo handlePhoto={ this.handlePhoto } photo={ state.photo } />
           }
         </div>

         <div className='modal-footer'>
           <a href='#!' onClick={ this.resetState } className='modal-action modal-close waves-effect btn-flat '> Cancelar </a>

           <a href='#!' onClick={ this.handleSubmit } className='modal-action modal-close waves-effect btn-flat'> Enviar </a>
         </div>
       </div>
      </div>
    )
  }
}

export default ActivityModal
