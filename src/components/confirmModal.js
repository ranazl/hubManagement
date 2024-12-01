import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({ show, message, onConfirm, onCancel }) => {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header >
        <Modal.Title className='titleStyle'>اخطار</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          خیر
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          بله
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
