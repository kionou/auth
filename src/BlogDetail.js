import { useParams } from "react-router-dom";
import Usefecht from "./usefecht";

const BlogDetail = () => {
    const {id}= useParams()
    const{data:blogs,isloading,error}=Usefecht(' http://localhost:8000/blogs/' +id)
    return ( 
            <div>
                 {isloading && <div>En cours de traitement...</div>}
                 {error && <div>{error}</div>}
                 {blogs && (<div className="blog">
                    <h2 className="blog-title">{blogs.title}</h2>
                    <small className="blog-publication-date">{`Publier le:${blogs.date}`}</small>
                    <p className="blog-body">{blogs.body}</p>
                    <p className="blog-author">{`Publier par:${blogs.author}`}</p>
                 </div>)}
            </div>
     
       
     );
}
 
export default BlogDetail;