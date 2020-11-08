import React from "react";

import './Note.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


class Note extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleTagSearch = this.handleTagSearch.bind(this);
    }

    render() {
        return (
            <div>
                <div className="note" style={{backgroundColor: this.props.color}}>
                    {this.props.text}
                    <Container>
                        <Row>
                            <Col sm={10}>
                                <Row className="d-flex justify-content-start">
                                    {this.props.tags.map((tag, index) => <Button key={index}
                                                                                 className="btn btn-light tag"
                                                                                 onClick={()=>this.handleTagSearch(tag)}>{tag}</Button>)}
                                </Row>
                            </Col>
                            <Col>
                                <Row className="d-flex justify-content-end">
                                    <div className="deleteBtn" onClick={this.handleClick}>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash"
                                             fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fillRule="evenodd"
                                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }

    handleClick() {
        let idx = null;
        if (this.props.notes) {
            this.props.notes.map((note, index) => {
                if (note.id === this.props.id) {
                    idx = index;
                }
            })
        }
        this.props.onNoteDelete(idx)
    }

    handleTagSearch(event) {
        console.log(event)
        this.props.onNoteSearchTag(event);
    }
}

export default Note;
