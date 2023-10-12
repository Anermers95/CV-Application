import React, { useState } from 'react'

const WorkDetails = () => {
    const [workList,setWorkList] = useState([{
        companyName:"",
        positionTitle:"",
        startDate:"",
        endDate:"",
        Location:"",
        Description:"",
    }]);

    const addWork = ()=>
    {
        setWorkList([...workList,{
        companyName:"",
        positionTitle:"",
        startDate:"",
        endDate:"",
        Location:"",
        Description:"",
        }]);
    };


    const handleChange = (e,index)=>
    {
        const {name,value} = e.target;
        const list = [...workList];
        list[index][name] = value;
        
        setWorkList(list);
    }

  return (
    <div className='job-info'>
        <h2>Work Experience</h2>

        {workList.map((workDetails,i) =>{
            return(
                <div key={i}>

                <h3>Company Name</h3>
                <input name='companyName' type='text' placeholder='companyName' onChange={e=>handleChange(e,i)}></input>
    
                <h3>Position Title</h3>
                <input name="positionTitle" type='text' placeholder="positionTitle" onChange={e=>handleChange(e,i)}></input>
    
                <h3>Start Date</h3>
                <input name="startDate" type='text' placeholder="startDate" onChange={e=>handleChange(e,i)}></input>
    
                <h3>End Date</h3>
                <input name="endDate" type='text' placeholder="endDate" onChange={e=>handleChange(e,i)}></input>
    
                <h3>Location</h3>
                <input name="location" type='text' placeholder="location" onChange={e=>handleChange(e,i)}></input>

                <h3>Job Description</h3>
                <textarea name="Description" type='text' placeholder="Description" onChange={e=>handleChange(e,i)}></textarea>
                </div>
            )
        })}


        <button style={{marginTop:"30px"}} onClick={addWork}  >Add Work</button>
    </div>
  )
}

export default WorkDetails