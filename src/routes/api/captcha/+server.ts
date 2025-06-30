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
		model: 'meta-llama/llama-4-scout:free',
		messages: [
			{
				role: 'system',
				content:
					'You are a web developer. Your task is to determine if a given statement would be professionally humiliating or upsetting to a fellow web developer. Respond in the specified JSON format. The JSON object must have two fields: "makeHimCry" (a boolean, true if the statement is upsetting, false otherwise) and "developer" (an object with a "response" field containing your explanation). The response must always be in the language of the user\'s question.'
			},
			{
				role: 'user',
				content: inputText
			}
		],
		response_format: {
			type: 'json_schema',
			json_schema: {
				name: 'developer_response',
				strict: true,
				schema: {
					type: 'object',
					properties: {
						makeHimCry: {
							type: 'boolean',
							description:
								'True if the statement is upsetting for a web developer, false otherwise.'
						},
						developer: {
							type: 'object',
							properties: {
								response: {
									type: 'string',
									description: "The developer's response to the statement."
								}
							},
							required: ['response']
						}
					},
					required: ['makeHimCry', 'developer']
				}
			}
		}
	};

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers,
			body: JSON.stringify(payload)
		});

		const data = await response.json();
		const modelResponse = JSON.parse(data.choices[0].message.content);

		return new Response(
			JSON.stringify({
				success: true,
				response: modelResponse
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
