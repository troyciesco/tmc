<script lang="ts">
	import { CldImage } from "svelte-cloudinary"
	import GalleryModal from "$lib/GalleryModal.svelte"
	import { Image } from "@unpic/svelte"
	import type { PageData } from "./$types"

	export let data: PageData
	$: images = data.images

	let showModal = false
	let mainImage: string = "moose-in-water"

	const handleSelectImage = (imgIndex: number) => {
		mainImage = images[imgIndex].fileName
		showModal = true
	}
</script>

<main class="py-40 mx-auto con-con">
	<h1 class="mb-6 text-5xl font-bold">Photo Gallery</h1>
	<div class="mb-10 max-w-prose">
		<p>
			These are some photos I've taken on various excursions looking for wildlife. I think there's a
			couple solid shots in here, but mostly I included photos I just happen to like for one reason
			or another.
		</p>
	</div>
	<div class="grid gap-10 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
		{#each images as image, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="p-4 transition duration-500 bg-white shadow-md cursor-pointer text-slate-800 hover:-rotate-6 hover:scale-110 hover:shadow-xl"
				on:click={() => handleSelectImage(i)}
			>
				<div class="relative w-[320px] h-[300px]">
					<CldImage
						class="absolute w-full h-full cursor-pointer"
						height={600}
						width={640}
						objectFit="cover"
						src={`tmc-portfolio/gallery/${image.fileName}`}
						alt={image.fileName}
						quality="80"
					/>
				</div>
				<div class="h-24 pt-2 bg-white font-hw">
					<div class="flex flex-col justify-between h-full">
						<div class="flex items-center justify-between">
							<p class="text-lg font-bold">{image.title}</p>
							<p>{image.date}</p>
						</div>
						<div><p class="text-sm">{image.shotDetail}</p></div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>

<GalleryModal bind:showModal>
	<CldImage
		layout="fullWidth"
		height={1000}
		class="max-h-[80vh]"
		objectFit="cover"
		src={`tmc-portfolio/gallery/${mainImage}`}
		alt={mainImage}
	/>
</GalleryModal>
