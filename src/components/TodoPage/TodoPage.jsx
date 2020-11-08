import React from "react";

import './TodoPage.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

class TodoPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleTodoChange = this.handleTodoChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleSort = this.handleSort.bind(this);
        if (localStorage.getItem("todo") === null) {
            localStorage.setItem("todo", "[]");
        }
        this.state = {data: JSON.parse(localStorage.getItem("todo")), sort: 'all'};
    }

    handleSort(event) {
        this.setState({sort: event.target.value});
        let ss = document.getElementsByClassName("sortTodoList");
        for (let i = 0; i < ss.length; i++) {
            ss[i].setAttribute("style", "font-weight: normal !important");
        }
        document.getElementById(event.target.value).setAttribute("style", "font-weight: bold !important");
    }

    handleCheck(index) {
        let todoList = this.state.data;
        todoList[index].done = !todoList[index].done;
        this.setState({data: todoList});
        localStorage.setItem("todo", JSON.stringify(this.state.data));
    }

    handleDelete(idx) {
        let todoList = this.state.data;
        todoList.splice(idx, 1);
        this.setState({data: todoList});
        localStorage.setItem("todo", JSON.stringify(this.state.data));
    }

    handleTodoChange(event) {
        if (event.key === 'Enter') {
            let newTodo = {
                id: Date.now(),
                text: event.target.value,
                date: Date.now(),
                done: false,
            };
            let newTodoList = this.state.data;
            newTodoList.unshift(newTodo);
            this.setState({data: newTodoList});
            localStorage.setItem("todo", JSON.stringify(this.state.data));
            document.getElementById("todoInput").value = "";
        }
    }

    render() {
        let filter = this.state.data.slice().filter(
            (item) => {
                if (this.state.sort === 'all') {
                    return this.state.data.slice();
                }
                if (this.state.sort === 'new') {
                    let today = new Date(Date.now());
                    let date = new Date(item.date);
                    return date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate();
                }
                if (this.state.sort === 'completed') {
                    return item.done;
                }
            }
        );
        return (<div className="todo-page">
            <Container>
                <Row className="d-flex justify-content-center">
                    <div className="card">
                        <div>
                            <input onKeyPress={this.handleTodoChange} id="todoInput"
                                   placeholder="What you need to do?"
                                   type="text" className="form-control border-top-0 border-right-0 border-left-0"/>
                        </div>
                        <div className="card-body">
                            {filter.map((item, index) =>
                                <div key={index} className="item">
                                    <Row>
                                        <Col sm={10}>
                                            <CheckItem item={item} index={index} onCkeckChange={this.handleCheck}/>
                                        </Col>
                                        <Col>
                                            <div className="delete">
                                                <Button className="btn btn-danger btn-delete"
                                                        onClick={() => this.handleDelete(index)}>
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16"
                                                         className="bi bi-trash"
                                                         fill="currentColor"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                        <path fillRule="evenodd"
                                                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                    </svg>
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            )}
                        </div>
                    </div>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Button id="all" className="btn btn-secondary sortTodoList" onClick={this.handleSort}
                            value="all">All</Button>
                    <Button id="new" className="btn btn-secondary sortTodoList" onClick={this.handleSort}
                            value="new">New</Button>
                    <Button id="completed" className="btn btn-secondary sortTodoList" onClick={this.handleSort}
                            value="completed">Completed</Button>
                </Row>
            </Container>
        </div>)
    }
}

function CheckItem(props) {
    const isDone = props.item.done;
    if (isDone) {
        return (
            <div>
                <Row>
                    <Button id={props.item.id} className="btn btn-success check btnGreen"
                            onClick={() => props.onCkeckChange(props.index)}>
                        <i className="fa fa-check" aria-hidden="true"> </i>
                    </Button>
                    <div className="text line">
                        {props.item.text}
                    </div>
                </Row>
            </div>
        )
    } else {
        return (
            <div>
                <Row>
                    <Button id={props.item.id} className="btn btn-success check btnGray"
                            onClick={() => props.onCkeckChange(props.index)}>
                        <i className="fa fa-check" aria-hidden="true"> </i>
                    </Button>
                    <div className="text">
                        {props.item.text}
                    </div>
                </Row>
            </div>
        )
    }
}

export default TodoPage;
