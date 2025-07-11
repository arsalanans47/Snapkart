export const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
     //calculate items price

        state.itemsPrice = addDecimal(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

        //calculate shipping price(if order is over $100 free shipping, else $5 shipping)

        state.shippingPrice = addDecimal(state.itemsPrice > 100 ? 0 : 5);

        //calculate tax price(10% tax)

        state.taxPrice = addDecimal(Number((0.1 * state.itemsPrice).toFixed(2)));

        //calculate total price

        state.totalPrice = addDecimal((Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice)).toFixed(2));

        localStorage.setItem('cart', JSON.stringify(state));

        return state;
}