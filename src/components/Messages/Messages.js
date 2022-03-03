import React from 'react';
import './Messages.css';
import Message from '../Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';

const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom className="chatMessages">
            {
                messages.map((message, index) => {
                    return <div key={index}>
                        <Message message={message} name={name} />
                    </div>
                })
            }
        </ScrollToBottom>
    )
}

export default Messages;