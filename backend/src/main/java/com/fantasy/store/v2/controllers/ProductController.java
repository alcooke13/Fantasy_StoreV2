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

    @PostMapping(value = "products")
    public ResponseEntity<Product> postProduct(@RequestBody Product product){
        productRepository.save(product);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

}
