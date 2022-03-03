import React from 'react';
import './ChatInput.css';

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form className="chatForm">
                <input id="in" className="chatInput" 
                placeholder="Type here..."
                value={message}
                onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
                type="text" />
                <button className="chatSendButton" onClick={(e) => sendMessage(e)}>Send</button>
        </form>
    )
}

export default Input;