
import { useParams } from "react-router-dom";
import useRecuperation from "./useRecuperation";
import { useNavigate } from "react-router-dom";


const BlogDetails = () => {
    const{id} =  useParams()
    const navigation =useNavigate()

    const{data:blog,isloading,error}=useRecuperation("http://localhost:8000/blogs/" + id);
    
      
    const Handledelete =()=>{
      fetch("http://localhost:8000/blogs/" + id,{

      method: "DELETE"

      }).then(()=>{
        console.log("supprimer avec succes");
        navigation("/Home")
      });
    
    }




    return ( 

    
        <div class="blog">

        {isloading && <div>En cours de chargement</div>}

        {error && <div>{error}</div>}

        {blog  && (
            <div className="">
           <p className="titre">{blog.title}</p>
           <p  className="body">{blog.body}</p>
           <p  className="description">{blog.author}</p>
           <button onClick={Handledelete}>supprimer</button>
            </div>


        )}

          </div>






     );
}
 
export default BlogDetails;