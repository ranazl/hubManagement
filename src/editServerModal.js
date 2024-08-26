import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditServerModal = ({ show, handleClose, server, handleSave }) => {

    const [editedServer, setEditedServer] = useState(server);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedServer({ ...editedServer, [name]: value });
    };

    const saveChanges = () => {
        handleSave(editedServer);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title className='titleStyle'>ویرایش سرور</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formServiceCode">
                        <Form.Label>کد سرور</Form.Label>
                        <Form.Control
                            type="text"
                            name="serviceCode"
                            value={editedServer.serviceCode}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formAdress">
                        <Form.Label>آدرس</Form.Label>
                        <Form.Control
                            type="text"
                            name="adress"
                            value={editedServer.adress}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formParentsCode">
                        <Form.Label>کد والد</Form.Label>
                        <Form.Control
                            type="text"
                            name="parentsCode"
                            value={editedServer.parentsCode}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formRoles">
                        <Form.Label>نقش</Form.Label>
                        <Form.Control
                            type="text"
                            name="roles"
                            value={editedServer.roles}
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

export default EditServerModal;