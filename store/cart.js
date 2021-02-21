import Cookies from "js-cookie";

export const state = () => ({
  extralist: []
});

export const mutations = {
  setExtra(state, extralist) {
    state.extralist = extralist;
  },
  addExtra(state, extra) {
    const record = state.extralist.find(i => i.id === extra.id);

    if (!record) {
      state.extralist.push({
        quantity: 1,
        ...extra
      });
    }
    else if(record.quantity >= record.max) {
      record.quantity
    }
    else {
      record.quantity++
    }
    Cookies.set("cart", state.extralist);
  },
  removeExtra(state, extra) {
    const record = state.extralist.find(i => i.id === extra.id)

    if (record.quantity > 1) {
      record.quantity--
    } else {
      const index = state.extralist.findIndex(i => i.id === extra.id);
    state.extralist.splice(index, 1);
    }
    Cookies.set("cart", state.extralist);
  },
  emptyList(state) {
    state.extralist = [];
    Cookies.set("cart", state.extralist);
  }
};

export const getters = {
  extralist: state => {
    return state.extralist;
  },
  price: state => {
    return state.extralist.reduce(
      (accumulator, extra) => accumulator + extra.price * extra.quantity,
      0
    );
  }
};
