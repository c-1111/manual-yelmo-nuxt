<template>
        <div class="scroll_container flex flex-col w-full">
                <div class="module">
                        <scroll_module_presentation />
                </div>
                <div class="module">
                        <Module_intro />
                </div>
                <div class="module">
                        <Mod_planteamiento />
                </div>
                <div class="module">
                        <mod_logotipo1 />
                </div>
                <div class="module">
                        <mod_logoSubmarcas />
                </div>
                <div class="module">
                        <Mod_isotipoMarcarincipal />
                </div>
                <div class="module">
                        <mod_isotipoSubmarcas />
                </div>
                <div class="module">
                        <mod_versionesFondos />
                </div>
                <div class="module">
                        <mod_submarcasFondos />
                </div>
                <div class="module">
                        <mod_construccion />
                </div>
                <div class="module">
                        <Mod_areaSeguridad />
                </div>
                <div class="module">
                        <Mod_tamaños />
                </div>
                <div class="module">
                        <Mod_color1 />
                </div>
                <div class="module">
                        <Mod_color2 />
                </div>
                <div class="module">
                        <Mod_typography />
                </div>
                <div class="module">
                        <Mod_usosIncorrectos />
                </div>






        </div>
</template>

<style lang="sass">
.module
    @apply border-t-cine_yelmo_dark_blue border-t-2
</style>

<script setup>

import Module_intro from "./module_intro.vue";
import scroll_module_presentation from "./scroll_module_presentation.vue";
import Mod_planteamiento from "./mod_planteamiento.vue"
import mod_logotipo1 from "./mod_logotipo1.vue"
import mod_logoSubmarcas from "./mod_logoSubmarcas.vue"
import Mod_isotipoMarcarincipal from "./mod_isotipoMarcarincipal.vue";
import mod_isotipoSubmarcas from "./mod_isotipoSubmarcas.vue";
import mod_versionesFondos from "./mod_versionesFondos.vue";
import mod_submarcasFondos from "./mod_submarcasFondos.vue";
import mod_construccion from "./mod_construccion.vue";
import Mod_areaSeguridad from "./mod_areaSeguridad.vue";
import Mod_tamaños from "./mod_tamaños.vue";
import Mod_color1 from "./mod_color1.vue";
import Mod_color2 from "./mod_color2.vue";
import Mod_usosIncorrectos from "./mod_usosIncorrectos.vue";
import Mod_typography from "./mod_typography.vue";
import Module_aplicacionesTitle from "./module_aplicacionesTitle.vue";
import Mod_aplicacionesNotion from "./mod_aplicacionesNotion.vue";





</script>