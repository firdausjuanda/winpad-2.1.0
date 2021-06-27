import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Feed() {
    const [work, setWork] = useState([]);
    useEffect(() => {
        
        function getWork(){
            axios.get('/work').then(response => {
                setWork(response.data);
            });
        }
        getWork();
    }, []);
    return (
        <div className="feed">
            <div className="feedWrap">
                <Share/>
                {work.map(p=>(
                    <Post key={p.id} post={p}/>
                ))}
            </div>
        </div>
    )
}
