import React from "react";
import './NotesApp.css';
import NoteEditor from "../NoteEditor/NoteEditor.jsx";
import NotesGrid from "../NotesGrid/NotesGrid.jsx";
import Container from "react-bootstrap/Container";


const data = [
    {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        color: "#dc3545",
        tags: ["tag1","tag2"]
    },
    {
        id: 2,
        text: "Lorem ipsum dolor sit",
        color: "#28a745",
        tags: ["tag1","tag2"]
    },
    {
        id: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        color: "#6c757d",
        tags: ["tag2","tag2"]
    },
    {
        id: 4,
        text: "Lorem ipsum dolor",
        color: "#ffc107",
        tags: ["tag1","tag3"]
    },
    {
        id: 5,
        text: "Lorem ipsum",
        color: "violet",
        tags: ["tag4","tag2"]
    },
    {
        id: 6,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        color: "#17a2b8",
        tags: ["tag1","tag2"]
    },
    {
        id: 7,
        text: "Lorem ipsum dolor sit amet",
        color: "#007bff",
        tags: ["tag5"]
    },
];


class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {notes: data, search: ''};
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleNoteDelete = this.handleNoteDelete.bind(this);
        this.handleNoteSearchTag = this.handleNoteSearchTag.bind(this);
        this.handleNoteSearchText = this.handleNoteSearchText.bind(this);
    }

    handleNoteAdd(newNote) {
        let newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({notes: newNotes});
    }


    handleNoteDelete(idx) {
        let newNotes = this.state.notes.slice();
        newNotes.splice(idx, 1);
        this.setState({notes: newNotes});
    }


    handleNoteSearchText(search) {
        this.setState({search: search});
    }

    handleNoteSearchTag(search){
        this.setState({search: search});
    }

    render() {
        let filter = this.state.notes.slice().filter(
            (note) => {
                return note.text.toLowerCase().includes(this.state.search.toLowerCase())||
                    note.tags.includes(this.state.search);
            }
        );

        return (
            <Container>
                <NoteEditor onNoteAdd={this.handleNoteAdd} onNoteSearchText={this.handleNoteSearchText}/>
                <NotesGrid onNoteSearchTag={this.handleNoteSearchTag}  onNoteDelete={this.handleNoteDelete} notes={filter}/>
            </Container>
        )
    }
}

export default NotesApp;
