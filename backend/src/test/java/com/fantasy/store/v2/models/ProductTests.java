package com.fantasy.store.v2.models;


import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ProductTests {

    Product swordProduct;
    ProductType weapons;
    ProductType potions;
    Manufacturer blacksmith;
    Manufacturer alchemist;

    @Before
    public void before() {
        blacksmith = new Manufacturer("Blacksmith", "Blacksmith");
        alchemist = new Manufacturer("Wise Old Sage", "Alchemist");
        weapons = new ProductType("Weapons", blacksmith);
        potions = new ProductType("Potions", alchemist);
        swordProduct = new Product("Bronze Sword", "Low quality sword", 250.00, 300.00, weapons);

    }

    @Test
    public void canGetProductWeaponName() {
        assertEquals("Bronze Sword", swordProduct.getProductName());
    }

    @Test
    public void canSetProductWeaponName(){
        swordProduct.setProductName("Silver Sword");
        assertEquals("Silver Sword", swordProduct.getProductName());
    }


    @Test
    public void canGetProductWeaponDescription() {
        assertEquals("Low quality sword", swordProduct.getDescription());
    }

    @Test
    public void canSetProductWeaponDescription(){
        swordProduct.setDescription("Medium quality sword");
        assertEquals("Medium quality sword", swordProduct.getDescription());
    }

    @Test
    public void canGetProductWeaponCost(){
        assertEquals(250.00, swordProduct.getCost(), 0.00);
    }

   @Test
    public void canSetProductWeaponCost(){
        swordProduct.setCost(500.00);
        assertEquals(500.00, swordProduct.getCost(), 0.00);
   }

   @Test
    public void canGetProductWeaponPrice(){
        assertEquals(300.00, swordProduct.getPrice(), 0.00);
   }

   @Test
    public void canSetProductWeaponPrice(){
        swordProduct.setPrice(350.00);
        assertEquals(350.00, swordProduct.getPrice(), 0.00);
    }

    @Test
    public void canGetProductTypeFromProduct(){
        assertEquals(weapons, swordProduct.getProductType());
    }

    @Test
    public void canChangeProductTypeOnProduct(){
        swordProduct.setProductType(potions);
        assertEquals(potions, swordProduct.getProductType());
    }

}
