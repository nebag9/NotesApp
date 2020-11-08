import React from "react";
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        window.requestAnimationFrame(() => this.activeChange(window.location.pathname.slice(1)));
    }

    render() {
        return (<nav>
            <div className="menu">
                <div className="menu-bar">
                    <div className="menu-item" id="about">
                        <Link className="btn btn-light" to="/about"
                                onClick={() => this.activeChange("about")}>About</Link>
                    </div>
                    <div className="menu-item" id="notes">
                        <Link className="btn btn-light" to="/notes"  onClick={() => this.activeChange("notes")}>Notes</Link>
                    </div>
                    <div className="menu-item" id="todo"
                                onClick={() => this.activeChange("todo")}>
                        <Link className="btn btn-light" to="/todo">Todo</Link>
                    </div>
                </div>
            </div>
        </nav>)
    }


    activeChange(id = window.location.pathname.slice(1)) {
        if (id === "about") {
            document.getElementById("about").setAttribute("style","box-shadow: 0 10px 20px rgba(0, 0, 0, 0.20), 0 12px 12px rgba(0, 0, 0, 0.23)")
            document.getElementById("notes").setAttribute("style","box-shadow: 0")
            document.getElementById("todo").setAttribute("style","box-shadow: 0")
        }
        if (id === "notes") {
            document.getElementById("about").setAttribute("style","box-shadow: 0")
            document.getElementById("notes").setAttribute("style","box-shadow: 0 10px 20px rgba(0, 0, 0, 0.20), 0 12px 12px rgba(0, 0, 0, 0.23)")
            document.getElementById("todo").setAttribute("style","box-shadow: 0")
        }
        if (id === "todo") {
            document.getElementById("about").setAttribute("style","box-shadow: 0")
            document.getElementById("notes").setAttribute("style","box-shadow: 0")
            document.getElementById("todo").setAttribute("style","box-shadow: 0 10px 20px rgba(0, 0, 0, 0.20), 0 12px 12px rgba(0, 0, 0, 0.23)")
        }
    }
}

export default withRouter(Menu);
