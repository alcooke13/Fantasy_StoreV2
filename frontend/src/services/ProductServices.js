export function getProducts(){
    return fetch("http://localhost:8080/products")
        .then((res) => res.json())
    };

export function postNewProduct(payload){
    return fetch("http://localhost:8080/products", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json());
}   
      