import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from './Chart'

class AccountVisualization extends Component {
  render () {
    return (
      <div className='jumbotron'>
        Account Visualization <br />
        Current Balance: ${this.props.balance}<br />
        Target Savings {this.props.profile.max_savings} + account balance
        <Chart />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    profile: state.profile,
    balance: state.balance
  }
}

export default connect(mapStateToProps)(AccountVisualization)
