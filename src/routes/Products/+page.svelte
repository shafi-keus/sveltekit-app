<script>
	export let data;
    console.log(data);
</script>

<h2>{data.title}</h2>
<ul>
	{#each data.products.products as product}
		<li>
			<img src={product.thumbnail} alt={product.title} />
			<h3><a href="/product/{product.id}">{product.title}</a></h3>
			<p>{product.description}</p>
		</li>
	{/each}
</ul>

<style>
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 30px;
	}
	img {
		width: 50%;

	}
    li{
         background-color: rgb((rgba(206, 211, 181, 0.5)));
    }
</style>
