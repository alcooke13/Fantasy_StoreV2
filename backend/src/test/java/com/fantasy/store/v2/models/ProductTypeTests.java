package com.fantasy.store.v2.models;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ProductTypeTests {

    ProductType product1;
    Manufacturer manufacturer1;
    Manufacturer manufacturer2;

    @Before
    public void before(){
        product1 = new ProductType("Weapons", manufacturer1);
    }

    @Test
    public void canGetProductTypeName(){
        assertEquals("Weapons", product1.getTypeName());
    }

    @Test
    public void canSetProductTypeName(){
        product1.setTypeName("Potions");
        assertEquals("Potions", product1.getTypeName());
    }

    @Test
    public void canGetManufacturerFromProductType(){
        assertEquals(manufacturer1, product1.getManufacturer());
    }

    @Test
    public void canChangeManufacturerOnProductType(){
        product1.setManufacturer(manufacturer2);
        assertEquals(manufacturer2, product1.getManufacturer());
    }


}
