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
		date: "7/9/23",
		shotDetail: ""
	},
	{
		fileName: "frog-on-log",
		title: "Frog on a Log",
		date: "7/6/23",
		shotDetail: ""
	},
	{
		fileName: "flying-jay",
		title: "Flying Jay",
		date: "7/7/23",
		shotDetail: ""
	},
	{
		fileName: "over-the-mountain",
		title: "Over the Mountain",
		date: "",
		shotDetail: ""
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
		date: "",
		shotDetail: ""
	},
	{
		fileName: "two-friends",
		title: "Two Friends",
		date: "",
		shotDetail: ""
	},
	{
		fileName: "on-a-flower",
		title: "On a Flower",
		date: "",
		shotDetail: ""
	},
	{
		fileName: "mono-goose",
		title: "Mono Goose",
		date: "",
		shotDetail: ""
	},
	{
		fileName: "cairn",
		title: "Cairn",
		date: "",
		shotDetail: ""
	},

	{
		fileName: "red-squirrel-on-log",
		title: "Red Squirrel On Log",
		date: "",
		shotDetail: ""
	},
	{
		fileName: "hanging-on-top",
		title: "Hanging On",
		date: "",
		shotDetail: ""
	},
	{
		fileName: "vibe-moose",
		title: "Soft Moose",
		date: "",
		shotDetail: ""
	},
	{
		fileName: "frog-in-grass",
		title: "Frog in Grass",
		date: "",
		shotDetail: ""
	},
	{
		fileName: "flicker-on-conifer",
		title: "Flicker Atop the Conifer",
		date: "",
		shotDetail: ""
	},
	{
		fileName: "bees-having-breakfast",
		title: "Bumblin'",
		date: "",
		shotDetail: ""
	},
	{
		fileName: "peeper",
		title: "Peeper",
		date: "",
		shotDetail: ""
	},
	{
		fileName: "smooth-flying",
		title: "Aerodynamic",
		date: "",
		shotDetail: ""
	},
	{
		fileName: "the-path",
		title: "The Path",
		date: "",
		shotDetail: ""
	},
	{
		fileName: "lily",
		title: "Lily",
		date: "",
		shotDetail: ""
	},
	{
		fileName: "dragonfly-having-breakfast",
		title: "A Dragonfly's Breakfast",
		date: "",
		shotDetail: ""
	},
	{
		fileName: "heron",
		title: "Heron",
		date: "",
		shotDetail: ""
	},
	{
		fileName: "speck",
		title: "A Speck in the Sky",
		date: "",
		shotDetail: ""
	}
]

export const load = (() => {
	return {
		images
	}
}) satisfies PageLoad
