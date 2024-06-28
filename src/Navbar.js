import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
   
        <div class="navbar">
        
    <nav>
        <ul>
            <li>
                <Link to="/">Bpp Blog</Link>
                </li>
            <li>
                <Link to="/Home">Acceuil</Link>
                </li>
       <li>
        <Link to ="/Ajouter" style={{backgroundColor:"blue"}}>
            creation blog
        </Link>
       
       </li>
       
       </ul>
       </nav>  
        </div>
        



     );
}
 
export default Navbar;