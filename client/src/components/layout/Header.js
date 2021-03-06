import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './styles/Header.css'

class Header extends Component {
  renderProfileName () {
    switch (this.props.profile) {
      case null:
        return
      case false:
        return 'Your Name'
      default:
        return this.props.profile.name
    }
  }

  renderContent () {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <li className='nav-item'>
            <a
              className='nav-link btn btn-sm btn-outline-secondary align-middle'
              href='/auth/google'
            >
              Sign Up
            </a>
          </li>
        )
      default:
        return (
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              id='navbarDropdownMenuLink'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              {this.renderProfileName()}
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <div className='dropdown-divider' />
              <a className='dropdown-item' href='/api/logout'>Log Out</a>
            </div>
          </li>
        )
    }
  }

  render () {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-lightt'>
          <Link to={this.props.auth ? '/' : '/'} className='navbar-brand'>
            Sledgr
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div
            className='collapse navbar-collapse justify-content-between'
            id='navbarNavDropdown'
          >
            <ul className='nav navbar-nav navbar-right' />
            <ul className='nav navbar-nav'>
              <Link to={'/how-it-works'} className='nav-item nav-link'>
                How It Works
              </Link>
              <Link to={'/pricing'} className='nav-item nav-link'>
                Pricing
              </Link>
              <Link to={'/community'} className='nav-item nav-link'>
                Community
              </Link>
              <Link to={'/about'} className='nav-item nav-link'>
                About
              </Link>
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return { auth: state.auth, profile: state.profile }
}
export default connect(mapStateToProps)(Header)
