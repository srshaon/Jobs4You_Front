import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import ChatInput from '../ChatInput/ChatInput';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';
// import ChatList from '../ChatList/ChatList';

let isAdmin = false;
let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [allUsers, setAllUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'https://afternoon-headland-45054.herokuapp.com/';

    const location = useLocation();
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        setName(name);
        setRoom(room);

        socket = io(ENDPOINT, {
            reconnectionAttempts: 'infinity'
            // withCredentials: true,
            // extraHeaders: {
            //     "accept-header": "approved"
            // }
        });
        // console.log(socket);

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                window.alert(error);
            }
        });

        return () => {
            socket.emit('disconnect');
            socket.off('disconnect');
            socket.off('join');
        };

    }, [location.search]);


    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });

        socket.on('getUsers', ({ allUsers }) => {
            setAllUsers(allUsers);
        });

        socket.on('roomData', ({ users }) => {
            setUsers(users);
        });

        return () => {
            socket.off('message');
            socket.off('getUsers');
            socket.off('roomData');
        }

        // console.log(message, messages);
    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }

        document.getElementById('in').focus();

    };


    return (
        <div className="chatOuterContainer">
            {
                !isAdmin && <>
                    <div className="chatContainer">
                        <InfoBar name={name} room={room} />
                        <Messages messages={messages} name={name} />
                        <ChatInput message={message} setMessage={setMessage} sendMessage={sendMessage} />

                    </div>
                    <TextContainer users={users} />
                </>
            }

            {/* {
                    isAdmin && <div>
                        <ChatList allUsers={allUsers} />
                    </div>
                } */}
        </div>
    )
}

export default Chat;