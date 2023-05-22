package com.fantasy.store.v2.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "manufacturers")
public class Manufacturer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String manufacturerName;
    @Column(name = "specialty")
    private String speciality;

    @OneToMany(mappedBy = "manufacturer")
    @JsonManagedReference
    private List<Product> products;

    public Manufacturer(String manufacturerName, String speciality) {
        this.manufacturerName = manufacturerName;
        this.speciality = speciality;
        this.products = new ArrayList<Product>();
    }

    public Manufacturer() {

    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getManufacturerName() {
        return this.manufacturerName;
    }

    public void setManufacturerName(String manufacturerName) {
        this.manufacturerName = manufacturerName;
    }


    public String getSpeciality() {
        return this.speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public List<Product> getProducts() {
        return this.products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public void addProduct(Product newProduct){
        this.products.add(newProduct);
    }
}