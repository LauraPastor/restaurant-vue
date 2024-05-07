<template>
    <div class="header">
        <Logo :isLink="true" />
        <div class="nav" @click="toggleMenu">
            <span class="menu-icon">&#9776;</span>
            <ul :class="{ 'menu-open': isMenuOpen }">
                <li><router-link to="/add">Add</router-link></li>
                <li><router-link to="/coming-soon">Coming soon</router-link></li>
                <li><a @click="logout" href="#"><span role="img" aria-label="logout">↪</span></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import Logo from './Logo.vue';

export default {
    name: "Header",
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        logout() {
            localStorage.removeItem('user-info')
            this.$router.push({ path: '/log-in' });
            console.log('logout');
        }
    },
    components: {
        Logo,
    },
}
</script>

<style>
.header {
    display: flex;
    justify-content: space-between;
    background-color: #333;
    color: white;
    padding: 10px 90px;
    align-items: center;
}

.nav {
    position: relative;
}

.menu-icon {
    cursor: pointer;
}

.menu-icon:hover {
    background-color: #474343;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    padding: 5px;
}

ul {
    display: none;
}

ul.menu-open {
    display: flex;
    flex-direction: column;
    place-content: space-evenly;
    list-style-type: none;
    padding: 0;
    margin: 0 -33px;
    position: absolute;
    background-color: #cccccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

ul li {
    text-align: center;
    padding: 8px 0;
}

ul li a {
    text-decoration: none;
    color: #474343;
    display: block;
    padding: 8px 16px;
    transition: background-color 0.3s ease;
}

ul li a:hover {
    background-color: #f2f2f2;
    color: #333;
}
</style>
