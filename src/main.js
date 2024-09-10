import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Logo from './asset/Logo.png';
import './css/main.css';
import Users from './users';
import Servers from './servers';

const Main = () => {
  const [activeTab, setActiveTab] = useState('Users');
  const location = useLocation(); // Use useLocation to access the passed state
  const username = location.state?.username; // Fallback to default name if not provided

  const renderContent = () => {
    switch (activeTab) {
      case 'Users':
        return <div><Users /></div>;
      case 'Services':
        return <div><Servers /></div>;
      case 'Access':
        return <div>مدیریت دسترسی ها</div>;
      case 'Reports':
        return <div>گزارش گیری</div>;
      default:
        return <div>مدیریت کاربران</div>;
    }
  };

  return (
    <Container fluid className='mainBody'>
      <Row>
        <Col xs={4} md={3} lg={2} className="navStyle p-3">
          <Nav variant="pills" className="flex-column">
            <Nav.Link
              onClick={() => setActiveTab('Users')}
              className={`navLink ${activeTab === 'Users' ? 'activeLink' : ''}`}
            >
              مدیریت کاربران
            </Nav.Link>
            <Nav.Link
              onClick={() => setActiveTab('Services')}
              className={`navLink ${activeTab === 'Services' ? 'activeLink' : ''}`}
            >
              مدیریت سرویس ها
            </Nav.Link>
            <Nav.Link
              onClick={() => setActiveTab('Access')}
              className={`navLink ${activeTab === 'Access' ? 'activeLink' : ''}`}
            >
              مدیریت دسترسی ها
            </Nav.Link>
            <Nav.Link
              onClick={() => setActiveTab('Reports')}
              className={`navLink ${activeTab === 'Reports' ? 'activeLink' : ''}`}
            >
              گزارش گیری
            </Nav.Link>
          </Nav>
        </Col>
        <Col xs={8} md={9} lg={10} className="p-3">
          <Row className='borderBottom'>
            <Col md={2} xs={4}>
              <img src={Logo} alt='Logo' className='logoStyle' />
            </Col>
            <Col md={10} xs={8} className='headerStyle'>
              <h6 className='userTitle'>
                {username}
              </h6>
              <i className="bi bi-person-fill iconStyle"></i>
            </Col>
          </Row>
          <div className='mainContent'>
            {renderContent()}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
