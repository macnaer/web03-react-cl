export const getContacts = (list) => {
    return {
        type: "LIST_LOADED",
        payload: list
    }
}

export const onAddContact = (newContacts) => {
    return {
        type: "ADD_CONTACT",
        payload: newContacts
    }
}