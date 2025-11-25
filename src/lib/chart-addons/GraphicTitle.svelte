<script>
    let {
        title = "title", 
        subtitle = "subtitle",
    } = $props();
</script>

<div class="container plots-title">
    <h4>
        {@html title}
    </h4>
    <p>
        {@html subtitle}
    </p>
</div>

<style>
    .container {
        background-color: none;
        margin: 0 auto;
        position: relative;
    }

    .plots-title {
        margin: 0 auto;
    }

    .plots-title h4 {
        font-size: 26px;
        line-height: 32px;
    }

    .plots-title p {
        margin-top: -25px;
        margin-bottom: -5px;
        font-family: OpenSansItalic;
        font-size: 17.5px;
        line-height: 23px;
    }
</style>
