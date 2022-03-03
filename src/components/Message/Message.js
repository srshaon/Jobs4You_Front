import React from 'react';
import './Message.css';

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();
    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }
    return (
        <div>

        {
            isSentByCurrentUser ?
            <div className="chatMessageContainer justifyEnd">
                <p className="chatSentText pr-10 my-auto">{trimmedName}</p>
                <div className="chatMessageBox backgroundBlue">
                    <p className="chatMessageText colorWhite my-auto">{text}</p>
                </div>
            </div> :

            <div className="chatMessageContainer justifyStart">
                <div className="chatMessageBox backgroundLight">
                    <p className="chatMessageText colorDark my-auto">{text}</p>
                </div>
                <p className="chatSentText pl-10 my-auto">{user}</p>
            </div>
        }

        </div>
    )
}

export default Message;