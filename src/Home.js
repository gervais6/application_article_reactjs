

import Bloglist from "./Bloglist";
import useRecuperation from "./useRecuperation.js";

 
const Home = () => {


    const{data:blogs ,isloading,error}=useRecuperation("http://localhost:8000/blogs"); 



    return (  
        <div className="home">
        {error && <div>{error}</div>}
        {isloading && <div>En cours de chargement</div>}
        {blogs && <Bloglist blogs={blogs} titre={"Liste des Blogs"}/>}
        </div>


    )

}
 
export default Home;