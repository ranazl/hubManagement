import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const Search = ({ searchTerm, setSearchTerm }) => {

    return (
        <>
            <Row className="mb-3">
                <Col md={4} className='searchParent'>
                    <div className="searchWrapper">
                        <Form.Control
                            type="text"
                            placeholder="جستجو..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <i className="bi bi-search searchIcon"></i>
                    </div>
                </Col>
            </Row>
        </>
    )
};

export default Search;
