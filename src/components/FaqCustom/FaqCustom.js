import React, { useEffect, useState } from 'react';
import SingleFaq from '../SingleFaq/SingleFaq';

const FaqCustom = () => {
    const [comment, setComment] = useState({comment: ''});
    const [customFaq, setCustomFaq] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/customfaq')
        .then(res => res.json())
        .then(data => {
            let sortedFaq = [];
            for (let i = (data.length - 1); i >= 0; i--) {
                sortedFaq.push(data[i]);
            }
            setCustomFaq(sortedFaq);
        });
    }, [customFaq]);

    const handleComment = (e) => {
        setComment({comment: e.target.value});
    }

    const postHandle = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/customfaq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        .then(res => res.json())
        .then(data => {
            if(data?.acknowledged) {
                e.target.reset();
            }
        })
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });
    }
    return (
        <div style={{marginTop: '80px'}}>

            <form style={{marginBottom: '80px'}} onSubmit={postHandle}>
                <div className="d-flex justify-content-center">
                    <input style={{border: '1px solid black'}} onChange={handleComment} className="w-50 mx-0 bg-light" /><button style={{background: 'white', border: '1px solid rgba(0, 0, 0, 1)', borderLeft: 'none'}} className="px-4">Post</button>
                </div>
            </form><hr />

            <div className="my-5">
                {
                    customFaq.map(singleFaq => {
                        return <SingleFaq key={singleFaq._id} singleFaq={singleFaq} customFaq={customFaq} setCustomFaq={setCustomFaq} />
                    })
                }
            </div>
            
        </div>
    )
}

export default FaqCustom;