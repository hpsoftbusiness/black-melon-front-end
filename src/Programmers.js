import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function Programmers() {
    const [programmersData, setProgrammersData] = useState([]);

    useEffect(() => {
        const makeAPICall = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/programmers', { mode: 'cors' });
                const data = await response.json();
                setProgrammersData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        makeAPICall();

        return () => {
            console.log('Component will unmount.');
        };
    }, []);
    return (
        <div className="App">
            <header className="App-header">

                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Birth Day</th>
                        <th scope="col">Height</th>
                        <th scope="col">Link to GitHub</th>
                    </tr>
                    </thead>
                    <tbody>
                    {programmersData?.map((person) => (
                        <tr key={person.id}>
                            <th scope="row">{person.id}</th>
                            <td>{person.name}</td>
                            <td>{person.surname}</td>
                            <td>{person.birth_date}</td>
                            <td>{person.height}</td>
                            <td>{person.link_to_github}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </header>
        </div>
    );
}

export default Programmers;
