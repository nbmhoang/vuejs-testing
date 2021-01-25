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
export default {
    data() {
        return {
            items: []
        }
    },
    created: function() {
        this.fetchItems();
    },
    methods: {
        fetchItems() {
            const uri = 'item';
            this.axios.get(uri).then(res => this.items = res.data);
        },
        deleteItem(itemId) {
            const uri = `item/${itemId}`;
            this.axios.delete(uri).then(() => {
                console.log('deleted');
                this.fetchItems();
            });
        }
    }
}
</script>