import React, { useState } from 'react';
import './SingleFaq.css';

const SingleFaq = (props) => {
    const { singleFaq, customFaq, setCustomFaq } = props;
    const { _id, comment } = props.singleFaq;
    const [reply, setReply] = useState({reply: ''});

    const handleReply = (e) => {
        setReply({reply: e.target.value});
        console.log(typeof _id);
    };

    const expandToggle = (e) => {
        // document.getElementById('reply').classList.remove('initial-reply');
        // document.getElementById('reply').classList.toggle('custom-accordion');
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    
    const fullDoc = { _id: _id, comment: comment, reply: reply.reply };
    

    fetch('http://localhost:5000/customfaq', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fullDoc)
    })
    .then(res => res.json())
    .then(data => {
        if(data?.acknowledged) {
            e.target.reset();

            const updated = [];

            customFaq.forEach(single => {
                if (single._id === _id) {
                    let tmp = { _id: _id, comment: comment, reply: reply };
                    updated.push(tmp);
                }
                else {
                    updated.push(single);
                }
            });

            setCustomFaq(updated);
        }
    })
    .catch(error => {
        // if (error) {
        //     window.location.reload();
        // }
    });

    };

    return (
        <div style={{marginBottom: '45px'}}>
            <div style={{maxWidth: '700px'}} class="container">
               
                 <div className="border shadow py-4 px-3">
                        <p className="p-0 m-0"><strong>{comment}</strong></p>
                    </div>
                
                {
                    !singleFaq?.reply &&
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="d-flex">
                                <input onChange={handleReply} className="w-50 mx-0 bg-light" type="text" />
                                <button style={{background: 'white', border: '1px solid rgba(0, 0, 0, 0.1)', borderLeft: 'none'}} className="px-3">Reply</button>
                            </div>
                        </form>
                    </div>
                }

                {
                    singleFaq?.reply &&
                    <div id="reply" className="initial-reply py-2 px-3 bg-light shadow" style={{marginTop: '-15px', marginLeft: '50px', marginRight: '-30px', border: '1px solid rgba(0, 0, 0, 0.2)'}}>
                        <p className="p-0 m-0">{singleFaq?.reply}</p>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default SingleFaq;