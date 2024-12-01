import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const AddServer = ({ showModal, handleClose, handleAddServer }) => {

    const [newServer,setNewServer] = useState({
        serviceCode: '',
        adress:'',
        parentsCode:'',
        roles:''
    });

    const handleChange = (e) => {
        setNewServer({
            ...newServer,
            [e.target.name] : e.target.value
        });
    };

    const handleSave = () => {
        handleAddServer(newServer);
        setNewServer({
            serviceCode: '',
            adress:'',
            parentsCode:'',
            roles:''
        });
    };

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title className='titleStyle'>تعریف جدید جدید</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formNationalCode">
                        <Form.Label>کد سرویس</Form.Label>
                        <Form.Control
                            type="text"
                            name="serviceCode"
                            value={newServer.serviceCode}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>آدرس</Form.Label>
                        <Form.Control
                            type="text"
                            name="adress"
                            value={newServer.adress}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formFamilyName">
                        <Form.Label>کد والد</Form.Label>
                        <Form.Control
                            type="text"
                            name="parentsCode"
                            value={newServer.parentsCode}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formRoles">
                        <Form.Label>نقش</Form.Label>
                        <Form.Control
                            type="text"
                            name="roles"
                            value={newServer.roles}
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

export default AddServer;