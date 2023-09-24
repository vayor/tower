<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <div class="grow bg-teal-800">2</div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: "Home",
    components: { Header, Footer }
}
</script>