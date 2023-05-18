package com.fantasy.store.v2.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "product_types")
public class ProductType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "name")
    private String typeName;
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "manufacturer_id")
    private Manufacturer manufacturer;

    @OneToMany(mappedBy = "productType")
    @JsonManagedReference
    private List<Product> products;

    public ProductType(String typeName, Manufacturer manufacturer) {
        this.typeName = typeName;
        this.manufacturer = manufacturer;
        this.products = new ArrayList<>();
    }

    public ProductType() {

    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTypeName() {
        return this.typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public Manufacturer getManufacturer() {
        return this.manufacturer;
    }

    public void setManufacturer(Manufacturer manufacturer) {
        this.manufacturer = manufacturer;
    }

    public List<Product> getProducts(){
        return this.products;
    }

    public void addProduct(Product productToAdd){
        this.products.add(productToAdd);
    }

}