import React, { Component } from 'react'
import { connect } from 'react-redux'
import IncomeForm from './Income/IncomeForm'
import ExpenseForm from './Expense/ExpenseForm'
import ExpenseList from './Expense/ExpenseList'
import roundTo from 'round-to'
import './MaxSavings.css'

class MaxSavings extends Component {
  calTotalExpenses () {
    var total = 0
    this.props.profile.expenses.forEach(function (exp) {
      total += exp.amount
    })
    return total * 12 / 52
  }

  render () {
    var maxSavings =
      this.props.profile.income / this.props.profile.incomeFrequency -
      this.calTotalExpenses()
    return (
      <div className='jumbotron white'>
        <h4>
          {' '}
          Hey {this.props.profile.name}, you make
          {' '}
          ${this.props.profile.income}
          {' '}
          every
          {' '}
          {this.props.profile.incomeFrequency}
          {' '}
          weeks...
          {' '}
        </h4>
        <div className='row'>
          <div className='col-md-3' />
          <div className='col-md-6'>
            <IncomeForm
              income={this.props.profile.income}
              incomeFrequency={this.props.profile.incomeFrequency}
            />
          </div>
        </div>
        <h4> and have the following monthly expenses...</h4>
        <div className='row'>
          <div className='col-md-3' />
          <div className='col-md-6'>
            <ExpenseList />
            <ExpenseForm />
          </div>
        </div>
        <h4>
          {' '}
          so the most you can save each week is $
          {roundTo(maxSavings, 0)}.
          {' '}
        </h4>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps)(MaxSavings)
