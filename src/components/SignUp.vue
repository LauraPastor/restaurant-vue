<template>
    <div>
        <Logo />
        <h1>Sign Up</h1>
        <form class="register" @submit.prevent="submitForm">
            <input type="email" v-model="email" placeholder="Email" />
            <input type="text" v-model="username" placeholder="Username" />
            <input type="password" v-model="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
            <p>Already have an account?
                <router-link to="/log-in">Login</router-link>
            </p>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
import Logo from './Logo.vue'
export default {
    name: 'SignUp',
    components: {
        Logo
    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async submitForm() {
            let result = await axios.post('http://localhost:3000/users', {
                username: this.username,
                password: this.password
            })
            console.log(result)
            if (result.status === 201) {
                localStorage.setItem('user-info', JSON.stringify(result.data))
                this.$router.push('/')

            } else {
                alert('Sign up failed')
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (user) {
            this.$router.push('/')
        }
    }
}
</script>