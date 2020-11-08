import React from "react";

import './AboutPage.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class AboutPage extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={3} id = "img">
                        <img src={"public/photo.jpeg"} width="100%" alt=""/>
                    </Col>
                    <Col sm={9}>
                        <h4>Main developer:</h4>
                        <h5>Дикий Боб строитель/алкаш</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore maiores vel, dolorem tempore assumenda recusandae iusto voluptate blanditiis quibusdam veritatis incidunt, deleniti dolorum consequuntur non laboriosam accusamus possimus mollitia dolor?</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AboutPage;
