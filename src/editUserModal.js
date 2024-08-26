import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditUserModal = ({ show, handleClose, user, handleSave }) => {
    const [editedUser, setEditedUser] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUser({ ...editedUser, [name]: value });
    };

    const saveChanges = () => {
        handleSave(editedUser);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title className='titleStyle'>ویرایش کاربر</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formNationalCode">
                        <Form.Label>کد ملی</Form.Label>
                        <Form.Control
                            type="text"
                            name="nationalCode"
                            value={editedUser.nationalCode}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>نام</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={editedUser.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formFamilyName">
                        <Form.Label>نام خانوادگی</Form.Label>
                        <Form.Control
                            type="text"
                            name="familyName"
                            value={editedUser.familyName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formRoles">
                        <Form.Label>نقش</Form.Label>
                        <Form.Control
                            type="text"
                            name="roles"
                            value={editedUser.roles}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    بستن
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    ثبت
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditUserModal;
