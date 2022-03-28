import React from "react";
import classes from './crudview.module.css';
import { FaTrash } from "react-icons/fa";
const CrudView =({crud,deleteCrud})=>{
return(
    <React.Fragment>
    <table className={classes.tabledesign}>
        <tbody>
<tr>
<th>Full Name</th>
<th>Email ID</th>
<th>Mobile</th>
<th>DOB</th>
<th>Jobtype</th>
<th>Action</th>
</tr>

{crud.map((crud,index)=>
{return(
<tr key={crud.id}>
    <td>{crud.fullName}</td>
    <td>{crud.emailid}</td>
    <td>{crud.mobile}</td>
    <td>{crud.dob}</td>
    <td>{crud.jobtype}</td>
    <td className={classes.display}><img className={classes.profile} src="./profilepic.gif" alt="image"/><button onClick={()=>deleteCrud(crud.id)} className={classes.buttoni}><FaTrash/></button></td>
</tr>)
})}
</tbody>
    </table>
    </React.Fragment>
)
}

export default CrudView;
