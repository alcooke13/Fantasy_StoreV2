package com.fantasy.store.v2.models;

public class Manufacturer {

    private Long id;
    private String manufacturerName;
    private String speciality;

    public Manufacturer(String manufacturerName, String speciality) {
        this.manufacturerName = manufacturerName;
        this.speciality = speciality;
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
}
