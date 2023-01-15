import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Patient = ({ patient }) => {

    const [value, setValue] = useState([]);
    const [open, setOpen] = React.useState(false);
    const modalBody = patient.map(pat => (
        <Fragment key={pat._id}>
            <h2 className="style-heading"><strong>{pat.patientname}</strong></h2>
            <p className="profile-p"><strong>email: {pat.fathername}</strong></p>
            <p className="profile-p2"><strong>Age: </strong>{pat.age}</p>
            <p className="profile-p2"><strong>Status: </strong>{pat.status}</p>
            <p className="profile-p2"><strong>Date: </strong><Moment format='DD/MM/YYYY'>{pat.date}</Moment></p>
            <p className="profile-p2"><strong>Booking ID: </strong>{pat.bookingId}</p>
            <p></p>
        </Fragment>
    ));
    const patients = patient.map(ptn => (
        <tr key={ptn._id}>
            <td>{ptn.bookingId}</td>
            <td>{ptn.patientname}</td>
            <td>
                <Moment format='DD/MM/YYYY'>{ptn.date}</Moment>
            </td>
            <td>
                <button
                    onClick={() => {
                        setOpen(true);
                        setValue(ptn._id);
                    }}
                    type="button"
                    className="btn btn-info"
                    data-toggle="modal" data-target="#exampleModal">
                    View
                </button>
                <Modal
                    open={open}
                    onClose={() => {
                        setOpen(false);
                        setValue([]);
                    }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <div className="profiles" style={style}>
                        <div className="profile-1" style={{display:"flex", flexDirection:"column"}}>
                            <div className="profile-details">
                                <div className="appointment-p prfile-desc">
                                    {
                                        modalBody.map(modal => value === modal.key ?
                                            modal.props.children : "")
                                    }
                                </div>
                            </div>
                            <div className="desc-p profile-buttons">
                                <p className="profile-p2"><strong>Description: </strong>{ptn.description}</p>
                            </div>
                        </div>
                    </div>
                </Modal>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <div className="common-details">
                <h2 className="credentials"><strong>User Credentials</strong></h2>
                <br />
                <div className="common-table">
                    <div className="scroll-table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Booking ID</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br />
        </Fragment>
    );
};

Patient.propTypes = {
    patient: PropTypes.array.isRequired,
}

export default connect(null)(Patient);
