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
                        <input type="text" v-model="item.name" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label>Item Price: </label>
                        <input type="number" v-model="item.price" class="form-control" />
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
export default {
    // components: {
    //     name: 'AddItem'
    // },
    data() {
        return {
            item: {}
        }
    },
    methods: {
        addItem()  {
            const uri = 'http://localhost:5000/api/v1/item';
            this.axios.post(uri, this.item).then(res => {
                console.log(res.data);
            })
        }
    }
}
</script>