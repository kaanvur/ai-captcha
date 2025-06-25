import { writable } from 'svelte/store';

export const captchaResponse = writable('');
export const isLoading = writable(false);
