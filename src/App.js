import React, { useState } from 'react';

import './App.css';
import background from './assets/malaPinewoods.jpeg';
import bolsaVenice from './assets/bolsaVenice.jpeg';

import Header from './components/header';

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
    }

    return (
        <>
            <Header title="Homepage"/>

            <img width={500} src={bolsaVenice} />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
        )
}

export default App;