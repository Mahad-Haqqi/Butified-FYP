import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { logout_user } from "../../actions/authUser"
import { logout_doctor } from "../../actions/authDoctor"
import MovingComponent from "react-moving-text"
import "../../App.css"

const Navbar = ({
  authUser: { isUserAuthenticated, loadingUser, user },
  logout_user,
  authDoctor: { isDoctorAuthenticated, loadingDoctor, doctor },
  logout_doctor,
}) => {
  const authUserLinks = (
    <Fragment>
      <Link className="nav-logo" to="/appointment">
      Career Counselling
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/appointment" className="nav-link ">
              Appointments
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/form" className="nav-link">
              Questionnare
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/profiles" className="nav-link">
              Counsellor
            </Link>
          </li>

          <li className="nav-item active">
            <a
              className="nav-link font-weight-bolder"
              onClick={logout_user}
              
            >
              <i className="fas fa-sign-out-alt" /> <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  )
  const authDoctorLinks = (
    <Fragment>
      <Link className="nav-logo" to="/dashboard">
        Career Counselling
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/dashboard" className="nav-link ">
              Dashboard
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/meeting" className="nav-link ">
              Create Meeting
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/edit-Profile" className="nav-link ">
              Edit Profile
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/add-Education" className="nav-link ">
              Add Education            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/add-Experience" className="nav-link ">
            Add Experience
            </Link>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link font-weight-bolder"
              onClick={logout_doctor}
              
            >
              <i className="fas fa-sign-out-alt" /> <span>Logout</span>
            </a>
          </li> 
        </ul>
      </div>
    </Fragment>
  )
  const guestLinks = (
    <Fragment>
      <Link className="nav-logo" to="/">
      Career Counselling
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
         
          <li className="nav-item active">
            <Link to="/loginUser" className="nav-link">
              User Login
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/loginDoctor" className="nav-link">
              Counsoler Login
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/registerUser" className="nav-link">
              Register User
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/registerDoctor" className="nav-link">
              Register Counslor
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  )

  return (
    <nav className="main navbar sticky-top navbar-expand-sm navbar-dark bg-dark mb-3">
      <div className="container">
        {isUserAuthenticated || isDoctorAuthenticated ? (
          <Fragment>
            {!loadingUser && (
              <Fragment>
                {isUserAuthenticated ? authUserLinks : authDoctorLinks}
              </Fragment>
            )}
          </Fragment>
        ) : (
          guestLinks
        )}
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  logout_user: PropTypes.func.isRequired,
  logout_doctor: PropTypes.func.isRequired,
  authUser: PropTypes.object.isRequired,
  authDoctor: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  authUser: state.authUser,
  authDoctor: state.authDoctor,
})

export default connect(mapStateToProps, { logout_user, logout_doctor })(Navbar)