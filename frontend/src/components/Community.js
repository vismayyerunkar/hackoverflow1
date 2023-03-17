import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../styles/Community.css'
import Avatar from 'react-avatar';
import { BiUpvote } from "react-icons/bi"
import { FaCommentDots, FaDonate } from "react-icons/fa"
import axios from "axios"
import Post from './Post';
import { useNavigate } from 'react-router-dom';

export const Community = () => {


  const [posts, setPosts] = useState([]);
  const [postCreationActive, setPostCreationActive] = useState(false)
  const [postType, setPostType] = useState("");
  const [desc,setDesc] = useState("");
  const [image,setImage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://172.17.29.30:5000/api/v1/p/get", {
      headers: {
        token: localStorage.getItem('token')
      }
    }).then((res) => {
      setPosts(res.data);
    })
  }, []);


  const createPost = async (e) =>{
    e.preventDefault();
    const formData = new FormData();

      formData.append('file',image);
      formData.append('upload_preset','my-uploads');

      const url = await fetch('https://api.cloudinary.com/v1_1/drcymcfus/image/upload',{
          method:'POST',
          body:formData
      }).then((r=>r.json()));

      console.log(url?.secure_url);


      // if(postType === "")

      axios.post("http://172.17.29.30:5000/api/v1/p/create",{
        //data to be added
        type:postType === "DONATION" ? "funding": "general",
        imageUrl: postType != "DONATION" ? url?.secure_url : null,
        description:desc
      },{headers: {
        token: localStorage.getItem('token')
    }}).then((res)=>{
      console.log(res.data);
      // navigate("/community");
    });
  }


  const getInputs = () => {
    if (postType == 'DONATION') {
      return (
        <div className='post-creation-inputs'>
          <input value={desc} onChange={(e)=>setDesc(e.target.value)} type='text' placeholder='Description..' />
        </div>
      )
    } else if (postType == "COMMUNITY") {
      return (
        <div className='post-creation-inputs'>
          <input value={desc} onChange={(e)=>setDesc(e.target.value)} type='text' placeholder='Description..' />
          <input onChange={(e) => setImage(e.target.files[0])} type="file" placeholder='image' />
        </div>
      )
    }

  }

  return (
    <>
      <Navbar />
      <div className='community'>
        <div className='community-card-holder'>
          {
            posts.map((post) => {
              return (<Post key={post._id} post={post} />)
            })
          }

        </div>
        <div className='community-post-create-holder'>
          <button className='create-community-post-btn' onClick={() => setPostCreationActive(!postCreationActive)}>{postCreationActive ? "Stop Creation" : "Create Post"}</button>
          {postCreationActive && (
            <div className='choose-post-type-wrapper'>
              <span style={postType === "DONATION" ? { backgroundColor: "var(--primary-color)", color: 'white', border: 'none' } : {}} onClick={() => setPostType("DONATION")} className='create-donation-post'>Donation</span>
              <span style={postType === "COMMUNITY" ? { backgroundColor: "var(--primary-color)", color: 'white', border: 'none' } : {}} onClick={() => setPostType("COMMUNITY")} className='create-community-post'>Community</span>
            </div>
          )}

          {getInputs()}
          {postType != '' && (<button onClick={(e)=>createPost(e)}  className='create-community-post-btn'>{"Post"}</button>)}
        </div>
      </div>
    </>
  )
}

