import React from "react";

import './NoteEditor.css';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class NoteEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: '', color: '#007bff', tags: []};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        window.requestAnimationFrame(() => {
            setTimeout(() => {
                document.getElementsByClassName("cl")[0].focus();
                document.getElementsByClassName("cl")[0].click();
            }, 100);
        });
    }
    handleTagChange(event){
        this.setState({tags: event.target.value.split(",")});
    }

    handleTextChange(event) {
        this.setState({text: event.target.value});
    }

    handleSearchChange(event) {
        this.props.onNoteSearchText(event.target.value);
    }

    handleNoteAdd() {
        let newNote = {
            id: Date.now(),
            text: this.state.text,
            color: this.state.color,
            tags: this.state.tags,
        };
        this.props.onNoteAdd(newNote);
        this.setState({text: '', tags: []});
        document.getElementById("textarea").value = "";
        document.getElementById("tags").value = "";
    }

    handleNoteColor(color, id) {
        this.setState({color: color});
        let all = document.getElementsByClassName('cl');
        for (let i = 0; i < all.length; i++) {
            if (i === id - 1) {
                all[i].setAttribute('style', 'border-radius: 0 !important');
            } else {
                all[i].setAttribute('style', 'border-radius: 50% !important');
            }
        }
    }

    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <input autoComplete="off" onChange={this.handleTagChange} placeholder="Enter tags..." id="tags" type="text" className="form-control rounded-right"/>
                    <div className="input-group-prepend">
                        <Button className="btn btn-light add" onClick={this.handleNoteAdd}>Add</Button>
                        <textarea id="textarea" placeholder="Enter text..." rows={5}  cols={300} className="form-control border-left-0"
                              onChange={this.handleTextChange}>
                        </textarea>
                    </div>

                </div>
                <div className="colors">
                    <Row>
                        <Col>
                            <Button className="btn btn-primary cl"
                                    onClick={() => this.handleNoteColor("#007bff", 1)}> </Button>
                            <Button className="btn btn-secondary cl"
                                    onClick={() => this.handleNoteColor("#6c757d", 2)}> </Button>
                            <Button className="btn btn-success cl"
                                    onClick={() => this.handleNoteColor("#28a745", 3)}> </Button>
                            <Button className="btn btn-danger cl"
                                    onClick={() => this.handleNoteColor("#dc3545", 4)}> </Button>
                            <Button className="btn btn-warning cl"
                                    onClick={() => this.handleNoteColor("#ffc107", 5)}> </Button>
                            <Button className="btn btn-info cl"
                                    onClick={() => this.handleNoteColor("#17a2b8", 6)}> </Button>
                            <Button className="btn btn-light btn-violet cl"
                                    onClick={() => this.handleNoteColor("violet", 7)}> </Button>
                        </Col>
                        <Col>
                            <Row className="d-flex justify-content-end">
                                <input id="search" onChange={this.handleSearchChange} type="text" className="form-control" autoComplete="off"
                                       placeholder="Search note"/>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div>
                </div>
            </div>
        )
    }
}

export default NoteEditor;
