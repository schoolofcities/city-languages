<script>
	/**
	 * Generic year-based percentage bar component
	 * Displays horizontal bars showing percentage values for different years,
	 * with optional highlighting of an active year
	 */
	let { 
		data = [],           // Array of { year, value } objects
		activeYear = null,   // Year to highlight (optional)
		title = "% value",   // Title text to display above bars
		colors = null        // Color scheme array to use for bars
	} = $props();
	
	// Derive colors from scheme: lightest for background, mid-dark for fill
	// Falls back to purple-blue defaults if colors array is missing
	let backgroundColor = "#d4ebf4";
	let fillColor = "#1E3765";
	
	// Layout constants
	const BAR_WIDTH = 200;
	const BAR_HEIGHT = 16;
	const BAR_SPACING = 6;
	const YEAR_WIDTH = 40;
	const VALUE_WIDTH = 48;
	const TITLE_HEIGHT = 16;
	const TITLE_SPACING = 6;
	
	// Derived values
	let totalHeight = $derived(
		TITLE_HEIGHT + TITLE_SPACING + (BAR_HEIGHT + BAR_SPACING) * data.length - BAR_SPACING
	);
	
	let svgWidth = $derived(YEAR_WIDTH + BAR_WIDTH + VALUE_WIDTH);
	let titleCenterX = $derived(svgWidth / 2);
</script>

<div class="year-percent-bar">
	<svg 
		width={svgWidth} 
		height={totalHeight}
		viewBox="0 0 {svgWidth} {totalHeight}"
	>
		<!-- Title -->
		<text 
			x={titleCenterX} 
			y={TITLE_HEIGHT / 2} 
			text-anchor="middle" 
			dominant-baseline="middle"
			class="title-text"
		>
			{title}
		</text>
		
		{#each data as { year, value }, i}
			{@const y = TITLE_HEIGHT + TITLE_SPACING + i * (BAR_HEIGHT + BAR_SPACING)}
			{@const hasValue = value !== null && value !== undefined}
			{@const fillWidth = hasValue ? Math.max(0, Math.min(100, value)) / 100 * BAR_WIDTH : 0}
			{@const isActive = activeYear === year}
			{@const opacity = isActive ? 1 : 0.5}
			
			<g {opacity}>
				<!-- Year label -->
				<text 
					x={YEAR_WIDTH - 5} 
					y={y + BAR_HEIGHT / 2} 
					text-anchor="end" 
					dominant-baseline="middle"
					class="year-text"
				>
					{year}
				</text>
				
				<!-- Background bar -->
				<rect 
					x={YEAR_WIDTH} 
					y={y} 
					width={BAR_WIDTH} 
					height={BAR_HEIGHT}
					fill={hasValue ? backgroundColor : "#e0e0e0"}
					stroke="#999"
					stroke-width="0.5"
				/>
				
				<!-- Filled portion (only if value exists) -->
				{#if hasValue}
					<rect 
						x={YEAR_WIDTH} 
						y={y} 
						width={fillWidth} 
						height={BAR_HEIGHT}
						fill={fillColor}
					/>
				{/if}
				
				<!-- Value label -->
				<text 
					x={YEAR_WIDTH + BAR_WIDTH + 5} 
					y={y + BAR_HEIGHT / 2} 
					text-anchor="start" 
					dominant-baseline="middle"
					class="value-text"
				>
					{hasValue ? `${value.toFixed(1)}%` : "N/A"}
				</text>
			</g>
		{/each}
	</svg>
</div>

<style>
	.year-percent-bar {
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 10;
		user-select: none;
		padding: 0;
	}
	
	.title-text {
		font-size: 12px;
		fill: #000;
		font-weight: 600;
	}
	
	.year-text {
		font-size: 12px;
		fill: #000;
		font-weight: 500;
	}
	
	.value-text {
		font-size: 12px;
		fill: #000;
	}

	@media (max-width: 768px) {
		.year-percent-bar {
			transform-origin: right bottom;
			transform: scale(0.6);
		}
		
		/* Slightly increase text size to compensate for scaling */
		.title-text {
			font-size: 15px;
		}
		
		.year-text {
			font-size: 15px;
		}
		
		.value-text {
			font-size: 15px;
		}
	}
</style>
