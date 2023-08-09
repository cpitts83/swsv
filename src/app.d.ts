// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare class Product {
	id: string; //stripe id
	name: string; //stripe name
	price: number;//stripe price
	photo: string; //stripe photo
	sizes: string[]; //stripe sizes
}

declare class CartItem {
	id: string; //stripe id
	quantity: number; //stripe quantity
}