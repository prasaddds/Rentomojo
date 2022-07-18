// import { useState, useEffect } from "react";
// import {motion} from "framer-motion";
// import './style1.css'
// function List() {
//   const [blogs, setBlogs] = useState([]);
//   const[searchterm,setSearchterm]=useState("");
//   useEffect(() => {
//     fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json")
//       .then((res) => res.json())
//       .then((data) => setBlogs(data));
//   });
//   return (
// <div>
// <div className="searchbox">
//   <input type="text"  placeholder="search" onChange={event=>setSearchterm(event.target.value)}/>
// </div>
//       {blogs.filter((blog=>{
//         if(searchterm===""){
//           return blog;
//         }
//         else if(blog.title.toLowerCase().includes(searchterm.toLowerCase())){
//           return blog;
//         }
//       })).map((blog) => {
//         {if(blog.api_rate_limit!==50000){
//         return (
          // <div className="card" style={{backgroundColor:"black", width: "29rem",height:"20rem"}}>
          //   <motion.div>
          //     <h1 style={{height:"20px",width:"30rem",color:"blue"}}>{blog.title} {blog.index}</h1> <br/> <br/> <br/> <br/> <br/>
          //     <div style={{}}>
          //     <p style={{height:"20px",width:"30rem",color:"white"}}>Platform: {blog.platform}</p>
          //     <p style={{height:"20px",width:"30rem",color:"white"}}>Score: {blog.score}</p>
          //     <p style={{height:"20px",width:"30rem",color:"white"}}>Genre: {blog.genre}</p>
          //     <p style={{height:"20px",width:"30rem",color:"white"}}>Editors Choice: {blog.editors_choice}</p>
          //     </div>
          //   </motion.div>
          // </div>
//         );}}
        
//       })}
//     </div>
//   );
// }

// export default List;