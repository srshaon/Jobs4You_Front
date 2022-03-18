import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import GetSkills from '../GetSkills/GetSkills';

const Skills = () => {
    const [skillArray, setSkillArray] = useState([]);
    const [skill, setSkill] = useState('');
    const { email } = useAuth().user;

    useEffect(() => {
        fetch(`https://afternoon-headland-45054.herokuapp.com/skills/${email}`)
        .then(res => res.json())
        .then(data => setSkillArray(data));
    }, [email, skill]);

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

        const skills = [...skillArray];
        let newSkills = skill.split(', ');

        const confirmedNewSkills = newSkills.filter(newskill => {
            const i = skillArray.findIndex(singleSkill => singleSkill === newskill);

            if (i === -1) {
                return newskill; 
            }

        });

        confirmedNewSkills.map(newSkill => skills.push(newSkill));
        console.log(skills);
        
        let addSkills = { email: email, skills: skills };

        fetch('https://afternoon-headland-45054.herokuapp.com/skills', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addSkills)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    setSkill('');
                    e.target.reset();
                    setSkillArray(skills);
                }
            });
    }

    return (
        <div className="d-flex justify-content-center flex-wrap" style={{ minHeight: '70vh', marginTop: '50px' }}>
            <div style={{width: '50%'}}>
                <h2 className="text-center">Add your skills</h2>
                <p className="text-center mb-5">(Seperate with ' ,')</p>
                <form onSubmit={handleSubmit}>
                    {
                        <div className="text-center py-4"><input className="py-2 px-3" onChange={handleInput} /><button className="py-2 px-3 bg-dark text-light" style={{background: 'white', borderLeft: 'none', border: '1px solid rgba(0, 0, 0, 1)'}}>Submit</button></div>
                    }
                </form>
            </div>

            <GetSkills skillArray={skillArray} setSkillArray={setSkillArray} skill={skill} />

        </div>
    )
}

export default Skills;