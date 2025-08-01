// generic-interface-example.ts



// Anukondi, manam oka API nunchi data teesukuntunnam. Aa API response eppudu oke laaga untundi, kaani lopala unna data matrame maruthu untundi.

// User data kosam interface:

// TypeScript

// interface UserAPIResponse {
//   success: boolean;
//   data: { id: number; name: string; }; // Ikkada data oka User object
// }
// Product data kosam interface:

// TypeScript

// interface ProductAPIResponse {
//   success: boolean;
//   data: { productId: string; price: number; }[]; // Ikkada data Product objects unna array
// }
// Malli ade samasya. Rendu interfaces lo success property common ga undi, kaani data property type maradam valla, manam rendu separate interfaces rayalsi vachindi.





// 1. Generic Interface
// Ikkada <T> anedi "data" property yokka type kosam oka placeholder.
interface APIResponse<T> {
  success: boolean;
  data: T; // 'data' yokka type T anamaata.
  error?: string; // Optional error message
}

// Ippudu ee okate interface ni anni rakala API responses ki vaadochu.

// --- User data tho vaadadam ---
interface User {
  id: number;
  name: string;
}

// Ikkada manam T ki badulu 'User' type ni isthunnam.
const userResponse: APIResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Sridhar"
  }
};
console.log("User data:", userResponse.data.name);


// --- Product data tho vaadadam ---
interface Product {
  productId: string;
  price: number;
}

// Ikkada manam T ki badulu 'Product[]' (array of products) type ni isthunnam.
const productResponse: APIResponse<Product[]> = {
  success: true,
  data: [
    { productId: "prod101", price: 1500 },
    { productId: "prod102", price: 2500 }
  ]
};
console.log("First product price:", productResponse.data[0].price);