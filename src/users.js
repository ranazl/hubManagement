import React, { useEffect, useState } from 'react';
import ConfirmModal from './components/confirmModal';
import { Table, Button, Row, Col } from 'react-bootstrap';
import Pagination from '@mui/material/Pagination';
import EditUserModal from './editUserModal';
import AddUser from './components/addUserModal';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/services.css';
import axios from 'axios';
import Search from './components/search';

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/Users")
      .then(response => {
        const users = response.data
        setData(users)
      }).catch(error => {
        console.log(error,"errorrrrr")
      })
  }, [])

  const [searchTerm, setSearchTerm] = useState('');

  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddUser = (newUser) => {
    setData([...data, { ...newUser, number: data.length + 1 }]);
    setShowAddModal(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;

  const filteredData = data.filter(user =>
    user.name.includes(searchTerm) ||
    user.familyName.includes(searchTerm) ||
    user.roles.includes(searchTerm) ||
    user.nationalCode.includes(searchTerm)
  );

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleEdit = (user) => {
    setCurrentUser(user);
    setShowModal(true);
  };

  const handleDelete = (item) => {
    setItemToDelete(item);
    setShowConfirmModal(true);
  };

  const confirmDelete = () => {
    setData((prevData) => prevData.filter(item => item.number !== itemToDelete.number));
    setShowConfirmModal(false);
  };

  const cancelDelete = () => {
    setShowConfirmModal(false);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  const handleSaveChanges = (editedUser) => {
    setData(data.map(item => item.number === editedUser.number ? editedUser : item));
    setShowModal(false);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredData.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="container mt-3">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Table xs={12} md={12} striped bordered hover className='tableStyle'>
        <thead className='theadStyle'>
          <tr>
            <th>ردیف</th>
            <th>کد ملی</th>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>نقش</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody className='tbodyStyle'>
          {currentUsers.map((item) => (
            <tr key={item.number}>
              <td>{item.number}</td>
              <td>{item.nationalCode}</td>
              <td>{item.name}</td>
              <td>{item.familyName}</td>
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

      <Row className='tableFooter'>

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
            تعریف کاربر جدید
          </Button>
        </Col>

      </Row>

      {showConfirmModal && (
        <ConfirmModal
          show={showConfirmModal}
          message="آیا از پاک کردن این سرویس مطمئن هستید؟"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}

      {/* Edit Modal */}
      {showModal && (
        <EditUserModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          user={currentUser}
          handleSave={handleSaveChanges}
        />
      )}

      {/* Add User Modal */}
      {showAddModal && (
        <AddUser
          showModal={showAddModal}
          handleClose={() => setShowAddModal(false)}
          handleAddUser={handleAddUser}
        />
      )}

    </div>
  );
};

export default Users;