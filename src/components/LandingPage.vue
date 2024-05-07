<template>
    <div>
        <Header></Header>
        <h1>Hi there, {{ username }}</h1>
        <p>Welcome to the Home page</p>
    </div>
    <table class="nice-table">
        <tr>
            <th>Images</th>
            <th>Restaurant Name</th>
            <th>Location</th>
            <th>website</th>
            <th>Actions</th>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td><img :src="item.image" alt="restaurant" width="100" height="100"></td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.website }}</td>
            <td class="actions">
                <div>
                    <router-link :to="'/update/' + item.id">✏️</router-link>
                </div>
                <div>
                    <button @click="deleteItem(item.id)">🗑️</button>
                </div>
            </td>
        </tr>
    </table>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name: 'LandingPage',
    data() {
        return {
            username: "",
            restaurants: []
        }
    },
    components: {
        Header,
    },
    methods: {
        async deleteItem(id) {
            let result = await axios.delete('http://localhost:3000/restaurants/' + id)
            if (result.status === 200) {
                this.restaurants = this.restaurants.filter(item => item.id !== id)
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info')
        this.username = JSON.parse(user).username
        if (!user) {
            this.$router.push('/sign-up')
        }
        let result = await axios.get('http://localhost:3000/restaurants')
        console.log(result)
        this.restaurants = result.data
    }
}
</script>
<style>
.nice-table {
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
}

.nice-table th,
.nice-table td {
    border: 1px solid #dddddd;
    padding: 8px;
    text-align: left;
}

.nice-table th {
    background-color: #f2f2f2;
    font-weight: bold;
}

.nice-table tr:nth-child(even) {
    background-color: #f9f9f9;
}

.nice-table tr:hover {
    background-color: #f2f2f2;
}

.nice-table img {
    display: block;
    margin: auto;
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
}

.actions {
    display: flex;
    justify-content: space-between;
}
</style>