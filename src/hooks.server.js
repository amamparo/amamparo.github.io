/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// Suppress Chrome DevTools and other well-known requests in dev
	if (event.url.pathname.startsWith('/.well-known/')) {
		return new Response(null, { status: 204 });
	}
	
	const response = await resolve(event);
	return response;
}