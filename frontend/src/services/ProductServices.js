export function getProducts(){
    return fetch("http://localhost:8080/products")
        .then((res) => res.json())
    };

      