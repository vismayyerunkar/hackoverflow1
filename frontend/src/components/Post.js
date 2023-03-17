import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar';
import { BiUpvote } from "react-icons/bi"
import { FaCommentDots, FaDonate } from "react-icons/fa"
import '../styles/Post.css'

const Post = ({ post }) => {

    const [isLiked, setIsLiked] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [comment, setComment] = useState("");
    const [donate, setDonate] = useState(false);
    const [amount, setAmount] = useState();
    const [intrest, setIntrest] = useState();
    const [donation, setDonation] = useState([]);

    const [comments, setComments] = useState([]);

    const handleComments = () => {
        console.log("comments");
        setShowComments(!showComments);
        axios.get(`http://172.17.29.30:5000/api/v1/p/comments/${post._id}`, {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then((res) => {
            console.log(res.data.commenets);
            setComments(res.data.commenets);
        })
        setDonate(false);
    }


    const createBid = () => {
        axios.post("http://172.17.29.30:5000/api/v1/p/createBid/", {
            amount, intrest, postId: post._id, receiverId: post.user
        }, {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then((res) => {
            setAmount();
            setIntrest();
            console.log(res.data);
        });
    }


    const postComment = () => {
        console.log(comment);
        axios.post(`http://172.17.29.30:5000/api/v1/p/addComent/${post._id}`, {
            text: comment
        }, {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then((res) => {
            console.log(res.data);
        });
    }

    const getDonations = async () => {
        setShowComments(false); setDonate(!donate)
        const res = await axios.get('http://172.17.29.30:5000/api/v1/p/getBids', {
            headers: {
                token: localStorage.getItem('token')
            }
        }, {
            postId: post._id,
        });
        console.log("donation", res.data);
        setDonation(res.data.bids);
    }


    return (
        <div className='community-card'>
            <div className='community-card-info-wrapper'>
                <Avatar className='community-card-avatar' size="50" round={true} src="https://rb.gy/ae5rhx" />
                <div className='community-card-info'>
                    <b>{post.userName}</b>
                    <span>Maharashtra | India</span>
                </div>
            </div>
            <div className='caption-holder'>
                {post.description}
            </div>
            {post.type !== "funding" && (<div className='img-holder'>
                <img width={"100%"} height={"60%"} src={post.imageUrl} />
            </div>)}
            <hr />
            <div className='card-options'>
                <div>
                    <span><BiUpvote size={21} /></span>
                    <span>Upvote</span>
                </div>
                <div style={{ color: showComments ? "var(--primary-color)" : "" }} onClick={() => handleComments()}>
                    <span><FaCommentDots size={21} /></span>
                    <span>Comment</span>
                </div>
                {
                    post.type.toLowerCase() == "funding" && (
                        <div onClick={() => getDonations()} style={{ color: donate ? "var(--primary-color)" : "" }} >
                            <span><FaDonate size={21} /></span>
                            <span>Donate</span>
                        </div>
                    )
                }

            </div>
            {
                donate && (
                    <div className='comment-holder'>
                        <div className='comment-input-holder'>
                            <input value={amount} onChange={(e) => setAmount(e.target.value)} className='amount-inp' placeholder='Amount' type="number" />
                            <input value={intrest} onChange={(e) => setIntrest(e.target.value)} className='intrest-inp' placeholder='Intrest' type="number" />
                            <button onClick={createBid}>Place</button>
                        </div>

                        {
                            donation.map((data) => {
                                return (
                                    <div className='comment'>
                                        <div className='comment-header'>
                                            <Avatar className='comment-user-info' size="50" round={true} src="https://rb.gy/ae5rhx" />
                                            <div className='comment-user-info'>
                                                <b>{data.sender.name}</b>
                                            </div>
                                            
                                            {/* if the logged in user has created this post then he can see the accept btn */}
                                            <button onClick={() => createBid()} className='accept-bid'>
                                                Accept
                                            </button>
                                        </div>
                                        <div className='bid-info'>
                                            <span><b style={{color:"var(--primary-color)"}}>Amount :</b> {data.amount} % </span>
                                            <span> <b style={{color:"var(--primary-color)"}}>Intrest :</b> {data.intrest} %</span>
                                        </div>
                                    </div>
                                )
                            })
                        }



                        {/* <h4 className='load-more-comments'>Load more Bids</h4> */}
                    </div>
                )
            }
            {
                showComments && (

                    < div className='comment-holder'>
                        <div className='comment-input-holder'>
                            <input value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Please start typing ...' type="text" />
                            <button onClick={() => postComment()}>Post</button>
                        </div>


                        {comments.length == 0 ? (<span>No comments</span>) :
                            comments.map((comment) => {
                                return (
                                    <div key={comment._id} className='comment'>
                                        <div className='comment-header'>
                                            <Avatar className='comment-user-info' size="50" round={true} src="https://rb.gy/ae5rhx" />
                                            <div className='comment-user-info'>
                                                <b>{comment.authorName}</b>
                                                <p>Maharashtra | india</p>
                                            </div>
                                        </div>
                                        <div className='comment-desc'>
                                            {comment.text}
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                )

            }
        </div >
    )
}

export default Post