import React,{useState} from "react";
import classes from './addcrud.module.css';
const AddCrud=(props)=>{
    const[enteredfullName,setEnteredfullName]=useState('');
    const[enteredprofilepic,setEnteredprofilepic]=useState('');
    const[enteredmobile,setEnteredmobile]=useState('');
    const[enteredemailid,setEnteredemailid]=useState('');
    const[enteredjobtype,setEnteredjobtype]=useState('');
    const[entereddob,setEntereddob]=useState('');
    const[enteredpreflocation,setEnteredpreflocation]=useState('');
    const crudChangeHandler=(event)=>{
      setEnteredfullName(event.target.value);
    }

    const mobileChangeHandler=(event)=>{
        setEnteredmobile(event.target.value);
    }

    const emailidChangeHandler=(event)=>{
        setEnteredemailid(event.target.value);
    }

    const jobtypeChangeHandler=(event)=>{
        setEnteredjobtype(event.target.value);
    }

    const dobChangeHandler=(event)=>{
        setEntereddob(event.target.value);
    }

    const preflocationChangeHandler=(event)=>{
        setEnteredpreflocation(event.target.value);
    }


    const onSubmitHandler=(event)=>{
     event.preventDefault();
     const tabledata={
      fullName:enteredfullName,
      profilepic:enteredprofilepic,
      mobile:enteredmobile,
      emailid:enteredemailid,
      jobtype:enteredjobtype,
      dob:entereddob,
      preflocation:enteredpreflocation,
     };
        props.onAddcrud(tabledata);
        
        setEnteredfullName('');
        setEnteredprofilepic('');
        setEnteredmobile('');
        setEnteredemailid('');
        setEnteredjobtype('');
        setEntereddob('');
        setEnteredpreflocation('');
     }
    

return(
    <div className={classes.box}>
    <form onSubmit={onSubmitHandler}>
<fieldset>
<legend className={classes.registration}>Registration</legend>
<div className={classes.start}>
<label htmlFor="fullName"  className={classes.fullname}>Fullname</label>&nbsp;&nbsp;&nbsp;&nbsp;
<input type="text" id="fullName" name="fullName" placeholder="Enter fullname" className={classes.fullnamebox} required onChange={crudChangeHandler} value={enteredfullName}/>
<img src="./profilepic.gif" alt="profilepic" className={classes.profilepic}></img>
</div>
<div className={classes.mobile}>
<label htmlFor="mobile">Mobile</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="tel" id="mobile" name="mobile" className={classes.mobilebox} placeholder="Enter mobile number" onChange={mobileChangeHandler} value={enteredmobile} required/>
<label htmlFor="email" className={classes.email}>Email id</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="email" id="email" name="email" className={classes.emailbox} placeholder="Enter email Id" onChange={emailidChangeHandler} value={enteredemailid} required/>
</div>
<div className={classes.jobtype}>
<label htmlFor="jobtype">Job Type</label>&nbsp;&nbsp;&nbsp;&nbsp;
<select name="jobtype" id="jobtype" className={classes.jobtypebox} onChange={jobtypeChangeHandler} value={enteredjobtype} required>
<option value="fulltime">Full time</option>
<option value="parttime">Part time</option>
<option value="consultant">Consultant</option>
</select> 
<label htmlFor="dob" className={classes.dob}>DOB</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="date" id="dob" name="dob" className={classes.dobbox} placeholder="Enter your DOB" onChange={dobChangeHandler} value={entereddob} required/>
</div>
<div className={classes.preflocation}>
<label htmlFor="preflocation">Pref.Location</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<select name="preflocation" id="preflocation" className={classes.preflocationbox} onChange={preflocationChangeHandler} value={enteredpreflocation} required>
<option value="chennai">Chennai</option>
<option value="bangalore">Bangalore</option>
<option value="noida">Noida</option>
<option value="mumbai">Mumbai</option>
</select> 
<button type="submit" value="Submit" className={classes.add}>+Add/Update</button>  
</div>
</fieldset>
</form>
    </div>
)
};

export default AddCrud;