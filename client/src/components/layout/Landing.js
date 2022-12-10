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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
                itaque quae delectus veritatis consequatur hic!
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
                itaque quae delectus veritatis consequatur hic!
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
