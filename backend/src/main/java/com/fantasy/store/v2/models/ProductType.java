package com.fantasy.store.v2.models;

public class ProductType {

    private Long id;
    private String typeName;
    private Manufacturer manufacturer;

    public ProductType(String typeName, Manufacturer manufacturer) {
        this.typeName = typeName;
        this.manufacturer = manufacturer;
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
}
