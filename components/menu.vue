<template>
    <div class="sidebar_index w-fit border-r-2 border-cine_yelmo_dark_blue max-h-screen sticky top-0 flex-col pb-8">
            <NuxtLink to="/">
                <div class="index_logo mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 120 120">
                        <path fill="#0A0358"
                            d="M29.902 59.804c16.515 0 29.902-13.387 29.902-29.902C59.804 13.388 46.417 0 29.902 0 13.388 0 0 13.388 0 29.902c0 16.515 13.388 29.902 29.902 29.902Z" />
                        <path fill="#0A0358"
                            d="M89.695 59.804c16.515 0 29.902-13.387 29.902-29.902S106.21 0 89.695 0C73.181 0 59.793 13.387 59.793 29.902s13.388 29.902 29.902 29.902Zm-59.793 59.807c16.515 0 29.903-13.388 29.903-29.902 0-16.515-13.388-29.903-29.903-29.903C13.388 59.806 0 73.194 0 89.71c0 16.514 13.388 29.902 29.902 29.902Z" />
                        <path fill="#0A0358"
                            d="M89.695 119.611c16.515 0 29.902-13.388 29.902-29.902 0-16.515-13.387-29.903-29.902-29.903-16.514 0-29.902 13.388-29.902 29.903 0 16.514 13.388 29.902 29.902 29.902Z" />
                    </svg>
                </div>
            </NuxtLink>
            <div class="index_group flex flex-col justify-between h-full pt-4">
                <div class="index_group_title index_group_style" @click="scrollToLogotipo()">LOGOTIPO
                    <div class="index_subitem index_item_style ">marca principal</div>
                    <div class="index_subitem index_item_style ">submarcas </div>
                </div>
                <div class="index_group_title index_group_style" @click="scrollToIsotipo()">ISOTIPO
                    <div class="index_subitem index_item_style ">marca principal</div>
                    <div class="index_subitem index_item_style ">submarcas </div>
                </div>
                <div class="index_group_title index_group_style" @click="scrollToVersiones()">VERSIONES Y REPRODUCCIONES SOBRE FONDOS</div>
                <div class="index_group_title index_group_style"  @click="scrollToConstruccion()">CONSTRUCCIÓN DE LA MARCA
                    <div class="index_subitem index_item_style" >retícula</div>
                    <div class="index_subitem index_item_style">área de seguridad </div>
                    <div class="index_subitem index_item_style">tamaños mínimos </div>

                </div>
                <div class="index_group_title index_group_style"  @click="scrollToPaleta()">PALETA DE COLOR
                    <div class="index_subitem index_item_style">corporativos</div>
                    <div class="index_subitem index_item_style">submarcas</div>
                </div>
                <div class="index_group_title index_group_style"  @click="scrollToTipografia()">TIPOGRAFÍA</div>
                <div class="index_group_title index_group_style"  @click="scrollToUsos()">USOS INCORRECTOS</div>
                <NuxtLink to="/aplicaciones">
                    <div
                        class="index_group_title text-cine_yelmo_white bg-cine_yelmo_dark_blue border-cine_yelmo_dark_blue border-[1px] py-1 rounded-3xl px-5 ">
                        APLICACIONES</div>
                </NuxtLink>
            </div>
        </div>
</template>

<style lang="sass">

.sidebar_index
    @apply flex min-h-screen max-w-[300px] min-w-[350px] bg-white text-cine_yelmo_dark_blue pl-4 pr-6 pt-4
    .index_title
        @apply font-zurich

</style>

<script setup>
const scrollToLogotipo = () => {
    const element = document.querySelector(".logo_scrollto");
    element.scrollIntoView({ behavior: 'smooth' });
}
const scrollToIsotipo = () => {
    const element = document.querySelector(".isotipo_scrollto");
    element.scrollIntoView({ behavior: 'smooth' });
}
const scrollToVersiones = () => {
    const element = document.querySelector(".versiones_scrollto");
    element.scrollIntoView({ behavior: 'smooth' });
}
const scrollToConstruccion = () => {
    const element = document.querySelector(".construcción_scrollto");
    element.scrollIntoView({ behavior: 'smooth' });
}
const scrollToPaleta = () => {
    const element = document.querySelector(".paleta_scrollto");
    element.scrollIntoView({ behavior: 'smooth' });
}
const scrollToTipografia = () => {
    const element = document.querySelector(".tipografia_scrollto");
    element.scrollIntoView({ behavior: 'smooth' });
}
const scrollToUsos = () => {
    const element = document.querySelector(".usos_scrollto");
    element.scrollIntoView({ behavior: 'smooth' });
}


</script>