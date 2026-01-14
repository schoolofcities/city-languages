<script>
	let { children, content } = $props();
	
	let showTooltip = $state(false);
	let tooltipElement = $state(null);
	let triggerElement = $state(null);
	let positionBelow = $state(false);

	function handleClick(e) {
		e.stopPropagation();
		
		// On mobile, only toggle if not already showing
		if (window.innerWidth < 768) {
			if (!showTooltip) {
				showTooltip = true;
				
				// Calculate position on mobile
				if (triggerElement) {
					const rect = triggerElement.getBoundingClientRect();
					const spaceAbove = rect.top;
					const spaceBelow = window.innerHeight - rect.bottom;
					
					// Position below if more space below, or if not enough space above
					positionBelow = spaceBelow > spaceAbove || spaceAbove < 150;
				}
			}
		} else {
			showTooltip = !showTooltip;
		}
	}

	function handleMouseEnter() {
		if (window.innerWidth >= 768) {
			showTooltip = true;
		}
	}

	function handleMouseLeave() {
		if (window.innerWidth >= 768) {
			showTooltip = false;
		}
	}

	function handleClickOutside(e) {
		if (tooltipElement && !tooltipElement.contains(e.target)) {
			showTooltip = false;
		}
	}

	function handleScroll() {
		if (showTooltip) {
			showTooltip = false;
		}
	}

	$effect(() => {
		if (showTooltip) {
			document.addEventListener('click', handleClickOutside);
			window.addEventListener('scroll', handleScroll, true);
			return () => {
				document.removeEventListener('click', handleClickOutside);
				window.removeEventListener('scroll', handleScroll, true);
			};
		}
	});
</script>

<span 
	class="tooltip-wrapper"
	bind:this={tooltipElement}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	onclick={handleClick}
>
	<span class="tooltip-trigger" bind:this={triggerElement}>
		{@render children()}<sup class="tooltip-indicator">?</sup>
	</span>
	
	{#if showTooltip}
		<span class="tooltip-content" class:position-below={positionBelow}>
			{content}
		</span>
	{/if}
</span>

<style>
	.tooltip-wrapper {
		position: relative;
		display: inline;
	}

	.tooltip-trigger {
		border-bottom: 2px dotted #007FA3;
		cursor: help;
		position: relative;
	}

	.tooltip-indicator {
		font-size: 0.65em;
		color: #007FA3;
		font-weight: 600;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.2em;
		height: 1.2em;
		border: 1.5px solid #007FA3;
		border-radius: 50%;
		margin-left: 0.1em;
	}

	.tooltip-content {
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-bottom: 8px;
		padding: 0.75rem 1rem;
		background: white;
		border: 1px solid #007FA3;
		border-radius: 6px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		font-size: 0.85rem;
		line-height: 1.5;
		font-weight: 400;
		width: max-content;
		max-width: 320px;
		z-index: 1000;
		white-space: normal;
		text-align: left;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.tooltip-content::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		border: 6px solid transparent;
		border-top-color: white;
	}

	.tooltip-content::before {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		border: 7px solid transparent;
		border-top-color: #007FA3;
		margin-top: 1px;
	}

	@media (max-width: 768px) {
		.tooltip-trigger {
			cursor: pointer;
		}

		.tooltip-content {
			left: 50%;
			transform: translateX(-50%);
			width: 60vw;
			max-width: 320px;
			margin-bottom: 8px;
		}

		.tooltip-content.position-below {
			bottom: auto;
			top: 100%;
			margin-bottom: 0;
			margin-top: 8px;
		}

		.tooltip-content.position-below::after {
			top: auto;
			bottom: 100%;
			border-top-color: transparent;
			border-bottom-color: white;
		}

		.tooltip-content.position-below::before {
			top: auto;
			bottom: 100%;
			border-top-color: transparent;
			border-bottom-color: #007FA3;
			margin-top: 0;
			margin-bottom: 1px;
		}
	}
</style>
