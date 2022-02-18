import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Locations = () => {

    const [locations, setLocations] = useState([]);
    useEffect(() => {
        fetch("https://still-cliffs-68775.herokuapp.com/jobs")
            .then((res) => res.json())
            .then((data) => {

                const LocationList = data.map(location => (location.jobLocation))


                const uniqueLocations = [...new Set(LocationList)];
                setLocations(uniqueLocations)
            });
    }, []);

    return (
        <div className='mt-5 row row-cols-lg-3 row-cols-md-3 row-cols-1 cardbg ms-3 me-3'>
            {
                locations.map(location => <div >


                    <div className='mt-5'>
                        <div class="box me-5">
                            <h3>{location}</h3>

                            <div className='d-flex justify-content-center'>

                                <Link to={`/locationjobs/${location}`}>

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

export default Locations;