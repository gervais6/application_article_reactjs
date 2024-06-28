import { useState,useEffect } from "react";


const useRecuperation = (url) => {



    const[data,setData]= useState(null);
    const[isloading,setIsloading]=useState(true); 
    const[error,setError]=useState(null);   //initiallement il n'a aucune erreur 



    useEffect(()=>{

         const abortCont = new AbortController() 


        setTimeout(()=>{
            fetch(url , {signal: abortCont.signal})                             //recuperer les donnees dans la base de db
            .then((reponse)=>{
                if(!reponse.ok){
                    throw Error('Desole une erreur est survenu...')
                }// si le serveur ne repond convenablement renvoie moi le message d'erreur 
                 return reponse.json();
                })
          
                .then((data)=>{
                    setData(data)
                    setIsloading(false)
                    setError(null);


                })

                .catch(err=>{ 
                    
               if(err.name === "abortError"){
                 console.log("fetch a stopper")


                }else{
                  
                    setError(err.message)
                    setIsloading(false)


                }
                

                }) //recuperer les erreurs et les affiches dans le catch



        },2000)

        return()=>abortCont.abort()

    
    
          },[url])

          return{data,isloading,error};
 
}

 
export default useRecuperation;