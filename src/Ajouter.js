
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Ajouter = () => {

    const[title,setTitle]=useState('');
    const[author,setAuthor]=useState('');
    const[body,setBody]=useState('');
   const navigation=useNavigate()
  

     const handlesubmit = (e) => { 
        e.preventDefault();
         
        const blog ={title,author,body}
       

        fetch("http://localhost:8000/blogs",

        { 
        method:'POST',
        headers:{'Content-type': 'application/json'},
        body: JSON.stringify(blog)
    }).then(()=>{
    console.log('article ajouter avec succes')
    navigation('/Home')
  

} ) 

    

     }

    
    return ( 

        <div class="container">
  <div class="row">
    <div class="col-8">
      
    <form  className="form " > 
  
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Titre l'article</label>
  <input type="text" value={title}   onChange={(e)=>setTitle(e.target.value)}      class="form-control" id="title" placeholder=""/>
</div>


<label for="exampleDataList" class="form-label">Selectionner un auteur</label>
<select class="form-control" list="datalistOptions" id="author" value={author} onChange={(e)=>setAuthor(e.target.value)}>
  <option value="San Francisco">San Francisco </option>
  <option value="New York">New York </option>
  </select>

<br></br>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">contenu de l'article</label>

  <textarea class="form-control" id="body" rows="3" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
  </div>
 

  <button type="submit" onClick={handlesubmit}  >Envoyer</button>


 </form>


    </div>

  </div>
</div>
           
        
       
     );
     
}
 
export default Ajouter;