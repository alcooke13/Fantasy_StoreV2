package com.fantasy.store.v2.controllers;

import com.fantasy.store.v2.models.Manufacturer;
import com.fantasy.store.v2.repositories.ManufacturerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ManufacturerController {

    @Autowired
    ManufacturerRepository manufacturerRepository;

    @GetMapping(value = "/manufacturers")
    public ResponseEntity<List<Manufacturer>> getAllManufacturers() {
        return new ResponseEntity<>(manufacturerRepository.findAll(), HttpStatus.OK);

    }

    @GetMapping(value = "/manufacturers/{id}")
    public ResponseEntity getManufacturer(@PathVariable Long id){
        return new ResponseEntity<>(manufacturerRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "manufacturers")
    public ResponseEntity<Manufacturer> postManufacturer(@RequestBody Manufacturer manufacturer){
        manufacturerRepository.save(manufacturer);
        return new ResponseEntity<>(manufacturer, HttpStatus.CREATED);
    }

}
