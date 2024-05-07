<template>
    <section class="page_404">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 ">
                    <div class="col-sm-10 col-sm-offset-1  text-center">
                        <div class="four_zero_four_bg">
                            <h1 class="text-center ">404</h1>
                        </div>
                        <div class="contant_box_404">
                            <h3 class="h2">
                                Look like you're lost
                            </h3>
                            <p>the page you are looking for not avaible!</p>
                            <div class="link_404">
                                <Logo :isLink="true" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Logo from './Logo.vue';
export default {
    name: 'NotFound',
    components: {
        Logo,
    }
}
</script>
<style>
.page_404 {
    padding: 40px 0;
    background: #fff;
    font-family: 'Arvo', serif;
}

.page_404 img {
    width: 100%;
}

.four_zero_four_bg {

    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 400px;
    background-position: center;
}


.four_zero_four_bg h1 {
    font-size: 80px;
}

.four_zero_four_bg h3 {
    font-size: 80px;
}

.link_404 {
    width: 25%;
    margin-top: -55px;
    display: inline-block;
}

.contant_box_404 {
    margin-top: -50px;
}
</style>