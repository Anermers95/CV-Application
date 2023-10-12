import React, { useState } from 'react'

const EducationDetails = () => {
    const [selectedSchool,setSelectedSchool] = useState(null);
    const [educationList,setEducationList] = useState([]);

    const addEducation = () =>
    {
        const newSchool = {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: ""
        };

        setEducationList([...educationList, newSchool]);
        setSelectedSchool(educationList.length); // focusing on the new entry
    }

    const handleChange = (e,index) =>
    {
        const {name,value} = e.target;
        const list = [...educationList];
        list[index][name] = value;
        setEducationList(list);
    };

    const cancelDetails = () =>
    {
        setSelectedSchool(null);
    }

    const showDetails = (index) =>
    {
        setSelectedSchool(index);
    }


    if(selectedSchool !== null)
    {
        const details = educationList[selectedSchool];
        return(
            <div id='education-info'>

                <h3>School</h3>
                <input value={details.school} name='school' type='text' placeholder='school' onChange={e=>handleChange(e,selectedSchool)}/> 

                <h3>Degree</h3>
                <input value={details.degree} name="degree" type='text' placeholder="degree" onChange={e=>handleChange(e,selectedSchool)}/>

                <h3>Start Date</h3>
                <input value={details.startDate} name="startDate" type='text' placeholder="startDate" onChange={e=>handleChange(e,selectedSchool)}/>

                <h3>End Date</h3>
                <input value={details.endDate} name="endDate" type='text' placeholder="endDate" onChange={e=>handleChange(e,selectedSchool)}/>

                <h3>Location</h3>
                <input value={details.location} name="location" type='text' placeholder="location" onChange={e=>handleChange(e,selectedSchool)}/>

                <button onClick={cancelDetails}>Cancel</button>

            </div>

        )
    }

  return (
    <div id='education-info'>
        <h2>Education</h2>

        {educationList.length > 0 ? (
            educationList.map((details, i) => (
                <div key={i} onClick={() => showDetails(i)}>
                    <button>{details.school}</button>
                </div>
            ))
        ) : (
            <h2>No schools added yet.</h2>
        )}
        <button style={{marginTop:"30px"}} onClick={addEducation}>Add</button>
    </div>
  )
}

export default EducationDetails