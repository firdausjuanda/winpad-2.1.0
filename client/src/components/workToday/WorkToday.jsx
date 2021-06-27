import './workToday.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Worktoday() {
    const [workToday, setWorkToday] = useState([])
    useEffect(() => {
        function getWorkToday(){
            axios('/work').then(response => {
                setWorkToday(response.data);
            })
        }
        getWorkToday();
    }, [])
    return (
        <div className="workTork">
            <p className="title-sm">Today's Work</p>
            <ul className="workTodayList">
                {workToday.map(post=>(
                    <li className="workTodayItem">
                    <div className="workTodayImg" ><span className="workTodayImgText">{post.deptId}</span></div>
                    <div className="headerText">
                        <span className="headerName">{post.title}</span>
                        <p className="headerSub">{post.desc}</p>
                    </div>
                </li>
                ))}
                
            </ul>
        </div>
    )
}
