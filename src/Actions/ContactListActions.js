export const getContacts = (list) => {
    return {
        type: "LIST_LOADED",
        payload: list
    }
}