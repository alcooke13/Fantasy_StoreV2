package com.fantasy.store.v2.components;


import com.fantasy.store.v2.models.Manufacturer;
import com.fantasy.store.v2.models.Product;
import com.fantasy.store.v2.models.ProductType;
import com.fantasy.store.v2.repositories.ManufacturerRepository;
import com.fantasy.store.v2.repositories.ProductRepository;
import com.fantasy.store.v2.repositories.ProductTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test")
//@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ProductTypeRepository productTypeRepository;

    @Autowired
    ManufacturerRepository manufacturerRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args) throws Exception {

        Manufacturer manufacturerBlacksmith = new Manufacturer("Dwarf's Finest", "Blacksmith");
        Manufacturer manufacturerAlchemist = new Manufacturer("The Old Wise Sage", "Alchemist");
        Manufacturer manufacturerArmorist = new Manufacturer("Armor Tailor", "Armorsmith");

        manufacturerRepository.save(manufacturerBlacksmith);
        manufacturerRepository.save(manufacturerAlchemist);
        manufacturerRepository.save(manufacturerArmorist);

        ProductType weapons = new ProductType("Weapons");
        ProductType potions = new ProductType("Potions");
        ProductType armor = new ProductType("Armor");

        productTypeRepository.save(weapons);
        productTypeRepository.save(potions);
        productTypeRepository.save(armor);

        Product productBronzeSword = new Product("Bronze Sword", "Low Quality Sword", 300.00, 350.00, weapons, manufacturerBlacksmith);
        Product productSilverSword = new Product("Silver Sword", "Medium Quality Sword", 400.00, 475.00, weapons, manufacturerBlacksmith);
        Product productHealthPotion = new Product("Health Potion", "Cures wounds", 25.00, 50.00, potions, manufacturerAlchemist);
        Product productLeatherArmor = new Product("Light Armour", "Set of low defense, high manouverability armor", 500.00, 600.00, armor, manufacturerArmorist);

        productRepository.save(productBronzeSword);
        productRepository.save(productSilverSword);
        productRepository.save(productHealthPotion);
        productRepository.save(productLeatherArmor);
    }
}
