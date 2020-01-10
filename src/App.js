import './App.css';
import React, { useState, useEffect } from 'react';
import { Loader } from './components/Loader';

function App() {
    const [count, setCount] = useState(0);

    const buttonClickEv = () => {
        return setCount(count + 1);
    };

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log('build');
    });

    return (
        <>
            <Loader />
            <p>You clicked {count} times</p>
            <button onClick={() => buttonClickEv()}>Click me</button>
        </>
    );
}

export default App;
