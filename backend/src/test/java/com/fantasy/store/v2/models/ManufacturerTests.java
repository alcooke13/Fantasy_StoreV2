package com.fantasy.store.v2.models;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ManufacturerTests {

    Manufacturer manufacturer1;

    @Before
    public void before(){
        manufacturer1 = new Manufacturer("Old Wise Sage", "Alchemist");
    }

    @Test
    public void canGetManufacturerName(){
        assertEquals("Old Wise Sage", manufacturer1.getManufacturerName());
    }

    @Test
    public void canSetManufacturerName(){
        manufacturer1.setManufacturerName("Armorsmith");
        assertEquals("Armorsmith", manufacturer1.getManufacturerName());
    }

}
