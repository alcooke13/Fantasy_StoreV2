package com.fantasy.store.v2.models;

public class Product {

    private Long id;
    private String productName;
    private String description;
    private Double cost;
    private Double price;

    public Product(String productName, String description, Double cost, Double price) {
        this.productName = productName;
        this.description = description;
        this.cost = cost;
        this.price = price;
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
}

