<template>
    <div>
        <Logo />
        <h1>Login</h1>
        <div class="register">
            <input type="email" v-model="email" placeholder="Email">
            <input type="password" v-model="password" placeholder="Password">
            <button @click="submitForm">Login</button>
            <p>Don't have an account?
                <router-link to="/sign-up">SignUp</router-link>
            </p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Logo from './Logo.vue'
export default {
    name: 'Log-in',
    components: {
        Logo
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async submitForm() {
            let result = await axios.get('http://localhost:3000/users', {
                email: this.email,
                password: this.password
            })
            console.log(result)
            if (result.status === 201) {
                localStorage.setItem('user-info', JSON.stringify(result.data))
                this.$router.push('/')

            } else {
                alert('Login failed')
            }
        }
    }
}
</script>