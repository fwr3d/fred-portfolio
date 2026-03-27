import * as prismic from "@prismicio/client";

export async function createClient() {
	const endpoint = process.env.PRISMIC_ENDPOINT;
	if (!endpoint) throw new Error("Missing PRISMIC_ENDPOINT");

	const client = prismic.createClient(endpoint, {
		accessToken: process.env.PRISMIC_ACCESS_TOKEN,
	});

	// Force master ref (published content)
	const api = await client.getApi();
	const master = api.refs.find((r) => r.isMasterRef);
	if (master) client.queryContentFromRef(master.ref);

	return client;
}