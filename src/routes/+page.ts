import type { PageLoad } from "./$types";

export const load = (() => {
    // you can get this data from ANY SOURCE
    // fetch call here
    // graphql client
    // manually change this object here whenever you want

    return {
        snippets: [
            {
				title: "Nice Code Snippet",
				language: "html",
				code: `<div>This is a div</div>`,
				favorite: false
			},
			{
				title: "Cool code snippet",
				language: "html",
				code: `<div>This is another div</div>`,
				favorite: false
			}
        ]
    }
}) satisfies PageLoad; // PageLoad -> PageData (in our frontend)