import cookieparser from "cookieparser";

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let cart = [];
    let order = [];
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      cart = (parsed.cart && JSON.parse(parsed.cart)) || [];
      order = (parsed.order && JSON.parse(parsed.order)) || [];
    }
    commit("order/setItems", order);
    commit("cart/setExtra", cart);
  }
};
