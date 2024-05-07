<template>
    <div>
        <Header></Header>
        <h1>Update Restaurant</h1>
        <form class="add">
            <input type="text" name="name" placeholder="Name" v-model="item.name" />
            <input type="text" name="address" placeholder="Address" v-model="item.address" />
            <input type="text" name="website" placeholder="Website" v-model="item.website" />
            <button type="button" v-on:click="update">Update</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    name: 'Update',
    components: {
        Header,
    },
    data() {
        return {
            item: {
                name: '',
                address: '',
                website: ''
            }
        }
    },
    methods: {
        async update() {
            const result = await axios.put('http://localhost:3000/restaurants/' + this.$route.params.id, {
                name: this.item.name,
                address: this.item.address,
                website: this.item.website,
                image: "https://picsum.photos/500/300?random=${Math.random()}"
            })
            if (result.status === 200) {
                this.$router.push('/')
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push('/sign-up')
        }
        const result = await axios.get('http://localhost:3000/restaurants/' + this.$route.params.id)

        console.log(result)
        this.item = result.data
    }
}
</script>