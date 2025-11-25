<script>
    let { 
        data = {}, // object with row keys containing column objects, e.g. {"row1": {"col1": 10, "col2": 20}, "row2": {"col1": 15, "col2": 25}}
        colors = [], // array of colors for heatmap gradients
        breakpoints = [], // array of numeric values to define color thresholds
        columnLabelInterval = 5 // interval for displaying column labels (every nth column)
    } = $props();

    // Extract columns dynamically from the data
    let columns = $derived(data && Object.keys(data).length > 0 
        ? Object.keys(Object.values(data)[0]).sort()
        : []);

    // Extract rows
    let rows = $derived(Object.keys(data || {}));

    // Function to get color based on value and breakpoints
    function getColor(value) {
        if (value === null || value === undefined) return '#ccc'; // Gray for null values
        
        for (let i = 0; i < breakpoints.length; i++) {
            if (value < breakpoints[i]) {
                return colors[i];
            }
        }
        return colors[colors.length - 1]; // Return last color for values above highest breakpoint
    }
</script>

<div class="heatmap-container">
    <div class="heatmap">
        <!-- Column headers -->
        <div class="heatmap-header">
            <div class="row-label"></div>
            <div class="column-headers">
                {#each columns as column, i}
                    <div class="column-header">
                        {#if i % columnLabelInterval === 0}
                            <span class="column-label">{column}</span>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>

        <!-- Data rows -->
        {#each rows as row}
            <div class="heatmap-row">
                <div class="row-label">{row}</div>
                <div class="column-cells">
                    {#each columns as column}
                        <div 
                            class="cell"
                            style="background-color: {getColor(data[row][column])}"
                            title="{row} {column}: {data[row][column] ?? 'No data'}"
                        ></div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .heatmap-container {
        width: 100%;
        overflow-x: auto;
        margin-top: 20px;
    }

    .heatmap {
        display: flex;
        flex-direction: column;
        min-width: fit-content;
    }

    .heatmap-header {
        display: flex;
        align-items: center;
        margin-bottom: 2px;
    }

    .column-headers {
        display: flex;
        gap: 1.5px;
        flex: 1;
    }

    .column-header {
        aspect-ratio: 1;
        min-width: 16px;
        min-height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .column-label {
        font-size: 10px;
        font-family: OpenSansBold, sans-serif;
        color: var(--brandGray80);
        transform: rotate(-45deg);
        white-space: nowrap;
        transform-origin: center;
    }

    .heatmap-row {
        display: flex;
        align-items: center;
        margin-bottom: 1px;
    }

    .row-label {
        font-size: 12px;
        font-family: OpenSansBold;
        color: var(--brandGray80);
        min-width: 120px;
        max-width: 120px;
        padding-right: 8px;
        text-align: right;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .column-cells {
        display: flex;
        gap: 1px;
        flex: 1;
    }

    .cell {
        aspect-ratio: 1;
        min-width: 16px;
        min-height: 16px;
        border: 1px solid #fff;
        cursor: pointer;
        transition: opacity 0.2s ease;
    }

    .cell:hover {
        opacity: 0.8;
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .row-label {
            font-size: 9px;
            min-width: 80px;
            max-width: 80px;
            padding-right: 4px;
        }

        .column-headers {
            gap: 1.65px;
        }

        .cell, .column-header {
            min-width: 12px;
            min-height: 12px;
        }

        .column-label {
            font-size: 8px;
        }
    }

    @media (max-width: 400px) {
        .row-label {
            font-size: 8px;
            min-width: 60px;
            max-width: 60px;
            padding-right: 2px;
        }

        .column-headers {
            gap: 1.8px;
        }

        .cell, .column-header {
            min-width: 10px;
            min-height: 10px;
        }

        .column-label {
            font-size: 7px;
        }
    }
</style>
