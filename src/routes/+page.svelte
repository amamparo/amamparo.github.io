<script>
	import { socials } from '$lib/socials.js';
	import { 
		Linkedin, 
		Github, 
		Instagram, 
		Mail
	} from 'lucide-svelte';
	import { Icon } from 'svelte-icons-pack';
	import { SiBluesky } from 'svelte-icons-pack/si';
	import { SiSoundcloud } from 'svelte-icons-pack/si';
	import { SiLastdotfm } from 'svelte-icons-pack/si';
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	const iconComponents = {
		linkedin: { component: Linkedin, isLucide: true },
		github: { component: Github, isLucide: true },
		bluesky: { component: SiBluesky, isLucide: false },
		instagram: { component: Instagram, isLucide: true },
		soundcloud: { component: SiSoundcloud, isLucide: false },
		lastfm: { component: SiLastdotfm, isLucide: false },
		email: { component: Mail, isLucide: true }
	};
	
	// Calculate positions for icons in a circle
	function getIconPosition(index, total) {
		const angle = (index * 360 / total) - 90; // Position around circle
		const radius = 140; // Fixed radius
		const radian = angle * Math.PI / 180;
		const x = Math.cos(radian) * radius;
		const y = Math.sin(radian) * radius;
		return { x, y };
	}
	
	onMount(() => {
		// Trigger animation after a short delay
		setTimeout(() => {
			mounted = true;
		}, 100);
	});
</script>

<svelte:head>
	<title>Aaron Mamparo</title>
	<meta name="description" content="Aaron Mamparo - Digital Business Card" />
</svelte:head>

<div class="min-h-screen bg-dark-bg flex items-center justify-center px-4 py-8">
	<div class="max-w-md w-full">
		<div class="flex justify-center items-center">
			<!-- Container for headshot and orbiting icons -->
			<div class="relative">
				<!-- Profile Image with glow effect -->
				<div class="relative inline-block">
					<div class="absolute inset-0 rounded-full bg-gradient-to-r from-neon-violet to-neon-cyan opacity-50 blur-2xl animate-pulse-slow"></div>
					<div class="relative w-40 h-40 mx-auto rounded-full overflow-hidden ring-2 ring-neon-violet/30">
						<img 
							src="/headshot_dark.jpg"
							alt="Aaron Mamparo"
							class="w-full h-full object-cover"
						/>
					</div>
				</div>
				
				<!-- Social Icons carousel container -->
				<div class="absolute inset-0 flex items-center justify-center">
					<div class="absolute inset-0 {mounted ? 'carousel-stop' : 'carousel-spin'}">
						{#each socials as social, index (social.name)}
							{@const pos = getIconPosition(index, socials.length)}
							<a
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								title={social.name}
								style="transform: translate({pos.x}px, {pos.y}px); transition-delay: {index * 75}ms; opacity: {mounted ? 1 : 0}"
								class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full
								       bg-transparent text-gray-400
								       hover:text-neon-cyan
								       border border-gray-800 hover:border-neon-cyan/50
								       hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]
								       flex items-center justify-center
								       transition-opacity duration-700 ease-out
								       {mounted ? '' : 'pointer-events-none'}"
							>
								{#if iconComponents[social.icon].isLucide}
									<svelte:component 
										this={iconComponents[social.icon].component} 
										class="w-7 h-7 transition-transform duration-300 hover:scale-110" 
									/>
								{:else}
									<div class="w-7 h-7 flex items-center justify-center transition-transform duration-300 hover:scale-110">
										<Icon src={iconComponents[social.icon].component} size="28" />
									</div>
								{/if}
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
		
		<!-- Background gradient orbs -->
		<div class="fixed inset-0 overflow-hidden pointer-events-none -z-10">
			<div class="absolute -top-40 -left-40 w-80 h-80 bg-neon-violet/10 rounded-full blur-3xl"></div>
			<div class="absolute -bottom-40 -right-40 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl"></div>
		</div>
	</div>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
	
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #0a0a0f;
	}
	
	:global(.carousel-spin) {
		animation: carousel-rotate 2s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
	}
	
	:global(.carousel-stop) {
		transform: rotate(0deg);
	}
	
	@keyframes carousel-rotate {
		from {
			transform: rotate(360deg);
		}
		to {
			transform: rotate(0deg);
		}
	}
</style>