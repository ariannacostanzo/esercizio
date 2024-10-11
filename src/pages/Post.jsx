import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const baseUrl = "http://localhost:8000/posts";


const Post = () => {
const {slug} = useParams();
const [post, setPost] = useState(null);

const fetchPost = async () => {
  try {
    const res = await axios.get(`${baseUrl}/${slug}`);
    setPost(res.data);
  } catch (error) {
    console.log(error)
  }
} 

useEffect(() => {
  fetchPost();
}, [slug])

     return (
     <>
      <Link to="/blog">Torna indietro</Link>
      {!post 
      ? <div>Sta caricando</div> 
      : <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>}

     </>
     )
}
export default Post;