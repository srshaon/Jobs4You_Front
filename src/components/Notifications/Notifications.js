import React, { useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Notification from './Notification';
import './Notifications.css';

const Notifications = () => {
    const { user, notifications, counter } = useAuth();
    const [reversedNotifications, setReversedNotifications] = useState([]);
    useEffect(() => {
        if (notifications?.length) {
            let tmp = [];
            for (let i = notifications?.length - 1; i >= 0; i--) {
                tmp.push(notifications[i]);
            }
            setReversedNotifications(tmp);
        }
    }, [notifications]);
    // console.log(<i class="fa-solid fa-bell"></i>)
    return (
        <>
        <NavDropdown 
        title={<i className="noti-bell fa-solid fa-bell"></i>}
        id="collasible-nav-dropdown">
            {
                (user?.email && reversedNotifications?.length) ?
                    reversedNotifications?.map((notification, index) => {
                        return <Notification key={index} notification={notification} />
                    }) : null
            }
            {
                user?.email && !reversedNotifications?.length &&
                <div style={{minWidth: '25vw'}} className="text-light px-3 py-2">You don't have any notifications. Stay tuned!</div>
            }
        </NavDropdown>
        <span className="counter-style">{counter}</span>
        </>
    )
}

export default Notifications;