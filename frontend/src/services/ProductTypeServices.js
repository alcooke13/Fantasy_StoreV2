export function getWeapons(){
    return fetch("http://localhost:8080/product_types/1")
        .then((res) => res.json())
    };

export function getPotions(){
    return fetch("http://localhost:8080/product_types/2")
        .then((res) => res.json())
    };

export function getArmors(){
    return fetch("http://localhost:8080/product_types/3")
        .then((res) => res.json())
        };