<script lang="ts">
	import Footer from "$lib/Footer.svelte"
	import Header from "$lib/Header.svelte"
	import "../styles/global.scss"
</script>

<svelte:head><title>Troy Ciesco</title></svelte:head>
<Header />
<slot />
<Footer />
