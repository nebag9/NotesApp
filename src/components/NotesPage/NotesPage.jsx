import React from "react";
import NotesApp from "../NotesApp/NotesApp.jsx";

import './NotesPage.css';


class NotesPage extends React.Component {
    render() {
        return (<div className="notes-page">
            <NotesApp />
        </div>)
    }
}

export default NotesPage;
