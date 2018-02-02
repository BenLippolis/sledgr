import React, { Component } from 'react'
import _ from 'lodash'
import { reduxForm, Field } from 'redux-form'
import RewardField from './RewardField'
import { withRouter } from 'react-router-dom'
import formFields from './formFields'
import { connect } from 'react-redux'
import * as actions from '../../../actions'

class RewardForm extends Component {
  renderFields () {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={RewardField}
          type='text'
          label={label}
          name={name}
        />
      )
    })
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <form>
        <div className='row outflow_form'>
          <div className='col-md-12'>
            <h5> Create your reward! </h5>
            {this.renderFields()}
            <button className='btn btn-sm btn-primary' type='submit'>
              Create Reward
            </button>
          </div>
        </div>
      </form>
    )
  }
}

function validate (values) {
  const errors = {}
  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError
    }
  })
  return errors
}

export default reduxForm({
  validate,
  form: 'rewardForm'
})(connect(null, actions)(withRouter(RewardForm)))
