import './profile.css';
import '../../components/feed/feed.css';
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Cover from '../../components/cover/Cover';
// import Post from '../../components/post/Post';
// import { Posts } from '../../data';

export default function Profile() {
    return (
        <>
        <Topbar/>
        <div className="profileContainer">
            <Sidebar/>

            <Cover/>
            
            {/* <div className="profileBottom">
                <div className="feed">
                    <div className="feedWrap">
                        {Posts.map(p=>(
                            <Post key={p.id} post={p}/>
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
        </>
    )
}
