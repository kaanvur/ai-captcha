<script>
	import { captchaResponse, isLoading, makeHimCry } from '$lib';
</script>

<div class="wrapper make-him-cry-{$makeHimCry} thinking-{$isLoading}">
	{#if $captchaResponse}
		<div class="speech-bubble">
			{$captchaResponse}
		</div>
	{/if}
	<div class="border-circle" id="one"></div>
	<div class="border-circle" id="two"></div>
	<div class="background-circle">
		<div class="triangle-light"></div>
		<div class="body"></div>
		<span class="shirt-text">I</span>
		<span class="shirt-text">
			{#if $makeHimCry}
				💔
			{:else}
				❤️
			{/if}
		</span>
		<span class="shirt-text">C</span>
		<span class="shirt-text">S</span>
		<span class="shirt-text">S</span>
		<div class="triangle-dark"></div>
	</div>
	<div class="head">
		<div class="ear" id="left"></div>
		<div class="ear" id="right"></div>
		<div class="hair-main">
			<div class="sideburn" id="left"></div>
			<div class="sideburn" id="right"></div>
			<div class="hair-top"></div>
		</div>
		<div class="face">
			<div class="hair-bottom"></div>
			<div class="nose"></div>
			<div class="eye-shadow" id="left">
				<div class="eyebrow"></div>
				<div class="eye"></div>
			</div>
			<div class="eye-shadow" id="right">
				<div class="eyebrow"></div>
				<div class="eye"></div>
			</div>
			<div class="mouth"></div>
			<div class="shadow-wrapper">
				<div class="shadow"></div>
			</div>
		</div>
	</div>
	<span class="music-note" id="one">
		{#if $isLoading}
			?
		{:else if $makeHimCry}
			‼
		{:else}
			♫
		{/if}
	</span>
	<span class="music-note" id="two">
		{#if $isLoading}
			…
		{:else if $makeHimCry}
			怒
		{:else}
			♪
		{/if}
	</span>
</div>

<style>
	.wrapper {
		display: grid;
		position: relative;
		overflow-x: clip;
		width: 100dvw;
		justify-content: center;
	}
	.background-circle {
		width: 400px;
		height: 400px;
		border-radius: 100%;
		overflow: hidden;
		margin: 0 auto;
		background: #95b3bf;
		position: relative;
		mask-image: radial-gradient(#bada55, #bada55);
		animation: grow 0.7s 1 ease;
		transform-origin: center;
	}
	.border-circle {
		width: 399px;
		height: 399px;
		border-radius: 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -220px;
		margin-top: -220px;
		border: 10px solid #fcb040;
		transform: scale(0);
		transform-origin: center;
	}
	.border-circle#one {
		animation: border-pulse 1s 3.1s 1 ease;
		animation-fill-mode: forwards;
	}
	.border-circle#two {
		animation: border-pulse 1s 3.3s 1 ease;
		animation-fill-mode: forwards;
	}

	.body {
		width: 285px;
		height: 600px;
		margin: 0 auto;
		background: #222;
		border-radius: 100px;
		position: relative;
		top: 200px;
		animation: body-enter 0.7s 0.2s 1 ease;
		animation-fill-mode: forwards;
		transform: scale(0) translateZ(0);
	}

	.head {
		width: 196px;
		height: 260px;
		border-radius: 50px;
		background: #ffe4be;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -210px;
		margin-left: -98px;
		animation:
			grow 0.7s 0.4s 1 ease,
			music-move 1s 3.3s infinite alternate ease-in-out;
		transform-origin: bottom;
		transform: scale(0) translateZ(0);
		animation-fill-mode: forwards;
	}

	.hair-main {
		width: 220px;
		height: 0px;
		background: #e7ab57;
		border-radius: 54px 54px 0px 0px;
		margin-left: -12px;
		margin-top: -10px;
		animation: hair-anim 0.7s 0.9s 1 ease;
		animation-fill-mode: forwards;
		position: relative;
		z-index: 2;
	}

	.hair-top {
		width: 128px;
		height: 70px;
		opacity: 0;
		border-top-right-radius: 30px;
		background: #e7ab57;
		position: relative;
		top: -17px;
		left: 50%;
		transform: translateX(-64px);
		transform-origin: right;
		animation: hair-top-anim 0.7s 1s 1 ease;
		animation-fill-mode: forwards;
	}

	.hair-bottom {
		width: 54px;
		height: 50px;
		opacity: 0;
		border-bottom-left-radius: 25px;
		background: #e7ab57;
		position: relative;
		top: -20px;
		left: 50%;
		transform: translateX(-27px);
		transform-origin: left;
		animation: hair-bottom-anim 0.7s 1.4s 1 ease;
		animation-fill-mode: forwards;
	}

	.sideburn {
		width: 8px;
		height: 25px;
		background: #e7ab57;
		position: absolute;
		bottom: -25px;
		opacity: 0;
		animation: sideburn-anim 0.7s 0.9s 1 ease;
		animation-fill-mode: forwards;
	}

	.sideburn#left {
		left: 12px;
	}

	.sideburn#right {
		right: 12px;
	}

	.face {
		width: 180px;
		height: 0px;
		border-radius: 48px 48px 0 0;
		background: #ffe4be;
		position: absolute;
		top: 40px;
		left: 8px;
		animation: hair-anim 0.1s 0.8s 1 linear;
		animation-fill-mode: forwards;
		z-index: 3;
	}
	.nose {
		width: 20px;
		height: 45px;
		opacity: 1;
		background: #ffe4be;
		border-top-left-radius: 20px;
		position: absolute;
		left: 50%;
		top: 80px;
		margin-left: -20px;
		animation: shadow-anim 0.7s 3s 1 ease;
		animation-fill-mode: forwards;
		opacity: 0;
		z-index: 5;
	}
	.ear {
		width: 24px;
		height: 35px;
		background: #ffe4be;
		border-radius: 12px;
		position: absolute;
		top: 116px;
		animation: grow 0.7s 1.3s 1 ease;
		animation-fill-mode: forwards;
		transform: scale(0);
	}
	.mouth {
		width: 66px;
		height: 33px;
		border-radius: 0 0 33px 33px;
		background: white;
		position: absolute;
		top: 150px;
		left: 50%;
		margin-left: -33px;
		animation: grow 0.7s 2.6s 1 ease;
		animation-fill-mode: forwards;
		transform: scale(0);
		transition: 500ms all ease-out;
	}
	.ear#left {
		left: -12px;
	}
	.ear#right {
		right: -12px;
	}
	.eye-shadow {
		width: 30px;
		height: 15px;
		border-radius: 0 0 15px 15px;
		background: rgba(149, 36, 0, 0.1);
		position: absolute;
		top: 70px;
		animation: grow 0.7s 2s 1 ease;
		animation-fill-mode: forwards;
		transform: scale(0);
		&::after {
			content: '';
			display: block;
			height: 0;
			width: 24px;
			translate: 20% 0;
			background:
				radial-gradient(
					circle at 100% 50%,
					transparent 20%,
					rgba(255, 255, 255, 1) 21%,
					rgba(255, 255, 255, 1) 34%,
					transparent 35%,
					transparent
				),
				radial-gradient(
						circle at 0% 50%,
						transparent 20%,
						rgba(255, 255, 255, 1) 21%,
						rgba(255, 255, 255, 1) 34%,
						transparent 35%,
						transparent
					)
					0 -20px;
			background-color: transparent;
			background-size: 30px 40px;
			background-position-x: -18px;
			border-radius: 0 0 10px 10px;
			transition: 1s all ease;
		}
	}
	.eye-shadow#left {
		left: 35px;
		z-index: 5;
	}
	.eye-shadow#right {
		right: 35px;
	}
	.eyebrow {
		width: 40px;
		height: 10px;
		background: #e7ab57;
		position: absolute;
		top: -35px;
		left: 50%;
		margin-left: -20px;
		opacity: 0;
		backface-visibility: hidden;
	}
	.eye-shadow#left .eyebrow {
		animation: eyebrow-anim-left 0.7s 2.2s 1 ease;
		animation-fill-mode: forwards;
	}
	.eye-shadow#right .eyebrow {
		animation:
			eyebrow-anim-right 0.7s 2.2s 1 ease,
			eyebrow-raise 2s 6.6s infinite alternate ease-in-out;
		animation-fill-mode: forwards;
	}
	.eye {
		width: 20px;
		height: 28px;
		border-radius: 10px;
		background: #334c68;
		position: absolute;
		top: -18px;
		left: 50%;
		margin-left: -10px;
		animation:
			grow 0.7s 2.2s 1 ease,
			eye-blink 4s 4.4s infinite linear;
		animation-fill-mode: forwards;
		transform: scale(0);
		transform-origin: bottom;
	}
	.shadow-wrapper {
		width: 98px;
		height: 260px;
		position: absolute;
		left: -8px;
		bottom: -84px;
		z-index: 4;
		overflow: hidden;
	}
	.shadow {
		width: 98px;
		height: 260px;
		border-radius: 50px;
		background: rgba(149, 36, 0, 0.1);
		position: absolute;
		z-index: 4;
		opacity: 0;
		animation: shadow-anim 1s 2.8s 1 ease;
		animation-fill-mode: forwards;
	}
	.triangle-light {
		width: 400px;
		height: 600px;
		background: #ffffff;
		opacity: 0.2;
		position: absolute;
		right: -65%;
		animation: triangle-light-anim 1s 2.8s 1 ease;
		animation-fill-mode: forwards;
		transform: translate(200px, 0px);
	}
	.triangle-dark {
		width: 400px;
		height: 600px;
		background: #000000;
		opacity: 0.2;
		position: absolute;
		left: -60%;
		top: 30%;
		animation: triangle-dark-anim 1s 3s 1 ease;
		animation-fill-mode: forwards;
		transform: translate(-200px, 0px);
	}
	.music-note {
		position: absolute;
		font-size: 150px;
		color: #fcb040;
		width: 1px;
		left: 50%;
		opacity: 0;
	}
	.music-note#one {
		margin-left: -250px;
		top: 50%;
		animation: note-anim 2s 3.5s infinite ease;
		animation-fill-mode: forwards;
	}
	.music-note#two {
		margin-left: 150px;
		top: 30%;
		animation: note-anim 2s 4.3s infinite ease;
		animation-fill-mode: forwards;
	}
	.shirt-text {
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		color: white;
		position: relative;
		top: -300px;
		font-size: 50px;
		display: inline-block;
		transform: translate(0px, 100px);
		animation-fill-mode: forwards !important;
	}
	.shirt-text:nth-of-type(1) {
		animation: text-anim 0.7s 3s 1 ease;
	}
	.shirt-text:nth-of-type(2) {
		color: #ef4136;
		animation: text-anim 0.7s 3.1s 1 ease;
	}
	.shirt-text:nth-of-type(3) {
		animation: text-anim 0.7s 3.2s 1 ease;
	}
	.shirt-text:nth-of-type(4) {
		animation: text-anim 0.7s 3.3s 1 ease;
	}
	.shirt-text:nth-of-type(5) {
		animation: text-anim 0.7s 3.4s 1 ease;
	}

	.make-him-cry-true {
		.head {
			animation: crying-head 2s ease 0s infinite alternate forwards;
		}
		.mouth {
			height: 23px;
			border-radius: 10px 10px 0 0;
		}
		.eye-shadow::after {
			height: 200px;
		}
	}
	@keyframes grow {
		0% {
			position: absolute;
			transform: scale(0) translateZ(0);
		}
		60% {
			transform: scale(1.15) translateZ(0);
		}
		80% {
			transform: scale(0.95) translateZ(0);
		}
		100% {
			transform: scale(1) translateZ(0);
		}
	}

	@keyframes body-enter {
		0% {
			transform: translateY(200px) translateZ(0);
		}
		60% {
			transform: translateY(-20px) translateZ(0);
		}
		80% {
			transform: translateY(30px) translateZ(0);
		}
		100% {
			transform: translateY(0px) translateZ(0);
		}
	}

	@keyframes hair-anim {
		0% {
			height: 0px;
			transform: translateY(137px) translateZ(0);
		}
		100% {
			height: 137px;
			transform: translateY(0px) translateZ(0);
		}
	}

	@keyframes sideburn-anim {
		0% {
			opacity: 0;
			transform: translateY(-25px) translateZ(0);
		}
		100% {
			opacity: 1;
			transform: translateY(0px) translateZ(0);
		}
	}

	@keyframes hair-top-anim {
		0% {
			opacity: 0;
			transform: translate(-64px, 30px) translateZ(0);
		}
		60% {
			opacity: 1;
			transform: rotate(0deg) translate(-64px, 30px) translateZ(0);
		}
		80% {
			opacity: 1;
			transform: rotate(10deg) translate(-64px, -5px) translateZ(0);
		}
		100% {
			opacity: 1;
			transform: rotate(0deg) translate(-64px, 0px) translateZ(0);
		}
	}

	@keyframes hair-bottom-anim {
		0% {
			opacity: 0;
			transform: translate(-27px, -40px) translateZ(0);
		}
		60% {
			opacity: 1;
			transform: rotate(0deg) translate(-27px, -40px) translateZ(0);
		}
		80% {
			opacity: 1;
			transform: rotate(10deg) translate(-27px, 5px) translateZ(0);
		}
		100% {
			opacity: 1;
			transform: rotate(0deg) translate(-27px, 0px) translateZ(0);
		}
	}
	@keyframes music-move {
		0% {
			transform: rotate(0deg) translateZ(0);
		}
		33% {
			transform: rotate(-5deg) translateZ(0);
		}
		66% {
			transform: rotate(5deg) translateZ(0);
		}
		100% {
			transform: rotate(0deg) translateZ(0);
		}
	}

	@keyframes eyebrow-anim-right {
		0% {
			opacity: 0;
			transform: translateY(-25px) translateZ(0);
		}
		70% {
			opacity: 1;
			transform: translateY(5px) translateZ(0);
		}
		100% {
			opacity: 1;
			transform: rotate(9deg) translateY(0px) translateZ(0);
		}
	}

	@keyframes eyebrow-raise {
		0% {
			top: -35px;
		}
		80% {
			top: -35px;
		}
		100% {
			top: -45px;
		}
	}

	@keyframes eyebrow-anim-left {
		0% {
			opacity: 0;
			transform: translateY(-25px) translateZ(0);
		}
		70% {
			opacity: 1;
			transform: translateY(5px);
		}
		100% {
			opacity: 1;
			transform: translateY(0px) translateZ(0);
		}
	}
	@keyframes border-pulse {
		0% {
			transform: scale(0) translateZ(0);
			border-width: 20px;
		}
		40% {
			transform: scale(1) translateZ(0);
			border-width: 20px;
			margin-left: -220px;
			margin-top: -220px;
		}
		100% {
			transform: scale(1.5) translateZ(0);
			border-width: 0px;
			border-style: double;
			margin-left: -200px;
			margin-top: -200px;
		}
	}
	@keyframes shadow-anim {
		0% {
			opacity: 0;
			transform: translate(98px, 0px) translateZ(0);
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
			transform: translate(0px, 0px) translateZ(0);
		}
	}

	@keyframes triangle-light-anim {
		0% {
			transform: translate(200px, 0px) translateZ(0);
		}
		100% {
			transform: rotate(45deg) translate(0px, 0px) translateZ(0);
		}
	}
	@keyframes triangle-dark-anim {
		0% {
			transform: translate(-200px, 0px) translateZ(0);
		}
		100% {
			transform: rotate(-45deg) translate(0px, 0px) translateZ(0);
		}
	}

	@keyframes note-anim {
		0% {
			opacity: 0;
			transform: translate(0px, 50px) translateZ(0);
		}
		30% {
			transform: rotate(12deg) translate(-30px, 0px) translateZ(0);
		}
		45% {
			opacity: 1;
		}
		60% {
			transform: rotate(-12deg) translate(30px, -100px) translateZ(0);
		}
		100% {
			opacity: 0;
			transform: rotate(0deg) translate(0px, -200px) translateZ(0);
		}
	}

	@keyframes text-anim {
		0% {
			transform: translate(0px, 100px) translateZ(0);
		}
		60% {
			transform: translate(0px, -20px) translateZ(0);
		}
		80% {
			transform: translate(0px, 15px) translateZ(0);
		}
		100% {
			transform: translate(0px, 0px) translateZ(0);
		}
	}

	@keyframes eye-blink {
		0% {
			transform: scaleY(1) translateY(0px) translateZ(0);
		}
		45% {
			transform: scaleY(1) translateY(0px) translateZ(0);
		}
		50% {
			transform: scaleY(0.1) translateZ(0);
		}
		55% {
			transform: scaleY(1) translateY(0px);
		}
		100% {
			transform: scaleY(1) translateY(0px) translateZ(0);
		}
	}
	.speech-bubble {
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		background: white;
		padding: 10px 15px;
		border-radius: 20px;
		font-size: 16px;
		color: #333;
		max-width: 300px;
		text-align: center;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		z-index: 10;
		animation: fadeIn 0.3s ease;
		overflow: auto;
		max-height: 165px;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translate(-50%, 10px);
		}
		to {
			opacity: 1;
			transform: translate(-50%, 0);
		}
	}

	@keyframes crying-head {
		0% {
			animation-timing-function: ease-in;
			opacity: 1;
			transform: translateY(45px);
		}

		24% {
			opacity: 1;
		}

		40% {
			animation-timing-function: ease-in;
			transform: translateY(24px);
		}

		65% {
			animation-timing-function: ease-in;
			transform: translateY(12px);
		}

		82% {
			animation-timing-function: ease-in;
			transform: translateY(6px);
		}

		93% {
			animation-timing-function: ease-in;
			transform: translateY(4px);
		}

		25%,
		55%,
		75%,
		87% {
			animation-timing-function: ease-out;
			transform: translateY(0px);
		}

		100% {
			animation-timing-function: ease-out;
			opacity: 1;
			transform: translateY(0px);
		}
	}
</style>
