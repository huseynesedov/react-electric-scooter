const initialState = [];

const CartReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_CART") {
    const findedProduct = state.find(product => product.id === action.payload.id);

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
    };

    if (findedProduct) {
      // Ürün zaten varsa sadece miktarını artır
      return state.map(product =>
        product.id === action.payload.id
          ? { ...product, quanty: product.quanty + 1 }
          : product
      );
    } else {
      // Ürün yoksa yeni ürünü ekleyerek state'i güncelle
      return [...state, obj];
    }
  } else if (action.type === "REMOVE_FROM_CART") {
    // Sepetten ürünü kaldır
    return state.filter(product => product.id !== action.payload);
  }else if (action.type === "REMOVE_ITEM") {
    // DECREASE_QUANTITY durumu
    return state.map(product =>
      product.id === action.payload && product.quanty > 0
        ? { ...product, quanty: product.quanty - 1 }
        : product
    );
  } else {
    return state;
  }
};

export default CartReducer;
