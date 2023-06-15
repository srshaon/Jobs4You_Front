import "./AllCompanies.css";

import React, { useEffect, useState } from 'react';

const AllCompanies = () => {
    const [abcde, setAbcde] = useState([]);
    useEffect(() => {
        fetch("https://jobs4you.onrender.com/companies")
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                setAbcde(data)
            })
    })
    return (
        <div>
            <h2>{abcde?.length}</h2>
        </div>
    );
};

export default AllCompanies;
// const [allCompanies, setAllCompanies] = useState([]);
// useEffect(() => {
//   fetch("https://jobs4you.onrender.com/companyprofiles")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       // setAllCompanies(data);
//     });
