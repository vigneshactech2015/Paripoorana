import React,{useState,useEffect,useCallback} from "react";
import AddCrud from "./UI/AddCrud";
import CrudView from "./UI/CrudView";
const Crud=()=>{
    const[crudList,setCrudList]=useState([]);
    const[isLoading,setIsLoading]=useState(false);
const [error,setError]=useState(null);

const fetchCrudHandler=useCallback(async()=>{ 
    setIsLoading(true);
      setError(null);
  
      try{
        const response=await fetch('https://paripoorana-d636b-default-rtdb.firebaseio.com/crud.json');
        if(!response.ok){
          throw new Error('Something went wrong!');
        }
        
        const data=await response.json();
  
        const loadedCrud=[];
  
        for(const key in data){
          loadedCrud.push({
            id:data[key].id,
            fullName:data[key].fullName,
            profilepic:data[key].profilepic,
            mobile:data[key].mobile,
            emailid:data[key].emailid,
            jobtype:data[key].jobtype,
            dob:data[key].dob,
            preflocation:data[key].preflocation,
          });
        }
    
      
        setCrudList(loadedCrud);
        setIsLoading(false);
          } catch(error){
            setError(error.message);
            setIsLoading(false);
          }
      },[]);

      useEffect(()=>{
        fetchCrudHandler();
      },[fetchCrudHandler]
      );
    
      async function addCrudHandler(crud){
        const response=await fetch('https://paripoorana-d636b-default-rtdb.firebaseio.com/crud.json',{
          method:'POST',
          body:JSON.stringify(crud),
          headers:{
            'Content-Type':'application/json'
          }
        });
        const data=await response.json();
        fetchCrudHandler(data);
      }
 
      async function deletecrudHandler(id){
        const response = await fetch(`${'https://paripoorana-d636b-default-rtdb.firebaseio.com/crud.json'}${id}`,{
          method:'DELETE',
          headers:{
            'Content-Type':'application/json'
          }
        });
        const data=await response.json();
        
        return fetchCrudHandler(data);
        }

        
       

return(
    <div>
        <AddCrud onAddcrud={addCrudHandler}/>
        <div>
       {!isLoading &&crudList.length>0&& <CrudView crud={crudList} deleteCrud={deletecrudHandler}/>}
       {!isLoading && crudList.length===0 && !error && <p>Found no data.</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && error &&<p>{error}</p>}
        </div>
    </div>
)
};

export default Crud;