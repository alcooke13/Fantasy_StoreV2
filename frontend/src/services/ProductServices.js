export function getProducts(){
    return fetch("http://localhost:8080/products")
        .then((res) => res.json());
    };


export function postNewProduct(payload){
    return fetch("http://localhost:8080/products", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .catch(error => console.error(error));
};

export function deleteProduct(id){
    return fetch("http://localhost:8080/products/" + id, {
        method: 'DELETE'
    });
};

export function editProduct(payload, id){
    console.log(payload);
    return fetch("http://localhost:8080/products/" + id + "/update", {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    });
};