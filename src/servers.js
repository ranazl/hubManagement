import React, { useState } from 'react';
import ConfirmModal from './confirmModal';
import { Table, Button } from 'react-bootstrap';
// import Pagination from '@mui/material/Pagination';
import EditServerModal from './editServerModal';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/users.css';

const Servers = () => {

    const [data, setData] = useState([
        { number: 1, serviceCode: '1234567890', adress: 'حکیم غرب', parentsCode: '737373', roles: 'ادمین' },
        { number: 2, serviceCode: '0987654321', adress: 'شهران', parentsCode: '525252', roles: 'مدیر' },
        { number: 3, serviceCode: '4565780987', adress: 'انقلاب', parentsCode: '646464', roles: 'معاون' },
        { number: 4, serviceCode: '3458621902', adress: 'کرج', parentsCode: '585858', roles: 'کارمند' },
        { number: 5, serviceCode: '5645767568', adress: 'مهراباد', parentsCode: '727272', roles: 'کارمند' },
        { number: 6, serviceCode: '1234567899', adress: 'جردن', parentsCode: '717171', roles: 'کارمند' },
    ]);

    const [itemToDelete, setItemToDelete] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const [currentUser, setCurrentUser] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleDelete = (item) => {
        setItemToDelete(item);
        setShowConfirmModal(true);
    };

    const confirmDelete = () => {
        setData((preData) => preData.filter(item => item.number !== itemToDelete.number));
        setShowConfirmModal(false);
    };

    const cancelDelete = () => {
        setShowConfirmModal(false);
    };

    const handleEdit = (server) => {
        setCurrentUser(server);
        setShowModal(true);
    };

    const handleSaveChanges = (editedUser) => {
        setData(data.map(item => item.number === editedUser.number ? editedUser : item));
        setShowModal(false);
    }

    return (
        <div>
            <Table striped bordered hover className='tableStyle'>
                <thead>
                    <tr>
                        <th>ردیف</th>
                        <th>کد سرویس</th>
                        <th>آدرس</th>
                        <th>کد والد</th>
                        <th>نقش</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.number}>
                            <td>{item.number}</td>
                            <td>{item.serviceCode}</td>
                            <td>{item.adress}</td>
                            <td>{item.parentsCode}</td>
                            <td>{item.roles}</td>
                            <td>
                                <Button
                                    variant="link"
                                    onClick={() => handleEdit(item)}
                                    className="icon-button me-2"
                                    title="Edit"
                                >
                                    <i className="bi bi-pencil-fill"></i>
                                </Button>
                                <Button
                                    variant="link"
                                    onClick={() => handleDelete(item)}
                                    className="icon-button"
                                    title="Delete"
                                    style={{ color: 'red' }}
                                >
                                    <i className="bi bi-trash-fill"></i>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Edit Modal */}
            {showModal && (
                <EditServerModal
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                    server={currentUser}
                    handleSave={handleSaveChanges}
                />
            )}

            {showConfirmModal && (
                <ConfirmModal
                    show={showConfirmModal}
                    message="آیا از پاک کردن این سرویس مطمئن هستید؟"
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}

        </div>
    );

};

export default Servers;