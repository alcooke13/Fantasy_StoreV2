package com.fantasy.store.v2.controllers;

import com.fantasy.store.v2.models.Product;
import com.fantasy.store.v2.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @GetMapping(value = "/products")
    public ResponseEntity<List<Product>> getAllProducts() {
        return new ResponseEntity<>(productRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/products/{id}")
    public ResponseEntity getProduct(@PathVariable Long id){
        return new ResponseEntity<>(productRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/products")
    public ResponseEntity<Product> postProduct(@RequestBody Product product){
        productRepository.save(product);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }
    @PutMapping(value = "/products/{id}/update")
    public ResponseEntity<Product> updateSelectedProduct(
            @PathVariable Long id,
            @RequestBody Product product
        ){
        Product updateProduct = productRepository.findById(id).get();
            updateProduct.setProductName(product.getProductName());
            updateProduct.setDescription(product.getDescription());
            updateProduct.setCost(product.getCost());
            updateProduct.setPrice(product.getPrice());
            updateProduct.setProductType(product.getProductType());
            updateProduct.getProductType().setManufacturer(product.getProductType().getManufacturer());

        productRepository.save(updateProduct);
        return new ResponseEntity<>(updateProduct, HttpStatus.OK);

    }
   @DeleteMapping(value = "/products/{id}")
    public ResponseEntity<Long> deleteProduct(@PathVariable Long id){
        productRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
   }

}
