import React from 'react';

import Header from './components/header';

function App() {
    return (
        <>
            <Header title="Homepage">
                <ul>
                    <li>Home</li>
                    <li>Pacotes</li>
                    <li>Serviços</li>
                    <li>Contatos</li>
                </ul>
            </Header>
            <Header title="Login">
                <ul>
                    <li>Avião</li>
                    <li>Onibus</li>
                    <li>Caminhao</li>
                </ul>
            </Header>
        </>
        )
}

export default App;