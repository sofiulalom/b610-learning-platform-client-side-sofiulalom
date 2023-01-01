import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../component/Pages/shared/Foter/Footer';
import Header from '../../component/Pages/shared/Header/Header';
import LeftSiteRoute from '../../component/Pages/shared/leftSiteroute/LeftSiteRoute';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3} className='d-none d-lg-block'>
                    <LeftSiteRoute></LeftSiteRoute>
                    </Col>
                    <Col lg={9} className='d-grid'>
  
                   <Outlet></Outlet>

                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;