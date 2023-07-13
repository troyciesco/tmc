import type { PageLoad } from "./$types"

const images = [
	// { fileName: "wings-on-fire" },
	// { fileName: "red-squirrel-with-cone" },

	{
		fileName: "moose-in-water",
		title: "Moose on the Loose",
		date: "7/7/23",
		shotDetail: "Canon EOS R7 1/1250 F11 ISO2500"
	},
	{
		fileName: "my-pal-jay",
		title: "My Pal Jay",
		date: "7/7/23",
		shotDetail: "Canon EOS R7 1/250 F11 ISO6400"
	},
	{
		fileName: "hungry-bunny",
		title: "Hungry Bunny",
		date: "10/2/22",
		shotDetail: "Nikon D3500 1/320 F8 ISO800"
	},
	{
		fileName: "red-squirrel-with-cone",
		title: "Red Squirrel with Cone",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "frog-on-log",
		title: "Frog on a Log",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "flying-jay",
		title: "Flying Jay",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "over-the-mountain",
		title: "Over the Mountain",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "red-squirrel-in-tree",
		title: "Red Squirrel in Tree",
		date: "7/9/23",
		shotDetail: "Canon EOS R7 1/1250 F11 ISO2500"
	},
	{
		fileName: "u-lookin-at-me",
		title: "U lookin' @ me?",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "two-friends",
		title: "Two Friends",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "on-a-flower",
		title: "On a Flower",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "mono-goose",
		title: "Mono Goose",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "cairn",
		title: "Cairn",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},

	{
		fileName: "red-squirrel-on-log",
		title: "Red Squirrel On Log",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "hanging-on-top",
		title: "Hanging On",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "vibe-moose",
		title: "Soft Moose",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "frog-in-grass",
		title: "Frog in Grass",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "flicker-on-conifer",
		title: "Flicker Atop the Conifer",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "bees-having-breakfast",
		title: "Bumblin'",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "peeper",
		title: "Peeper",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "smooth-flying",
		title: "Aerodynamic",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "the-path",
		title: "The Path",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "lily",
		title: "Lily",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "dragonfly-having-breakfast",
		title: "A Dragonfly's Breakfast",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "heron",
		title: "Heron",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	},
	{
		fileName: "speck",
		title: "A Speck in the Sky",
		date: "7/7/23",
		shotDetail: "Nikon D3500 1/2500 F6.3 ISO3200"
	}
]

export const load = (() => {
	return {
		images
	}
}) satisfies PageLoad
