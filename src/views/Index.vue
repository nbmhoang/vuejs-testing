<template>
    <div>
        <h1>Item</h1>
        <table class="table table-hover">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Item Name</td>
                    <td>Item Price</td>
                    <td colspan="2">Action</td>
                </tr>
            </thead>

            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td><router-link :to="{name: 'Edit', params: { id: item.id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" @click="deleteItem(item.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
    computed: mapState({
    items: state => state.item.all
}),
methods: mapActions('item', [
'deleteItem'
]),
created () {
    this.$store.dispatch('item/getAllItem')
}
}
</script>