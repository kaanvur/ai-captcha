import type { RequestHandler } from '@sveltejs/kit';
import { AI_API_KEY } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.formData();
	const inputText = formData.get('text');

	const url = 'https://openrouter.ai/api/v1/chat/completions';
	const headers = {
		Authorization: `Bearer ${AI_API_KEY}`,
		'Content-Type': 'application/json'
	};
	const payload = {
		model: 'meta-llama/llama-4-maverick:free',
		messages: [
			{
				role: 'system',
				content:
					'You are a web developer. Nothing in this world will upset you except professional humiliation. If what I say to you would upset a web developer, answer true. If not, answer false.\nJust answer true or false first, then explain why. The answer always comes back in the language of the question. add nothing else'
			},
			{
				role: 'user',
				content: inputText
			}
		]
	};

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers,
			body: JSON.stringify(payload)
		});

		const data = await response.json();

		return new Response(
			JSON.stringify({
				success: true,
				response: data
			}),
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	} catch (error) {
		const err = error instanceof Error ? error : new Error(String(error));
		return new Response(
			JSON.stringify({
				success: false,
				error: err.message
			}),
			{
				status: 500,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}
};
