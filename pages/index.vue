<template>
    <div class="app flex w-full">

        <Menu />
        <div class="scroll_container flex flex-col w-full">
            <scroll_module_presentation />
            <Module_intro />
            <Mod_planteamiento />

            <div class="module logo_scrollto">
                <mod_logotipo1 />
            </div>
            <div class="module">
                <mod_logoSubmarcas />
            </div>
            <div class="module isotipo_scrollto">
                <Mod_isotipoMarcarincipal />
            </div>
            <div class="module">
                <mod_isotipoSubmarcas />
            </div>
            <div class="module versiones_scrollto">
                <mod_versionesFondos />
            </div>
            <div class="module">
                <mod_submarcasFondos />
            </div>
            <div class="module construcción_scrollto">
                <mod_construccion />
            </div>
            <div class="module">
                <Mod_areaSeguridad />
            </div>
            <div class="module">
                <Mod_tamaños />
            </div>
            <div class="module paleta_scrollto">
                <Mod_color1 />
            </div>
            <div class="module">
                <Mod_color2 />
            </div>
            <div class="module tipografia_scrollto">
                <Mod_typography />
            </div>
            <div class="module usos_scrollto">
                <Mod_usosIncorrectos />
            </div>






        </div>

    </div>
</template>
  
<script setup>

import Menu from "/components/menu.vue"
import Module_intro from "/components/module_intro.vue";
import scroll_module_presentation from "/components/scroll_module_presentation.vue";
import Mod_planteamiento from "/components/mod_planteamiento.vue"
import mod_logotipo1 from "/components/mod_logotipo1.vue"
import mod_logoSubmarcas from "/components/mod_logoSubmarcas.vue"
import Mod_isotipoMarcarincipal from "/components/mod_isotipoMarcarincipal.vue";
import mod_isotipoSubmarcas from "/components/mod_isotipoSubmarcas.vue";
import mod_versionesFondos from "/components/mod_versionesFondos.vue";
import mod_submarcasFondos from "/components/mod_submarcasFondos.vue";
import mod_construccion from "/components/mod_construccion.vue";
import Mod_areaSeguridad from "/components/mod_areaSeguridad.vue";
import Mod_tamaños from "/components/mod_tamaños.vue";
import Mod_color1 from "/components/mod_color1.vue";
import Mod_color2 from "/components/mod_color2.vue";
import Mod_usosIncorrectos from "/components/mod_usosIncorrectos.vue";
import Mod_typography from "/components/mod_typography.vue";
// import Module_aplicacionesTitle from "/components/module_aplicacionesTitle.vue";
// import Mod_aplicacionesNotion from "/components/mod_aplicacionesNotion.vue";


useHead({
    title: "hola",
})

</script>



<style lang="sass">



.module
    @apply border-t-cine_yelmo_dark_blue border-t-2 pl-40 pr-28
</style>

