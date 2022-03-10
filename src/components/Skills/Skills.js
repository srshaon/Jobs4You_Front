import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Skills = () => {

    const [skill, setSkill] = useState('');
    const { email } = useAuth().user;

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

        const skills = skill.split(', ');
        
        let addSkills = { email: email, skills: skills };

        fetch('https://afternoon-headland-45054.herokuapp.com/skills', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addSkills)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    e.target.reset();
                }
            })
    }

    return (
        <div style={{ minHeight: '70vh', marginTop: '50px' }}>
            <h2 className="text-center mb-5 pt-3">Add your skills (Seperate with ' ,')</h2>
            <form onSubmit={handleSubmit}>
                {
                    <div className="text-center py-4"><input className="py-2 px-3" onChange={handleInput} /><button className="py-2 px-3 bg-dark text-light" style={{background: 'white', borderLeft: 'none', border: '1px solid rgba(0, 0, 0, 1)'}}>Submit</button></div>
                }
            </form>

        </div>
    )
}

export default Skills;