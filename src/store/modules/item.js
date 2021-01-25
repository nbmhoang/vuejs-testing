import item from '@/api/item';

const state = () => ({
    item: {},
    all: []
})

const getters = {}

const actions = {
    getAllItem({ commit }) {
        item.getAllItems(response => {
            commit('setItems', response.data)
        })
    },
    getItemById({ commit }, id) {
        item.getItemById(id, response => {
            commit('setCurrentItem', response.data)
        })
    },
    updateItemById({ state, commit }, id) {
        item.updateItem(id, state.item, () => {
            commit('setCurrentItem', state.item)
        })
    },
    addItem({ state, commit }) {
        item.addItem(state.item, response => {
            commit('addItem', response.data.item_id)
        })
    },
    deleteItem({ commit }, id) {
        item.deleteItem(id, () => {
            commit('deleteItem', id);
        })
    },
    clearItem({ commit }) {
        commit('setCurrentItem', {})
    }
}

const mutations = {
    setItems (state, items) {
        state.all = items
    },
    setCurrentItem(state, item) {
        // console.log('res',item);
        state.item = item
    },
    addItem (state, id) {
        state.all.push({
            ...state.item,
            id
        })
        state.item = {}
    },
    deleteItem (state, id) {
        state.all = state.all.filter(item => item.id !== id)
    },
    updateItemName (state, name) {
        state.item.name = name
    },
    updateItemPrice (state, price) {
        state.item.price = price
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}