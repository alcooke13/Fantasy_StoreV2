package com.fantasy.store.v2.controllers;

import com.fantasy.store.v2.models.ProductType;
import com.fantasy.store.v2.repositories.ProductTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductTypeController {

    @Autowired
    ProductTypeRepository productTypeRepository;

    @GetMapping(value = "/product_types")
    public ResponseEntity<List<ProductType>> getAllTypes() {
        return new ResponseEntity<>(productTypeRepository.findAll(), HttpStatus.OK);

    }

    @GetMapping(value = "/product_types/{id}")
    public ResponseEntity getType(@PathVariable Long id){
        return new ResponseEntity<>(productTypeRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "product_types")
    public ResponseEntity<ProductType> postType(@RequestBody ProductType productType){
        productTypeRepository.save(productType);
        return new ResponseEntity<>(productType, HttpStatus.CREATED);
    }

}
