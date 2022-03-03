import React, { useState } from 'react';

const Skills = () => {

    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState('');

    // const [inputs, setInputs] = useState([]);
    
    // const handleInput = (e, index) => {
    //     let temp = [...inputs];
    //     temp[index] = e.target.value;
    //     setInputs(temp);
    //     console.log(inputs);
    // };

    // const addField = (e) => {
    //     e.preventDefault();
        
    //     const len = fields.length;
    //     let temp = [...fields];
    //     console.log(fields);
    //     temp.push(<><input onChange={(e) => handleInput(e, len)} /><button onClick={addField}>+</button></>);
    //     setFields(temp);
    // };

    // const [fields, setFields] = useState([<><input onChange={(e) => handleInput(e, 0)} /><button onClick={addField}>+</button></>]);

    const handleInput = (e) => {
        setSkill(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const temp = skill.split(', ');

        setSkills(temp);
        // email != ''
        let addSkills = { email: '', skills: skills };

        fetch('https://still-cliffs-68775.herokuapp.com/skills', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addSkills)
        })
        .then(res => res.json())
        .then(data => {
            if(data?.acknowledged) {
                e.target.reset();
            }
        })
    }

    return (
        <div style={{minHeight: '70vh', marginTop: '50px'}}>
            <h2 className="text-center mb-5">Add your skills (Seperate with ' ,')</h2>
            <form onSubmit={handleSubmit}>
                {
                    <><input onChange={handleInput} /><button>Submit</button></>
                }
            </form>
            
        </div>
    )
}

export default Skills;