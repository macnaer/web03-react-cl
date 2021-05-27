
const initialState = {
    List: []
}

const ContactListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIST_LOADED":
            return {
                ...state,
                List: action.payload
            }
        case "ADD_CONTACT":
            return {
                ...state,
                List: action.payload
            }
        default:
            return state;
    }

}
export default ContactListReducer;