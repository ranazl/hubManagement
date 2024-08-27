import React, { useState } from 'react';
import ConfirmModal from './confirmModal';
import { Table, Button, Row, Col, Form } from 'react-bootstrap';
import Pagination from '@mui/material/Pagination';
import EditServerModal from './editServerModal';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/users.css';
import AddServer from './addServer';

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

    const [showAddModal, setShowAddModal] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 4;


    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const filteredData = data.filter(server =>
        server.serviceCode.includes(searchTerm) ||
        server.adress.includes(searchTerm) ||
        server.parentsCode.includes(searchTerm) ||
        server.roles.includes(searchTerm)
    );

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredData.slice(indexOfFirstUser, indexOfLastUser);

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
    };

    const handleAddServer = (newServer) => {
        setData([...data, { ...newServer, number: data.length + 1 }]);
        setShowAddModal(false);
    };

    return (
        <div>
            <Row className="mb-3">
                <Col md={4}>
                    <Form.Control
                        type="text"
                        placeholder="جستجو..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Col>
            </Row>
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
                    {currentUsers.map((item) => (
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

            <Row>

                <Col md={10}>
                    <Pagination
                        count={Math.ceil(filteredData.length / usersPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        shape="rounded"
                        sx={{
                            '& .MuiPaginationItem-root': {
                                color: 'white',
                                borderColor: 'white',
                            },
                            '& .MuiPaginationItem-page.Mui-selected': {
                                backgroundColor: 'white',
                                color: 'black',
                            }
                        }}
                    />
                </Col>

                <Col md={2} className='divAddBtn'>
                    <Button className='AddBtn' onClick={() => setShowAddModal(true)}>
                        تعریف سرور جدید
                    </Button>
                </Col>

            </Row>


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

            {showAddModal && (
                <AddServer
                    showModal={showAddModal}
                    handleClose={() => setShowAddModal(false)}
                    handleAddServer={handleAddServer}
                />
            )}

        </div>
    );

};

export default Servers;