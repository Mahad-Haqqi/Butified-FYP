import React, { Fragment } from "react"
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import MovingComponent from "react-moving-text"
import "../../App.css"

const Landing = ({ isDoctorAuthenticated, isUserAuthenticated }) => {
  if (isDoctorAuthenticated) {
    return <Redirect to="/dashboard" />
  } else if (isUserAuthenticated) {
    return <Redirect to="/appointment" />
  }

  return (
    <Fragment>
      <section id="landing">
        <div className="container">
          <div className="heading">
            <h1 className="main-heading">Find Your Best Counsellor &</h1>
            <h1 className="main-heading">
              <MovingComponent
                type="typewriter"
                dataText={["Book Your Appoinments"]}
              />
            </h1>
          </div>
          <div className="signup">
            <div className="Counsellor-signup">
              <h2 className=" item heading-sub">
                <strong>For Counsellor's</strong>
              </h2>
              <p className="item description">
              Are you feeling stuck in your career or unsure about your next steps? Finding fulfilling work can be a challenge, but with the right support, you can gain clarity and direction in your career journey.
              </p>
              <Link
                to="/registerDoctor"
                type="button"
                className="item btn btn-info"
              >
                Sign Up
              </Link>
            </div>
            <div className="user-signup">
              <h2 className="item heading-sub">
                <strong>For Users</strong>
              </h2>
              <p className="item description">
                Book appointments with career counsellor to get insight of your strengths and interests.fill the questionnaire to get your personality predicted and get career suggestions.
              </p>
              <Link
                to="/registerUser"
                type="button"
                className="item btn btn-info"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <br />
          <div className="img">
            <div className="img-1">
              <img src={require("../../img/landing.jpg")} />
            </div>
          </div>
        </div>
        <br />
      </section>
    </Fragment>
  )
}
Landing.propTypes = {
  isDoctorAuthenticated: PropTypes.bool.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isDoctorAuthenticated: state.authDoctor.isDoctorAuthenticated,
  isUserAuthenticated: state.authUser.isUserAuthenticated,
})

export default connect(mapStateToProps)(Landing)
