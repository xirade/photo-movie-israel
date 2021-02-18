import Cookies from "js-cookie";

export const state = () => ({
  items: []
});

export const mutations = {
  setItems(state, items) {
    state.items = items;
  },
  remove(state,item) {
    state.items = []
    state.items.push(item)
    Cookies.set("order", state.items);
  },
  addPrice(state, price){
    const record = state.items.find(i => i.id)
    if(record){
      record.total+=price;
    }
    Cookies.set("order",state.items)
  },
  removePrice(state, price){
    const record = state.items.find(i => i.id)
    if(record.total >= price){
      record.total -=price
    } 
    Cookies.set("order",state.items)
  },
  emptyList(state) {
    state.items = []
    Cookies.set('order', state.items)
  }
};

export const getters = {
  items: state => {
    return state.items;
  },
};
