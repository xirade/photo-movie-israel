import cookieparser from "cookieparser";

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let order = [];
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      order = (parsed.order && JSON.parse(parsed.order)) || [];
    }
    commit("order/setItems", order);
  }
};
