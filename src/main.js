import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Logo from './asset/Logo.png'
import './css/main.css';
// import Users from './users';
import Servers from './servers';

const Main = () => {
  const [activeTab, setActiveTab] = useState('Users');

  const renderContent = () => {
    switch (activeTab) {
      case 'Users':
        return <div>
          <Servers />
        </div>;
      case 'Services':
        return <div>مدیریت سرویس ها</div>;
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
        <Col md={2} className="navStyle p-3">
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
        <Col md={10} className="p-3">

          <Row className='borderBottom'>
            <Col md={2}>
              <img src={Logo} alt='Logo' className='logoStyle' />
            </Col>
            <Col md={10} className='headerStyle'>
              <h6 className='titleHeader'>
                رعنا ذوالفقاری
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
