<script>

	import { page } from "$app/stores";
	export let data;

</script>

{JSON.stringify($page.params)}
<div>
	<span>
		<img src ={data.thumbnail} alt="" /> <br>
		<b>{data.title}</b>
	</span>
	<div style="padding:5px;">
		{data.description}
	</div>
</div>


