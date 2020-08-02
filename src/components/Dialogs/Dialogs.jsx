import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.dialogData.map((d) => {
        return (
            <DialogItem name={d.name} key={d.id} />
        )
    });
    let messagesElements = props.messages.map((m) => {
        return (
            <Message message={m.message} key={m.id} />
        )
    });
    const newMessageElement = React.createRef();
    const sendMessage = () => {
        props.sendMessage();
    }
    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text);
   }

    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                {dialogsElements}
            </div> 
            <div className={style.messages}>
                {messagesElements}
                <div className={style.createMessage}>
                    <textarea onChange={onMessageChange}  ref={newMessageElement} value={props.newMessageText}></textarea>
                </div>
                <div className={style.createBtn}>
                    <button className={style.btn} onClick={sendMessage}>Send Message</button>
                </div>
            </div> 
        </div>
    )
}

export default Dialogs;