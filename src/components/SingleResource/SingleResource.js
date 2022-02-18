import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleResource = () => {
    const { id } = useParams();
    const [single, setSingle] = useState({});
    useEffect(() => {
        fetch('/data-json/resources.json')
        .then(res => res.json())
        .then(data => {
            let temp = data.find(check => check?.id === parseInt(id));
            setSingle(temp);
        });
    }, [id]);
    return (
        <div>
            <div style={{minHeight: '100vh', backgroundColor: '#eae8e5', paddingTop: '80px', paddingBottom: '70px'}} className="d-flex justify-content-center">
                <div style={{maxWidth: '900px'}} className="container mx-2">
                    {
                        single?.id &&
                        <div>
                            <p>{single.date}</p>
                            <h1 className="mb-5 mt-4">{single.title}</h1>
                            <div>
                                <img className="w-100" src={single.img.slice(1, single.img.length)} alt="" />
                            </div>
                            <p className="mt-4"><em>{single.read}</em></p>
                            <p>{single.content}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default SingleResource;