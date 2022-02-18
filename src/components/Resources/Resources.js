import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
    const [resources, setResources] = useState([]);
    useEffect(() => {
        fetch('./data-json/resources.json')
        .then(res => res.json())
        .then(data => setResources(data));
    }, []);
    return (
        <div>
            <div style={{marginTop: '150px', marginBottom: '80px', backgroundColor: '#eae8e5'}}>
                <div style={{paddingTop: '80px', paddingBottom: '60px'}} className="container text-center">
                    <h1 className="mb-5">Resources</h1>
                    <div className="row d-flex justify-content-center">
                        {
                            resources.map(resource => {
                                return <div key={resource?.id} className="col-lg-4 col-sm-6 col-12 mb-sm-4 mb-0">
                                <Link style={{color: 'unset', textDecoration: 'none'}} to={`/resource/${resource?.id}`}>
                                <div>
                                    <div className="d-flex">
                                        <img className="w-100" src={resource?.img} alt="" />
                                    </div>
                                    <h4 className="my-4 py-2">{resource?.title}</h4>
                                </div>
                                </Link>
                            </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources;