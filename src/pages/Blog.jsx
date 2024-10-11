import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const baseUrl = "http://localhost:8000/posts";
import './Blog.scss';

const Blog = () => {

const [posts, setPosts] = useState(null)

const fetchPosts = async () => {
    try {
         const res = await axios.get(baseUrl);
         setPosts(res.data.data);
    } catch (error) {
        console.log(error)
    }
   
}

useEffect(() => {
    fetchPosts();
}, [])



     return (
       <>
         <h1>I nostri post</h1>
         {posts === null 
         ? <div>Sta caricando</div> 
         : posts.map((post, i) => (
            <div key={`post${i}`}>
                <Link to={`${post.slug}`} relative="path">
                    <h3>{post.title}</h3>
                </Link>
                <p>{post.content}</p>
            </div>
         ))}
         
       </>
     );
}
export default Blog;