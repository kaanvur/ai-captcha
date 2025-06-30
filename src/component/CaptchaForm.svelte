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
			makeHimCry.set(data.response?.makeHimCry);
			captchaResponse.set(data.response?.developer.response);
		} finally {
			isLoading.set(false);
		}
	}
</script>

<div class="form-container">
	<form on:submit|preventDefault={handleSubmit}>
		<h1>Captcha</h1>
		<p>Proove that you are not a robot:</p>
		<input
			type="text"
			bind:value={inputText}
			placeholder="make the developer cry"
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
		margin: 1rem auto;
		max-width: 500px;
		width: 100%;
		padding: 1rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		position: relative;
		text-align: left;
	}
	h1 {
		font-size: 1.5rem;
		font-weight: 700;
	}
	p {
		padding-bottom: 0.5rem;
	}

	input {
		padding: 0.5rem;
		margin-right: 1%;
		width: 73%;
		border: 1px solid thistle;
	}

	button {
		padding: 0.5rem 1rem;
		background: #0070f3;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		min-width: 24%;
	}
</style>
