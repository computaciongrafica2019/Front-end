<template>
    <router-link tag="div" :to="{name: toRoute}">
    <div class="image__container">
        <div class="furniture__image"><img src="https://famsa_imagenes2.storage.googleapis.com/245061024NOVARA.LI.CHO.jpg" alt="Mueble"></div>
        <div class="furniture__description">
            <div class="furniture__title">{{nameFurniture}}</div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, maiores!
        </div>
    </div>
    </router-link>
</template>

<script>
import {TweenLite, Power2, Elastic, TimelineLite} from "gsap/TweenMax";

export default {
    name: 'furniture',
    components: {
    },
    props:{
        nameFurniture: {
            type: String,
            default: ''
        },
        toRoute: {
        type: String,
        default: ''
    }
    },
    mounted() {
    let pg = this.$refs.pg;

    TweenLite
        .from(pg, 2, {
            bottom: '400px',
            opacity: 0,
            ease: Elastic.easeOut.config(0.8, 0.3)
        });
    }
}
</script>

<style lang="scss" scoped>
    .image__container {
        max-width: 255px;
        display: flex;
        flex-flow: column nowrap;
        overflow:hidden;
        margin: 15px;
    }
    
    .furniture__image {
        height: 250px;
        width: 250px;
    }
    .furniture__image img{max-width: 100%; max-height: 100%}
    .image__container:hover {
        transition:all .4s ease-in-out;
        -webkit-transform:scale(1.04);transform:scale(1.04);
    }
    .furniture__title {
        color: white;
        font-weight: bold;
        border-bottom: 1.5px solid $color-orange;
        font-size: 28px;
        padding-bottom: 5px;
        display: inline-block;
        margin-bottom: 7px;
    }

    .furniture__description {
        white-space: pre-line;
        color: rgba(white, .7);
        padding: 10px;
        text-align: left;
        line-height: 27px;
    }
    
</style>
