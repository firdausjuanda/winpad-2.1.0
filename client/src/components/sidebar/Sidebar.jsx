// import { useEffect } from 'react';
import './sidebar.css';
import { FiHeart, FiMessageSquare, FiPlay, FiVideo } from 'react-icons/fi'
import axios from 'axios'
import { useState, useEffect } from 'react';

export default function Sidebar() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        
        function getUser(){
            axios.get('/user').then(response => {
                setUser(response.data)

                });
        }
        getUser();
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                       <FiHeart className="sidebarIcon"/>
                       <span className="sidebarListItemText">Favorites</span> 
                    </li>
                    <li className="sidebarListItem">
                       <FiMessageSquare className="sidebarIcon"/>
                       <span className="sidebarListItemText">Message</span>
                    </li>
                    <li className="sidebarListItem">
                       <FiVideo className="sidebarIcon"/>
                       <span className="sidebarListItemText">Video</span> 
                    </li>
                    <li className="sidebarListItem">
                       <FiPlay className="sidebarIcon"/>
                       <span className="sidebarListItemText">Game</span> 
                    </li>
                    <button className="sidebarListButton">See more</button>
                </ul>
                
                <h4 className="sidebarFriendListTitle">Contractor List</h4>
                <ul className="sidebarFriendList">
                    {user.map(u => (
                        <li className="sidebarFriendItem">
                            <img src={'assets/person/'+u.profilePict} alt="" className="sidebarFriendImg" />
                            <span className="sidebarFriendName">{u.username} </span>
                            <button className="sidebarFriendFollow">Follow</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
