import React, { useState } from 'react'

const EducationDetails = () => {

    const [educationList,setEducationList] = useState([{
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: ""
    }]);

    const addEducation = () =>
    {
        setEducationList([...educationList,{
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: ""
        }]);
    }

    const handleChange = (e,index) =>
    {
        const {name,value} = e.target;
        const list = [...educationList];
        list[index][name] = value;
        setEducationList(list);
    };

  return (
    <>
    <h2>Education Details</h2>

    {educationList.map((details,i) =>{
        return(
            <div key={i}>

            <h3>school</h3>
            <input name='school' type='text' placeholder='school' onChange={e=>handleChange(e,i)}></input>

            <h3>Degree</h3>
            <input name="degree" type='text' placeholder="degree" onChange={e=>handleChange(e,i)}></input>

            <h3>Start Date</h3>
            <input name="startDate" type='text' placeholder="startDate" onChange={e=>handleChange(e,i)}></input>

            <h3>End Date</h3>
            <input name="endDate" type='text' placeholder="endDate" onChange={e=>handleChange(e,i)}></input>

            <h3>Location</h3>
            <input name="location" type='text' placeholder="location" onChange={e=>handleChange(e,i)}></input>

            </div>
        )
    })}

    <button onClick={addEducation}>Add</button>
    </>
  )
}

export default EducationDetails