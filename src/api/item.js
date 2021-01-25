import axios from "./request";

export default {

    getAllItems (callback) {
        axios.get('item').then(callback);
    },

    getItemById (id, callback) {
        axios.get(`item/${id}`).then(callback);
    },

    updateItem (id, item, callback) {
        axios.put(`item/${id}`, item).then(callback);
    },

    addItem (item, successCallback, errorCallback) {
        axios.post('item', item).then(successCallback).catch(errorCallback);
    },

    deleteItem(item, successCallback, errorCallback) {
        axios.delete(`item/${item.id}`, ).then(successCallback).catch(errorCallback);
    }
}