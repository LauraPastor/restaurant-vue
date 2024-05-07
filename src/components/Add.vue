<template>
    <div>
        <Header></Header>
        <form class="add">
            <!-- todo: user can hyperlink the name to the website -->
            <input type="text" name="name" placeholder="Name" v-model="item.name" />
            <input type="text" name="address" placeholder="Address" v-model="item.address" />
            <input type="text" name="website" placeholder="Website" v-model="item.website" />
            <button type="button" v-on:click="add">Add</button>
        </form>
    </div>

</template>
<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name: 'Add',
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
        async add() {
            const result = await axios.post('http://localhost:3000/restaurants', {
                name: this.item.name,
                address: this.item.address,
                website: this.item.website,
                image: "https://picsum.photos/500/300?ramdom=${Math.random()}"
            })
            if (result.status === 201) {
                this.$router.push('/')
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push('/sign-up')
        }
    }
}
</script>