import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateRewardType } from '../../../../actions'
import RewardForm from './Reward/RewardForm'
import _ from 'lodash'
import roundTo from 'round-to'

class RewardSelection extends Component {
  onUpdateSelectionClick (type) {
    this.props.updateRewardType(type)
  }

  calTotalExpenses () {
    var total = 0
    this.props.profile.expenses.forEach(function (exp) {
      total += exp.amount
    })
    return total * 12 / 52
  }

  renderWeeks () {
    var maxSavings =
      this.props.profile.income / this.props.profile.incomeFrequency -
      this.calTotalExpenses()
    return (
      <div className='container'>
        <div className='row'>
          {_.times(this.props.profile.rewardSchedule, i => (
            <div className='col-md-1' key={i}>
              <p>
                $
                {roundTo(
                  maxSavings *
                    this.props.profile.percentSaved *
                    this.props.profile.percentSpent,
                  0
                ) *
                  (i + 1)}
                <br />
                Week {i + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  renderOptions () {
    switch (this.props.profile.rewardType) {
      case 'events':
        return (
          <p>
            Sounds like <b> events </b> are your thing,
            let us know specifically what you're into and when you want to do it!
          </p>
        )
      case 'dinner':
        return (
          <p>
            Sounds like <b> dinner </b> is your thing,
            let us know specifically what you're into and when you want to do it!
          </p>
        )
      case 'travel':
        return (
          <p>
            Sounds like <b> travel </b> is your thing,
            let us know specifically what you're into and when you want to do it!
          </p>
        )
      default:
    }
  }

  render () {
    return (
      <div className='jumbotron white text-center'>
        {this.renderWeeks()}
        <h4>
          What would you like to do for your reward?
        </h4>
        <p>
          Let us know what experiences mean the most to you and we'll make it happen
        </p>
        <div>
          <button
            className='btn btn-primary btn-sm'
            onClick={this.onUpdateSelectionClick.bind(this, 'dinner')}
          >
            Dinner
          </button>
          <button
            className='btn btn-primary btn-sm'
            onClick={this.onUpdateSelectionClick.bind(this, 'events')}
          >
            Events
          </button>
          <button
            className='btn btn-primary btn-sm'
            onClick={this.onUpdateSelectionClick.bind(this, 'travel')}
          >
            Travel
          </button>
        </div>
        {this.renderOptions()}
        <div className='row'>
          <div className='col-md-2' />
          <div className='col-md-8 text-center'>
            <RewardForm
              flavor={this.props.profile.rewardFlavor}
              date={this.props.profile.rewardDate}
              notes={this.props.profile.rewardNotes}
            />
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps, {
  updateRewardType
})(RewardSelection)
