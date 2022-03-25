import "./AllCompanies.css";

import React, { useEffect, useState } from 'react';

const AllCompanies = () => {
    const [abcde, setAbcde] = useState([]);
    useEffect(() => {
        fetch("https://afternoon-headland-45054.herokuapp.com/companies")
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
//   fetch("https://afternoon-headland-45054.herokuapp.com/companyprofiles")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       // setAllCompanies(data);
//     });
