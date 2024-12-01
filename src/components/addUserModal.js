import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../css/services.css';

const AddUser = ({ showModal, handleClose, handleAddUser }) => {
  const [newUser, setNewUser] = useState({
    nationalCode: '',
    name: '',
    familyName: '',
    roles: ''
  });

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    handleAddUser(newUser);
    setNewUser({
      nationalCode: '',
      name: '',
      familyName: '',
      roles: ''
    });
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title className='titleStyle'>تعریف کاربر جدید</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNationalCode">
            <Form.Label>کد ملی</Form.Label>
            <Form.Control
              type="text"
              name="nationalCode"
              value={newUser.nationalCode}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>نام</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formFamilyName">
            <Form.Label>نام خانوادگی</Form.Label>
            <Form.Control
              type="text"
              name="familyName"
              value={newUser.familyName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formRoles">
            <Form.Label>نقش</Form.Label>
            <Form.Control
              type="text"
              name="roles"
              value={newUser.roles}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          بستن
        </Button>
        <Button variant="primary" onClick={handleSave}>
          ذخیره
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddUser;