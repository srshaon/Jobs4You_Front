import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css'

const Categories = () => {
    const [jobs, setJobs] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://still-cliffs-68775.herokuapp.com/jobs")
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
                const categoryList = data.map(category => (category.category))
                console.log(categoryList);

                const uniqueCategories = [...new Set(categoryList)];
                setCategories(uniqueCategories)




            });
    }, []);

    return (
        <div className='mt-5 row row-cols-lg-3 row-cols-md-3 row-cols-1 cardbg ms-3 me-3'>
            {
                categories.map(category => <div >


                    <div className='mt-5'>
                        <div class="box me-5">
                            <h3>{category}</h3>


                            <div className='d-flex justify-content-center'>

                                <Link to={`/categoryjobs/${category}`}>

                                    View All Jobs
                                </Link>

                            </div>
                        </div>






                    </div>


                </div>)
            }
        </div>
    );
};

export default Categories;