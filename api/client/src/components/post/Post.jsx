import './post.css';
import { FiHeart, FiMessageCircle, FiMoreHorizontal, FiShare } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import * as timeago from 'timeago.js';


export default function Post({post}) {
    const [pict, setPict] = useState([]);
    useEffect(() => {
        
        function getPosts(){
            const posts = post.pict
            setPict(posts);
        }
        getPosts();
    });
    

    return (
        <>
        <div className="postContainer">
            <div className="postHeader">
                <img src="assets/person/3.jpeg" alt="" className="postHeaderImg" />
                <div className="postHeaderText">
                    <span className="postHeaderName">{post.userId}</span>
                    <p className="postHeaderSub">{timeago.format(post.createdAt)}</p>
                </div>
                <span className="postHeaderOption"><FiMoreHorizontal className="postHeaderOptionIcon"/></span>
            </div>
            <div className="postTitle">
                <p className="postTitleText">{post.title}</p>
                <p className="postTitleSubText">{post.desc}</p>
            </div>
            <div className="postBody">
            <Carousel>
                {pict.map(p => (
                    <Carousel.Item interval={1000}>
                        <img
                        className="postBodyImg"
                        src={'assets/post/'+p}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
                

            </div>
            <div className="postAction">
                <ul className="postActionList">
                    <li className="postActionListItem">
                        <FiHeart/>
                        <span className="postActionText">Like</span>
                    </li>
                    <li className="postActionListItem">
                        <FiMessageCircle/>
                        <span className="postActionText">Comment</span>
                    </li>
                    <li className="postActionListItem">
                        <FiShare/>
                        <span className="postActionText">Share</span>
                    </li>
                </ul>
            </div>
            
            <div className="postComment">
                <img src="assets/person/4.jpeg" alt="" className="commentProfileImg" />
                <span className="commentText">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, doloribus. Ipsa commodi, quasi ex, voluptate quaerat, animi eligendi illum deleniti odit reiciendis facere.
                </span>
            </div>
        </div>
        </>
    )
}
