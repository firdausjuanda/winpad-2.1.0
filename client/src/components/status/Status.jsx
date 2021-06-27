import React from 'react';
import { useEffect, useState } from 'react';
import './status.css';
import axios from 'axios';

export default function Status() {
    const [status, setStatus] = useState();
    useEffect(() => {
        
        function getStatus(){
            axios.get('/user').then(response => {
                setStatus(response.data);
            })
        }
        getStatus();
    }, []);
    return (
        <div className="status">
            {status.map(s => <img src={'assets/person/'+s.profilePict} alt="" className="statusImg" />)}
        </div>
    )
}
