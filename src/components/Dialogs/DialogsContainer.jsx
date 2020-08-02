import Dialogs from './Dialogs';
import {addMessageActionCreator, updateMessageActionCreator} from './../../redux/dialogReducer'
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogData: state.dialogsPage.dialogData,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps  = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChange: (text) => {
            dispatch(updateMessageActionCreator(text));
        },
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;