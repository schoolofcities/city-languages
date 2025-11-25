<script>
	import "$assets/global-styles.css"

	export let videoURL = '';
	export let caption = '';
	export let source = '';
	export let altText = '';
	export let maxWidth = '';
	export let playbackRate = 1.0;
	export let showControls = false; 
	export let autoplay = true;
	export let loop = true; 
	export let muted = true;

	let videoEl;

	// Apply playback rate whenever it changes
	$: if (videoEl) {
		videoEl.playbackRate = playbackRate;
	}

</script>

<div 
	class="video-container" 
	style="max-width: {maxWidth};"
>
	<video 
		bind:this={videoEl}
		src={videoURL}
		playsinline
		controls={showControls}
		{autoplay}
		{loop}
		{muted}
		preload="none"
		aria-label={altText}
	>
		Apologies, your browser doesn’t support embedded videos.
	</video>

	<div class="caption-container">
		<p>
			<span class="caption-text">{@html caption}</span>
			<span class="caption-source">{@html source}</span>
		</p>
	</div>
</div>

<style>
	.video-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		padding-top: 10px;
		margin-bottom: 30px;
		padding-left: 20px;
		padding-right: 20px;
	}

	video {
		width: 100%;
		height: auto;
		max-height: 80dvh;
		min-height: 200px;
		display: block;
		object-fit: cover;
		object-position: center;
	}
</style>
