import React from "react";

import './NotesGrid.css';

import Note from "../Note/Note.jsx";
import Masonry from "masonry-layout";



class NotesGrid extends React.Component {

    
    componentDidMount() {
        var grid = this.refs.grid;
        this.msnry = new Masonry( grid, {
            // options
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
            fitWidth: true
          });
    }


    componentDidUpdate(prevProps) {
        if(this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }



    render() {
        return (<div className="notes-grid" ref="grid">
            {
                this.props.notes.map((note) => {
                    return <Note
                        key={note.id}
                        id={note.id}
                        color={note.color}
                        text={note.text}
                        tags={note.tags}
                        onNoteDelete={this.props.onNoteDelete}
                        onNoteSearchTag={this.props.onNoteSearchTag}
                    />
                })
            }
        </div>)
    }
}

export default NotesGrid;
