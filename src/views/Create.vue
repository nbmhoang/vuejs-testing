<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="addItem">
                    <div class="form-group">
                        <label>Item Name: </label>
                        <input type="text" :value="item.name" @input="updateItemName" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label>Item Price: </label>
                        <input type="number" :value="item.price" @input="updateItemPrice" class="form-control" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
    computed: mapState({
        item: state => state.item.item
    }),
    methods: {
        ...mapActions('item', [
            'addItem'
        ]),
        updateItemName(e) {
            this.$store.commit('item/updateItemName', e.target.value)
        },
        updateItemPrice(e) {
            this.$store.commit('item/updateItemPrice', e.target.value)
        },
    }
}
</script>