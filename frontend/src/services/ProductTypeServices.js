export function getProductTypes(){
    return fetch("http://localhost:8080/product_types")
        .then((res) => res.json())
    };