import { useState ,useEffect} from "react";
import BlogList from "./blogList";

const Home
 = () => {
    const [blogs,setBlog]= useState([
        {
            id:1,
            title:"la nuit des temps",
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In, harum.",
            auteur:"kionou",
            date:"16/08/2022"
        },
        {
            id:2,
            title:"Bienvenu a mon blog",
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In, harum.",
            auteur:"mohamed",
            date:"16/08/2022"
        },
        {
            id:3,
            title:"troisieme title",
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In, harum.",
            auteur:"mohamed",
            date:"16/08/2022"
        },
    ]);
    

    return ( 

       <div className="home">
        
        <BlogList blogs={blogs} title={'liste des blogs'}/>
        <BlogList blogs={blogs.filter((blog)=> blog.auteur === 'mohamed')} title={'liste des blogs de mohamed'}/>


       </div> 
     );
}
 
export default Home
;