import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import './Roadmap.css'
import _ from 'lodash'

class Roadmap extends Component {
  countCompletedGoals () {
    var total = 0
    this.props.goals.forEach(function (goal) {
      if (goal.success === true) {
        total += 1
      }
    })
    return total
  }

  // Show the transactions that occurred on a specific day
  showTrans (count) {
    var startDate = moment(this.props.activeGoal.time)
      .add(count * 1, 'days')
      .format('YYYY-MM-DD')
    return this.props.transactions.map(txn => {
      if (txn.date === startDate) {
        return <p key={txn.transaction_id}> {txn.name} {txn.date}</p>
      }
    })
  }

  renderWeeks () {
    // Gives you the number of days that have passed since goal was created
    var daysPassed = 1 + moment().diff(this.props.activeGoal.time, 'days')
    return (
      <div className='container'>
        {_.times(daysPassed, i => (
          <div key={i}>
            <b>
              <p>
                {' '}
                Day
                {' '}
                {i + 1}
                {' '}
                (
                {moment(this.props.activeGoal.time)
                  .add((i + 1) * 1, 'days')
                  .format('YYYY-MM-DD')}
                )
              </p>
            </b>
            {this.showTrans(i + 1)}
          </div>
        ))}
      </div>
    )
  }

  render () {
    return (
      <div className='jumbotron white'>
        <h3> Roadmap </h3>
        <div className='jumbotron'>
          <p>
            {' '}
            Visual with timline, week illustration, and savings accumulation over time.
            {' '}
          </p>
        </div>
        <p>
          {' '}
          So far you have reached {this.countCompletedGoals()} goal(s) <br />
          You're on day
          {' '}
          {1 + moment().diff(this.props.activeGoal.time, 'days')}
          {' '}
          of this goal
          <br />
          This goal was created on
          {' '}
          {moment(this.props.activeGoal.time).format('YYYY-MM-DD')}
          <br />
          You're on week
          {' '}
          {1 + moment().diff(this.props.activeGoal.time, 'weeks')}
          {' '}
          of this goal
        </p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    goals: state.goals,
    activeGoal: state.activeGoal,
    profile: state.profile,
    transactions: state.transactions
  }
}

export default connect(mapStateToProps)(Roadmap)
