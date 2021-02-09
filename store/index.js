import cookieparser from "cookieparser";

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let order = [];
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      order = parsed.order && JSON.parse(parsed.order) || [];
    }
    if (order.length < 2) {
      commit("order/setItems", order);
    } 
    else {
      order.splice(0, order.length, order[order.length - 1]);
      commit("order/setItems", order);
    }
  }
};
