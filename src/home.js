
import BlogList from "./blogList";
import Usefecht from "./usefecht";

const Home
 = () => {

    const {data:blogs,error,isloading}=Usefecht(' http://localhost:8000/blogs')


    
 
  
    return ( 

       <div className="home">
        {error && <div>{error}</div>}
        {isloading && <div>En cours de chargement....</div>}
        
        {blogs && <BlogList blogs={blogs} title={'liste des blogs'}  />}
     
       


       </div> 
     );
}
 
export default Home
;