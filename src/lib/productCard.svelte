<script lang="ts">
export let product : Product = {id: "", name: "", price: 0, photo: ""};
console.log(product);
</script>


<article class="card">
	<header class="card-header"><h2>{product.name}</h2></header>
    <div class="card-body px-4"><img src={product.photo} alt={product.name} /></div>
	<div class="card-body px-4">Quantity: <strong>5</strong></div>
	<div class="card-body px-4">Price: ${product.price}</div>
    <footer class="card-footer">
        <button class="btn variant-glass-primary">Add</button>
        <button class="btn variant-glass-error">Remove</button>
    </footer>
</article>
