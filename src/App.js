import React, { useState, useEffect } from 'react';

import api from './services/api';

import './App.css';

import Header from './components/header';

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    useEffect(() => {
        api.get('projects').then(Response => {
            setProjects(Response.data);
        });
    }, []);

    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
    }

    return (
        <>
            <Header title="Homepage"/>

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
        )
}

export default App;