import React, { useEffect, useState } from 'react';
import SingleFaq from '../SingleFaq/SingleFaq';

const FaqCustom = () => {
    const [comment, setComment] = useState({ comment: '' });
    const [customFaq, setCustomFaq] = useState([]);

    useEffect(() => {
<<<<<<< HEAD
        fetch('https://afternoon-headland-45054.herokuapp.com/customfaq')
            .then(res => res.json())
            .then(data => {
                let sortedFaq = [];
                for (let i = (data.length - 1); i >= 0; i--) {
                    sortedFaq.push(data[i]);
                }
                setCustomFaq(sortedFaq);
            });
=======
        fetch('https://still-cliffs-68775.herokuapp.com/customfaq')
        .then(res => res.json())
        .then(data => {
            let sortedFaq = [];
            for (let i = (data.length - 1); i >= 0; i--) {
                sortedFaq.push(data[i]);
            }
            setCustomFaq(sortedFaq);
        });
>>>>>>> a7a71487154c7ccc9db316b14ccc5432468735d7
    }, [customFaq]);

    const handleComment = (e) => {
        setComment({ comment: e.target.value });
    }

    const postHandle = (e) => {
        e.preventDefault();
<<<<<<< HEAD
        fetch('https://afternoon-headland-45054.herokuapp.com/customfaq', {
=======
        fetch('https://still-cliffs-68775.herokuapp.com/customfaq', {
>>>>>>> a7a71487154c7ccc9db316b14ccc5432468735d7
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
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
        <div style={{ marginTop: '80px' }}>

            <form style={{ marginBottom: '80px' }} onSubmit={postHandle}>
                <div className="d-flex justify-content-center">
<<<<<<< HEAD
                    <input style={{ border: '1px solid black' }} onChange={handleComment} className="w-50 mx-0 bg-light" /><button style={{ background: 'white', border: '1px solid rgba(0, 0, 0, 1)', borderLeft: 'none' }} className="px-4">Post</button>
=======
                    <input style={{border: '1px solid black'}} onChange={handleComment} className="w-50 mx-0 py-2 rounded" /><button style={{background: 'white', border: '1px solid rgba(0, 0, 0, 1)', borderLeft: 'none'}} className="px-4">Post</button>
>>>>>>> a7a71487154c7ccc9db316b14ccc5432468735d7
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