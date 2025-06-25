<script lang="ts">
	import { captchaResponse, isLoading } from '$lib';

	let inputText = '';

	async function handleSubmit() {
		isLoading.set(true);
		const formData = new FormData();
		formData.append('text', inputText);

		try {
			const res = await fetch('/api/captcha', {
				method: 'POST',
				body: formData
			});

			const data = await res.json();
			const content = data.response?.choices?.[0]?.message?.content;
			captchaResponse.set(content || data);
		} finally {
			isLoading.set(false);
		}
	}
</script>

<div class="form-container">
	<form on:submit|preventDefault={handleSubmit}>
		<input
			type="text"
			bind:value={inputText}
			placeholder="Captcha text girin"
			required
			disabled={$isLoading}
		/>
		<button type="submit" disabled={$isLoading}>Gönder</button>
	</form>

	{#if $isLoading}
		<p>Yükleniyor...</p>
	{/if}
</div>

<style>
	.form-container {
		margin: 2rem auto;
		max-width: 500px;
		width: 100%;
		padding: 1rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		position: relative;
	}

	input {
		padding: 0.5rem;
		margin-right: 0.5rem;
		width: 70%;
	}

	button {
		padding: 0.5rem 1rem;
		background: #0070f3;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
</style>
