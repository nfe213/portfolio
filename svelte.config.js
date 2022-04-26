import vercel from '@sveltejs/adapter-vercel';

export default {
	kit: {
		// default options are shown
		adapter: vercel({
			// if true, will deploy the app using edge functions
			// (https://vercel.com/docs/concepts/functions/edge-functions)
			// rather than serverless functions
			edge: false,

			// an array of dependencies that esbuild should treat
			// as external when bundling functions
			external: [],

			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app
			split: false
		})
	}
};

// GitHub Release
// import adapter from "@sveltejs/adapter-static"; 
// // was "@sveltejs/adapter-auto"

// const dev = "production" === "development";

// /** @type {import(""@sveltejs/kit").Config} */
// const config = {
//     kit: {
//         prerender: {
//             default: true
//         },
//         adapter: adapter({
//             pages: "docs",
//             assets: "docs"
//         }),
//         paths: {
//             // change below to your repo name
//             base: dev ? "/portfolio" : "/portfolio",
//         }
//     }
// };

// export default config;
