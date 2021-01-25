<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Item</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="updateItem">
                    <div class="form-group">
                        <label>Item Name:</label>
                        <input type="text" class="form-control" v-model="item.name" />
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input type="number" class="form-control" v-model="item.price" />
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
export default {
    data() {
        return {
            item: {}
        }
    },
    created: function() {
        this.getItem();
    },
    methods: {
        getItem() {
            // console.log(this.$route);
            const uri = `item/${this.$route.params.id}`;
            this.axios.get(uri).then(res => this.item = res.data);
        },

        updateItem() {
            const uri = `item/${this.$route.params.id}`;
            this.axios.put(uri, this.item).then(() => {
                this.$router.push({ name: 'Index' })
            });
        }
    }
}
</script>