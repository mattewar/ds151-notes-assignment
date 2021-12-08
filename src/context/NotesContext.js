import React, { createContext, useState, useReducer } from 'react';

const NotesContext = createContext();

const NotesReducer = (state, action) => {
    switch (action.type) {
        case 'create':
            return ([ ...state, ...action.payload ]);
        case 'update':
            return ([ ...state.filter((note, index) => index !== action.index), ...action.payload ]);
        case 'delete':
            return ([ ...state.filter((note, index) => index !== action.index) ]);
        default:
            return ([ ...state ]);
    }
}

const startingList = [
    {
        title: "titulo1",
        content: "conteudo"
    },
    {
        title: "titulo2",
        content: "conteudo"
    },
    {
        title: "titulo3",
        content: "conteudo"
    },
    {
        title: "titulo4",
        content: "conteudo"
    },
    {
        title: "titulo5",
        content: "conteudo"
    },
    {
        title: "titulo6",
        content: "conteudo"
    },
    {
        title: "titulo7",
        content: "conteudo"
    },
]


const NotesProvider = ({ children }) => {
    const [notes, dispatchNotes] = useReducer(NotesReducer, startingList)
    return <NotesContext.Provider value={{ notes, dispatchNotes }}>{children}</NotesContext.Provider>
}

export { NotesContext, NotesProvider };