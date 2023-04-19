package com.fantasy.store.v2.models;

public class ProductType {

    private Long id;
    private String typeName;

    public ProductType(String typeName) {
        this.typeName = typeName;
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
}
