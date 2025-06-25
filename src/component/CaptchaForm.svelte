<script lang="ts">
	import { captchaResponse, isLoading, makeHimCry } from '$lib';

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
			if (content?.startsWith('true')) {
				makeHimCry.set(true);
				captchaResponse.set(content.slice('true'.length) || data);
			} else if ($captchaResponse?.startsWith('false')) {
				makeHimCry.set(false);
				captchaResponse.set(content.slice('false'.length) || data);
			}
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
			placeholder="Hurt me if you can"
			required
			disabled={$isLoading}
		/>
		<button type="submit" disabled={$isLoading}>
			{#if $isLoading}
				⏳
			{:else if $makeHimCry}
				✔
			{:else}
				Send
			{/if}</button
		>
	</form>
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
