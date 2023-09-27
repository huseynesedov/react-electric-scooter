export const AddTocart = (payload) => {
    return {
        type: "ADD_TO_CART",
        payload 
    }
}

export const RemoveFromCart = (payload) => {
    return {
        type: "REMOVE_FROM_CART",
        payload
    }
}