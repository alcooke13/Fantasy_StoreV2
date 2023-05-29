package com.fantasy.store.v2.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String productName;
    @Column(name = "description", columnDefinition = "text")
    private String description;
    @Column(name = "cost")
    private Double cost;
    @Column(name = "price")
    private Double price;

    @JsonIgnoreProperties({"products"})
    @ManyToOne
    @JoinColumn(name = "product_type_id", nullable = false)
    private ProductType productType;

    @JsonIgnoreProperties({"products"})
    @ManyToOne
    @JoinColumn(name = "manufacturer_id", nullable = false)
    private Manufacturer manufacturer;

    public Product(String productName, String description, Double cost, Double price, ProductType productType, Manufacturer manufacturer) {
        this.productName = productName.toLowerCase();
        this.description = description;
        this.cost = cost;
        this.price = price;
        this.productType = productType;
        this.manufacturer = manufacturer;
    }

    public Product() {
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductName() {
        return this.productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getCost() {
        return this.cost;
    }

    public void setCost(Double cost) {
        this.cost = cost;
    }

    public Double getPrice() {
        return this.price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public ProductType getProductType(){
        return this.productType;
    }

    public void setProductType(ProductType differentProductType){
        this.productType = differentProductType;
    }

    public Manufacturer getManufacturer() {
        return this.manufacturer;
    }

    public void setManufacturer(Manufacturer manufacturer) {
        this.manufacturer = manufacturer;
    }
}