import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './SingleFaq.css';

const SingleFaq = (props) => {
    const { singleFaq, customFaq, setCustomFaq } = props;
    const { _id, comment, liked } = props.singleFaq;
    const [reply, setReply] = useState({ reply: '' });
    const [ likes, setLikes ] = useState(0);
    const [ dislikes, setDislikes ] = useState(0);
    const [isDisliked, setIsDisliked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const { email } = useAuth().user;

    useEffect(() => {
        fetch(`https://afternoon-headland-45054.herokuapp.com/faqGetLikes?id=${_id}&email=${email}`)
        .then(res => res.json())
        .then(data => {
            if (data?.likes !== undefined) {
                setLikes(data?.likes);
                setIsLiked(data?.isLiked);
            }
        });
    });

    useEffect(() => {
        fetch(`https://afternoon-headland-45054.herokuapp.com/faqGetDisLikes?id=${_id}&email=${email}`)
        .then(res => res.json())
        .then(data => {
            if (data?.dislikes !== undefined) {
                setDislikes(data?.dislikes);
                setIsDisliked(data?.isDisliked);
            }
        });
    });

    const reactUpdate = async (doc, react) => {
        fetch(`https://afternoon-headland-45054.herokuapp.com/faq${react}/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(doc)
        })
        .then(res => res.json())
        .then((result) => console.log(result));
    }

    const likeUpdate = () => {
        const doc = { ...props.singleFaq };

        const run = async () => {
            await reactUpdate(doc, 'Like');
        };
        run();
    };

    const dislikeUpdate = async () => {
        const doc = { ...props.singleFaq };

        const run = async () => {
            await reactUpdate(doc, 'Dislike');
        };
        run();
    };

    const handleReply = (e) => {
        setReply({ reply: e.target.value });
        console.log(typeof _id);
    };

    const expandToggle = (e) => {
        // document.getElementById('reply').classList.remove('initial-reply');
        // document.getElementById('reply').classList.toggle('custom-accordion');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const fullDoc = { _id: _id, comment: comment, reply: reply.reply };


        fetch('https://afternoon-headland-45054.herokuapp.com/customfaq', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fullDoc)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
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
        <div style={{ marginBottom: '45px' }}>
            <div style={{ maxWidth: '700px' }} class="container">

                <div className="border shadow py-4 px-3">
                    <p className="p-0 m-0"><strong>Q: {comment}</strong></p> 
                </div>

                {
                    !singleFaq?.reply &&
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="d-flex">
                                <input style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} placeholder="Write a reply!" onChange={handleReply} className="w-50 mx-0 py-2 px-3 bg-light" type="text" />
                                <button style={{ background: 'white', border: '1px solid rgba(0, 0, 0, 0.1)', borderLeft: 'none' }} className="px-3">Reply</button>
                            </div>
                        </form>
                    </div>
                }

                {
                    singleFaq?.reply &&
                    <div id="reply" className="initial-reply d-flex justify-content-between py-2 px-3 bg-light shadow" style={{ marginTop: '-15px', marginLeft: '50px', marginRight: '-30px', border: '1px solid rgba(0, 0, 0, 0.2)' }}>
                        <p className="p-0 m-0">Ans: {singleFaq?.reply}</p>
                        <div>
                            <button className="react-color" style={{background: 'transparent', border: 'none'}} onClick={likeUpdate}>
                            {
                                !isLiked ?
                                <div>
                                    <i className="fs-5 fa-regular fa-thumbs-up"></i> {likes}
                                </div> :
                                
                                <div>
                                    <i className="fs-5 fa-solid fa-thumbs-up"></i> {likes}
                                </div>
                            }
                            </button>

                            <button className="react-color" style={{background: 'transparent', border: 'none'}} onClick={dislikeUpdate}>
                            {
                                !isDisliked ?
                                <div style={{transform: 'translateY(2px)'}} className="ms-3">
                                    <i className="fs-5 fa-regular fa-thumbs-down"></i> {dislikes}
                                </div> :
                                
                                <div style={{transform: 'translateY(2px)'}} className="ms-3">
                                    <i className="fs-5 fa-solid fa-thumbs-down"></i> {dislikes}
                                </div>
                            }
                            </button>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default SingleFaq;