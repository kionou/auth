const BlogList = ({blogs,title}) => {
    
    return ( 
        <div className="bloglist">
             <h2>{title}</h2>
            {
           
            blogs.map( (blog) => (
             <div className="blog" key={blog.id}>
                 <a href="" className="blog-titre"> {blog.title}</a>
                 <small className="blog-publication-date"> publier le: {blog.date}</small>
                 <p className="blog-author">Publier par: {blog.auteur}</p>
                 <button >Supprumer article</button>
             </div>
            ))
     }
     
     </div>
    
     );
}
 
export default BlogList;