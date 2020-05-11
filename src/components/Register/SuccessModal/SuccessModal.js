import React from "react";
import {Modal, Button} from "react-bootstrap";


const SuccessModal = ({modalMessage, onHide, ...props}) => (
    <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={onHide}
        dialogClassName="success-modal"
    >
        <Modal.Header className="success-modal__header" closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {modalMessage ? 'Registration failed' : 'Congratulations'}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                {modalMessage ? modalMessage : 'You have successfully passed the registration'}
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={onHide}>Great</Button>
        </Modal.Footer>
    </Modal>
);

export default SuccessModal