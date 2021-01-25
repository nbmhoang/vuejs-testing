<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Item</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="updateItemById(item.id)">
                    <div class="form-group">
                        <label>Item Name:</label>
                        <input type="text" class="form-control" :value="item.name" @input="updateItemName" />
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input type="number" class="form-control" :value="item.price" @input="updateItemPrice" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Update" />
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
            'updateItemById'
        ]),
        updateItemName(e) {
            this.$store.commit('item/updateItemName', e.target.value)
        },
        updateItemPrice(e) {
            this.$store.commit('item/updateItemPrice', e.target.value)
        },
    },
    created () {
        this.$store.dispatch(`item/getItemById`, this.$route.params.id);
    },
    unmounted () {
        this.$store.dispatch(`item/clearItem`);
    }
}
</script>