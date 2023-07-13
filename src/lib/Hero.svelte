<script lang="ts">
	import { CldImage } from "svelte-cloudinary"
</script>

<section class="w-full h-[105vh] relative">
	<div class="absolute w-full h-full bg-gradient-to-b from-transparent from-[96%] to-slate-800" />
	<CldImage
		class="absolute w-full h-full -z-20"
		layout="fullWidth"
		height="100%"
		objectFit="cover"
		src="tmc-portfolio/assets/hero"
		alt="moose antlers rising up over tall grass"
		quality="100"
		priority={true}
	/>
	<div class="relative z-10 flex flex-col items-start justify-center h-[100vh] con-con">
		<div class="flex flex-col px-5 py-8 sm:px-10 sm:py-16 bg-slate-800/50">
			<h1 class="text-white text-[4rem] md:text-[5rem] leading-[1] mb-10 font-bold">
				Hello,<br /> I'm Troy Ciesco.
			</h1>
			<div class="max-w-xl space-y-8">
				<p class="text-2xl text-white max-w-prose">
					I'm a software engineer that likes using code to solve unusual problems.
				</p>
				<p class="text-2xl text-white max-w-prose">
					I also
					<a href="/gallery" class="text-orange-200 underline">watch wildlife</a> and
					<a
						href="https://medium.com/@troyciesco/the-burrito-method-of-task-estimation-973df97509bb"
						class="text-blue-200 underline">write words</a
					>.
				</p>

				<p class="text-2xl text-white max-w-prose">I'm in New England, mainly CT &amp; MA.</p>
			</div>
		</div>
	</div>
</section>

<!-- <style lang="postcss">
	@import url("https://fonts.googleapis.com/css2?family=Alkatra&family=Bagel+Fat+One&family=Caprasimo&family=Climate+Crisis&family=Edu+TAS+Beginner&family=Neonderthaw&family=Slackside+One&family=Tilt+Neon&display=swap");
	h1 {
		font-family: 'Alkatra', cursive;
		font-family: "Bagel Fat One", cursive;
		font-family: "Caprasimo", cursive;
		font-family: 'Climate Crisis', cursive;
		font-family: 'Edu TAS Beginner', cursive;
		font-family: 'Neonderthaw', cursive;
		font-family: 'Slackside One', cursive;
		font-family: 'Tilt Neon', cursive;
	}
</style> -->
