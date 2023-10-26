let intialState = []
const CartReducer = (state = intialState, action) => {
    if (action.type === "ADD_TO_CART") {
        const findedProduct = state.find(product => product.id === action.payload.id)

        const obj = {
            "id": action.payload.id,
            "title": action.payload.title,
            "src": action.payload.src,
            "src2": action.payload.src2,
            "src3": action.payload.src3,
            "src4": action.payload.src4,
            "content": action.payload.content,
            "price": action.payload.price,
            "del": action.payload.del,
            "count": action.payload.count,
            "quanty": 1
        }
        if (findedProduct) {
            findedProduct.quanty++
            return [...state]
        } else {
            return [...state, obj]
        }
    }

    else if (action.type === "REMOVE_FROM_CART") {
        const findedProduct = state.find(product => product.id === action.payload)
        if (findedProduct.quanty > 0) {
            findedProduct.quanty--
        }
        return [...state]
    }
    else {
        return []
    }
    
}

export default CartReducer