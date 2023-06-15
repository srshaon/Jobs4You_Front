import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Notification = ({ notification }) => {
    const history = useHistory();
    const { control, setControl } = useAuth();
    const handleClick = (e) => {
        console.log(history)
        if (!notification?.isClicked) {
            fetch(`https://jobs4you.onrender.com/notifications/${e.target.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: notification.email, message: notification.message, link: notification.link })
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.acknowledged) {
                        e.target.style.background = 'white';
                    }
                })
        }
        history.replace(`/${notification.link}`);
        setControl(notification.portion);
    };
    return (
        <div id={notification?._id} style={{ display: 'block', minWidth: '20vw' }} onClick={handleClick} className={notification?.isClicked ? "common-not white-not text-dark border px-2 py-3" : "common-not gray-not text-light border px-2 py-3"}>
            {notification?.message}
        </div>
    )
}

export default Notification;