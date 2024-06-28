
import { Link } from "react-router-dom";

const Bloglist = ({blogs,titre}) => {

    

    return (  
        <div class="home">
        <h2>{titre}</h2>
        
            {

                blogs.map((blog)=>(

                    < div className="blog" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}><div className="titre">{blog.title}</div></Link>
                        <p  className="body">{blog.body}</p>

                        <div className="description">{blog.author}</div>
                        
                    

                    </div>





                ) )



            }




        </div>



    );
}
 
export default Bloglist;