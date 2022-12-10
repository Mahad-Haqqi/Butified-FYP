import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Spinner from "../layout/Spinner"
import { Dots } from "react-preloaders"
import ProfileItem from "./ProfileItem"
import MovingComponent from "react-moving-text"
import { getProfiles } from "../../actions/profile"
import { useState } from "react"
const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  console.log(profiles)
  useEffect(() => {
    getProfiles()
  }, [getProfiles])
  const [searchItem, setSearchItem] = useState("")
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <section id="profiles-page">
            <div className="container">
              <div className="heading-common">
                <h1>
                  <strong>User Profiles</strong>
                </h1>
              </div>
              <h2 className="welcome-heading">
                <i className="fas fa-user-md"></i>{" "}
                <MovingComponent
                  type="typewriter"
                  dataText={["Book Your Appoinments"]}
                />
              </h2>
              <input
                type="text "
                placeholder="Search...."
                onChange={(event) => {
                  setSearchItem(event.target.value)
                }}
              />
              <br />
              {profiles != null ? (
                profiles
                  //   .filter((profile) => {
                  //     return searchItem.toLowerCase() === ""
                  //       ? profile
                  //       : profile.name.toLowerCase().includes(searchItem)
                  //   })
                  .map((profile) => (
                    <ProfileItem key={profile._id} profile={profile} />
                  ))
              ) : (
                <h4>No Profiles found..</h4>
              )}
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  )
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.profile,
})

export default connect(mapStateToProps, { getProfiles })(Profiles)
