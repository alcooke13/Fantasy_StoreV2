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
@Component
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
        Manufacturer manufacturerArmorist = new Manufacturer("Good Guy Orc", "Armorsmith");

        manufacturerRepository.save(manufacturerBlacksmith);
        manufacturerRepository.save(manufacturerAlchemist);
        manufacturerRepository.save(manufacturerArmorist);

        ProductType weapons = new ProductType("Weapons");
        ProductType potions = new ProductType("Potions");
        ProductType armor = new ProductType("Armor");

        productTypeRepository.save(weapons);
        productTypeRepository.save(potions);
        productTypeRepository.save(armor);

        Product productBronzeSword1 = new Product("Bronze Sword", "The Humble Bronze Cutter, a modest blade worn by common adventurers, bears the marks of countless battles. Its unadorned hilt provides a simple grip, and its dull edge serves as a reminder of its humble origins.", 250.00, 260.00, weapons, manufacturerBlacksmith);
        Product productBronzeSword2 = new Product("Bronze Sword", "A reliable companion for budget-conscious novices. Its unpretentious craftsmanship ensures affordability, while its lightweight design and decent edge grant new adventurers a practical weapon without breaking their coin purses.", 275.00, 295.00, weapons, manufacturerBlacksmith);
        Product productBronzeSword3 = new Product("Bronze Sword", "A reliable companion for budget-conscious novices. Its unpretentious craftsmanship ensures affordability, while its lightweight design and decent edge grant new adventurers a practical weapon without breaking their coin purses.", 275.00, 295.00, weapons, manufacturerBlacksmith);

        productRepository.save(productBronzeSword1);
        productRepository.save(productBronzeSword2);
        productRepository.save(productBronzeSword3);

        Product productSilverSword1 = new Product("Silver Sword", "A dependable sword crafted for the seasoned but pragmatic adventurer. Its balanced design strikes a harmonious blend of weight and maneuverability, while its tempered edge holds steady against formidable foes, making it a reliable choice for the average warrior.", 400.00, 475.00, weapons, manufacturerBlacksmith);
        Product productSilverSword2 = new Product("Silver Sword", "A dependable sword crafted for the seasoned but pragmatic adventurer. Its balanced design strikes a harmonious blend of weight and maneuverability, while its tempered edge holds steady against formidable foes, making it a reliable choice for the average warrior.", 400.00, 475.00, weapons, manufacturerBlacksmith);
        Product productSilverSword3 = new Product("Silver Sword", "A dependable sword crafted for the seasoned but pragmatic adventurer. Its balanced design strikes a harmonious blend of weight and maneuverability, while its tempered edge holds steady against formidable foes, making it a reliable choice for the average warrior.", 400.00, 475.00, weapons, manufacturerBlacksmith);
        Product productSilverSword4 = new Product("Silver Sword", "A dependable sword crafted for the seasoned but pragmatic adventurer. Its balanced design strikes a harmonious blend of weight and maneuverability, while its tempered edge holds steady against formidable foes, making it a reliable choice for the average warrior.", 400.00, 475.00, weapons, manufacturerBlacksmith);
        Product productSilverSword5 = new Product("Silver Sword", "A dependable sword crafted for the seasoned but pragmatic adventurer. Its balanced design strikes a harmonious blend of weight and maneuverability, while its tempered edge holds steady against formidable foes, making it a reliable choice for the average warrior.", 400.00, 475.00, weapons, manufacturerBlacksmith);

        productRepository.save(productSilverSword1);
        productRepository.save(productSilverSword2);
        productRepository.save(productSilverSword3);
        productRepository.save(productSilverSword4);
        productRepository.save(productSilverSword5);

        Product productGoldSword1 = new Product("Gold Sword", "Its flawless construction melds celestial alloys, radiating an ethereal glow. Its razor-sharp edge dances through the air, effortlessly sundering the strongest of defenses, marking it as the ultimate weapon for the most skilled and revered adventurers.", 850.00, 1000.00, weapons, manufacturerBlacksmith);
        Product productGoldSword2 = new Product("Gold Sword", "Its flawless construction melds celestial alloys, radiating an ethereal glow. Its razor-sharp edge dances through the air, effortlessly sundering the strongest of defenses, marking it as the ultimate weapon for the most skilled and revered adventurers.", 850.00, 1000.00, weapons, manufacturerBlacksmith);
        Product productGoldSword3 = new Product("Gold Sword", "A peerless masterpiece forged by the world's finest dwarven blacksmiths. Its flawless blade, infused with ethereal light, effortlessly slices through any defense. Wielded by only the most skilled, it embodies perfection and grants its bearer unparalleled dominance on the battlefield.", 1000.00, 1500.00, weapons, manufacturerBlacksmith);

        productRepository.save(productGoldSword1);
        productRepository.save(productGoldSword2);
        productRepository.save(productGoldSword3);


        Product productHealthPotion1 = new Product("Health Potion", "A curative potion coveted by healers far and wide. With a subtle hint of sweet berries, it mends wounds with gentle efficacy, replenishing vitality and restoring the weary, providing a soothing respite in times of peril.", 35.00, 50.00, potions, manufacturerAlchemist);
        Product productHealthPotion2 = new Product("Health Potion", "A curative potion coveted by healers far and wide. With a subtle hint of sweet berries, it mends wounds with gentle efficacy, replenishing vitality and restoring the weary, providing a soothing respite in times of peril.", 35.00, 50.00, potions, manufacturerAlchemist);
        Product productHealthPotion3 = new Product("Health Potion", "A curative potion coveted by healers far and wide. With a subtle hint of sweet berries, it mends wounds with gentle efficacy, replenishing vitality and restoring the weary, providing a soothing respite in times of peril.", 35.00, 50.00, potions, manufacturerAlchemist);
        Product productHealthPotion4 = new Product("Health Potion", "A curative potion coveted by healers far and wide. With a subtle hint of sweet berries, it mends wounds with gentle efficacy, replenishing vitality and restoring the weary, providing a soothing respite in times of peril.", 35.00, 50.00, potions, manufacturerAlchemist);
        Product productHealthPotion5 = new Product("Health Potion", "A curative potion coveted by healers far and wide. With a subtle hint of sweet berries, it mends wounds with gentle efficacy, replenishing vitality and restoring the weary, providing a soothing respite in times of peril.", 35.00, 50.00, potions, manufacturerAlchemist);
        Product productHealthPotion6 = new Product("Health Potion", "A curative potion coveted by healers far and wide. With a subtle hint of sweet berries, it mends wounds with gentle efficacy, replenishing vitality and restoring the weary, providing a soothing respite in times of peril.", 35.00, 50.00, potions, manufacturerAlchemist);
        Product productHealthPotion7 = new Product("Health Potion", "A curative potion coveted by healers far and wide. With a subtle hint of sweet berries, it mends wounds with gentle efficacy, replenishing vitality and restoring the weary, providing a soothing respite in times of peril.", 35.00, 50.00, potions, manufacturerAlchemist);

        productRepository.save(productHealthPotion1);
        productRepository.save(productHealthPotion2);
        productRepository.save(productHealthPotion3);
        productRepository.save(productHealthPotion4);
        productRepository.save(productHealthPotion5);
        productRepository.save(productHealthPotion6);
        productRepository.save(productHealthPotion7);

        Product productManaPotion1 = new Product("Mana Potion", "A potent mana elixir sought by spellcasters seeking unyielding power. Its azure hue sparkles with arcane energy, invigorating the mind and enhancing magical regeneration. With each sip, a torrent of mana surges forth, granting the caster the ability to unleash their spells with greater frequency and intensity.", 50.00, 60.00, potions, manufacturerAlchemist);
        Product productManaPotion2 = new Product("Mana Potion", "A potent mana elixir sought by spellcasters seeking unyielding power. Its azure hue sparkles with arcane energy, invigorating the mind and enhancing magical regeneration. With each sip, a torrent of mana surges forth, granting the caster the ability to unleash their spells with greater frequency and intensity.", 50.00, 60.00, potions, manufacturerAlchemist);
        Product productManaPotion3 = new Product("Mana Potion", "A potent mana elixir sought by spellcasters seeking unyielding power. Its azure hue sparkles with arcane energy, invigorating the mind and enhancing magical regeneration. With each sip, a torrent of mana surges forth, granting the caster the ability to unleash their spells with greater frequency and intensity.", 50.00, 60.00, potions, manufacturerAlchemist);
        Product productManaPotion4 = new Product("Mana Potion", "A potent mana elixir sought by spellcasters seeking unyielding power. Its azure hue sparkles with arcane energy, invigorating the mind and enhancing magical regeneration. With each sip, a torrent of mana surges forth, granting the caster the ability to unleash their spells with greater frequency and intensity.", 50.00, 60.00, potions, manufacturerAlchemist);

        productRepository.save(productManaPotion1);
        productRepository.save(productManaPotion2);
        productRepository.save(productManaPotion3);
        productRepository.save(productManaPotion4);

        Product productStrengthPotion1 = new Product("Strength Potion", "A vial of raw strength coveted by warriors and spell casters alike. When drank, it surges through the veins, awakening dormant power. Muscles bulge with newfound might, empowering each strike and amplifying magical prowess, allowing the adventurer to unleash devastating blows and unleash their true potential.", 60.00, 75.00, potions, manufacturerAlchemist);
        Product productStrengthPotion2 = new Product("Strength Potion", "A vial of raw strength coveted by warriors and spell casters alike. When drank, it surges through the veins, awakening dormant power. Muscles bulge with newfound might, empowering each strike and amplifying magical prowess, allowing the adventurer to unleash devastating blows and unleash their true potential.", 60.00, 75.00, potions, manufacturerAlchemist);
        Product productStrengthPotion3 = new Product("Strength Potion", "A vial of raw strength coveted by warriors and spell casters alike. When drank, it surges through the veins, awakening dormant power. Muscles bulge with newfound might, empowering each strike and amplifying magical prowess, allowing the adventurer to unleash devastating blows and unleash their true potential.", 60.00, 75.00, potions, manufacturerAlchemist);

        productRepository.save(productStrengthPotion1);
        productRepository.save(productStrengthPotion2);
        productRepository.save(productStrengthPotion3);


        Product productBronzeAxe1 = new Product("Bronze Axe", "A freshly forged axe designed for aspiring warriors. Its gleaming bronze head reflects the promise of untapped potential, while the polished wooden handle provides a comfortable grip. Though untested, its balanced design and sharp edge offer a reliable tool to begin one's journey into the realm of combat.", 270.00, 290.00, weapons, manufacturerBlacksmith);
        Product productBronzeAxe2 = new Product("Bronze Axe", "A freshly forged axe designed for aspiring warriors. Its gleaming bronze head reflects the promise of untapped potential, while the polished wooden handle provides a comfortable grip. Though untested, its balanced design and sharp edge offer a reliable tool to begin one's journey into the realm of combat.", 270.00, 290.00, weapons, manufacturerBlacksmith);
        Product productBronzeAxe3 = new Product("Bronze Axe", "A freshly forged axe designed for aspiring warriors. Its gleaming bronze head reflects the promise of untapped potential, while the polished wooden handle provides a comfortable grip. Though untested, its balanced design and sharp edge offer a reliable tool to begin one's journey into the realm of combat.", 270.00, 290.00, weapons, manufacturerBlacksmith);

        productRepository.save(productBronzeAxe1);
        productRepository.save(productBronzeAxe2);
        productRepository.save(productBronzeAxe3);


        Product productSilverAxe1 = new Product("Silver Axe", "A refined weapon crafted for seasoned warriors seeking a step above. Its gleaming silver head, adorned with intricate engravings, reflects a legacy of victorious battles. With a balanced heft and keen edge, it cleaves through adversaries with precision, empowering its wielder to dominate the battlefield and leave a lasting mark upon their foes.", 400.00, 475.00, weapons, manufacturerBlacksmith);
        Product productSilverAxe2 = new Product("Silver Axe", "A refined weapon crafted for seasoned warriors seeking a step above. Its gleaming silver head, adorned with intricate engravings, reflects a legacy of victorious battles. With a balanced heft and keen edge, it cleaves through adversaries with precision, empowering its wielder to dominate the battlefield and leave a lasting mark upon their foes.", 400.00, 475.00, weapons, manufacturerBlacksmith);

        productRepository.save(productSilverAxe1);
        productRepository.save(productSilverAxe2);


        Product productGoldAxe1 = new Product("Gold Axe", "A legendary golden axe, whispered about in hallowed tales. Forged in the crucible of celestial fire, its radiant glow commands awe. Each swing conjures tempestuous gusts, shattering defenses with relentless fury. The chosen few who bear it harness the essence of thunder and strike as champions among legends.", 2000.00, 4500.00, weapons, manufacturerBlacksmith);

        productRepository.save(productGoldAxe1);

        Product productSilverSpear1 = new Product("Silver Spear", "Its silvery shaft, embossed with subtle patterns, exudes quiet strength. With a balanced reach and a keenly honed tip, it pierces through enemies with swift precision, granting its wielder the advantage of range in battle, and serving as a dependable companion for the discerning warrior.", 400.00, 475.00, weapons, manufacturerBlacksmith);
        Product productSilverSpear2 = new Product("Silver Spear", "Its silvery shaft, embossed with subtle patterns, exudes quiet strength. With a balanced reach and a keenly honed tip, it pierces through enemies with swift precision, granting its wielder the advantage of range in battle, and serving as a dependable companion for the discerning warrior.", 400.00, 475.00, weapons, manufacturerBlacksmith);

        productRepository.save(productSilverSpear1);
        productRepository.save(productSilverSpear2);

        Product productGoldSpear1 = new Product("Gold Spear", "An exquisite golden spear unrivaled in craftsmanship. Its shimmering shaft, adorned with celestial motifs, resonates with divine power. Each thrust unleashes a radiant aura, striking true and piercing the hearts of adversaries. In the hands of a skilled warrior, it becomes an instrument of heavenly justice, instilling awe and commanding the battlefield with unmatched grace.", 850.00, 1000.00, weapons, manufacturerBlacksmith);
        Product productGoldSpear2 = new Product("Gold Spear", "An exquisite golden spear unrivaled in craftsmanship. Its shimmering shaft, adorned with celestial motifs, resonates with divine power. Each thrust unleashes a radiant aura, striking true and piercing the hearts of adversaries. In the hands of a skilled warrior, it becomes an instrument of heavenly justice, instilling awe and commanding the battlefield with unmatched grace.", 850.00, 1000.00, weapons, manufacturerBlacksmith);
        Product productGoldSpear3 = new Product("Gold Spear", "An exquisite golden spear unrivaled in craftsmanship. Its shimmering shaft, adorned with celestial motifs, resonates with divine power. Each thrust unleashes a radiant aura, striking true and piercing the hearts of adversaries. In the hands of a skilled warrior, it becomes an instrument of heavenly justice, instilling awe and commanding the battlefield with unmatched grace.", 850.00, 1000.00, weapons, manufacturerBlacksmith);

        productRepository.save(productGoldSpear1);
        productRepository.save(productGoldSpear2);
        productRepository.save(productGoldSpear3);

        Product productLightArmour1 = new Product("Light Armour", "A set of lightweight armor favored by agile rogues and nimble scouts. Crafted from supple leather, it grants exceptional freedom of movement, enhancing speed and agility. While its defensive capabilities may be modest, it offers unparalleled maneuverability, allowing its wearer to swiftly evade attacks and strike with swift precision.", 500.00, 600.00, armor, manufacturerArmorist);
        Product productLightArmour2 = new Product("Light Armour", "A set of lightweight armor favored by agile rogues and nimble scouts. Crafted from supple leather, it grants exceptional freedom of movement, enhancing speed and agility. While its defensive capabilities may be modest, it offers unparalleled maneuverability, allowing its wearer to swiftly evade attacks and strike with swift precision.", 500.00, 600.00, armor, manufacturerArmorist);
        Product productLightArmour3 = new Product("Light Armour", "A set of lightweight armor favored by agile rogues and nimble scouts. Crafted from supple leather, it grants exceptional freedom of movement, enhancing speed and agility. While its defensive capabilities may be modest, it offers unparalleled maneuverability, allowing its wearer to swiftly evade attacks and strike with swift precision.", 500.00, 600.00, armor, manufacturerArmorist);
        Product productLightArmour4 = new Product("Light Armour", "A set of lightweight armor favored by agile rogues and nimble scouts. Crafted from supple leather, it grants exceptional freedom of movement, enhancing speed and agility. While its defensive capabilities may be modest, it offers unparalleled maneuverability, allowing its wearer to swiftly evade attacks and strike with swift precision.", 500.00, 600.00, armor, manufacturerArmorist);

        productRepository.save(productLightArmour1);
        productRepository.save(productLightArmour2);
        productRepository.save(productLightArmour3);
        productRepository.save(productLightArmour4);

        Product productMediumArmour1 = new Product("Medium Armour", "A medium-weight ensemble that strikes a harmonious balance between protection and agility. Its interlocking plates and chainmail provide solid defense, while still allowing for nimble movement. This versatile armor grants the wearer the confidence to engage in both offensive and defensive maneuvers, adapting seamlessly to the ever-changing tides of battle.", 750.00, 950.00, armor, manufacturerArmorist);
        Product productMediumArmour2 = new Product("Medium Armour", "A medium-weight ensemble that strikes a harmonious balance between protection and agility. Its interlocking plates and chainmail provide solid defense, while still allowing for nimble movement. This versatile armor grants the wearer the confidence to engage in both offensive and defensive maneuvers, adapting seamlessly to the ever-changing tides of battle.", 750.00, 950.00, armor, manufacturerArmorist);
        Product productMediumArmour3 = new Product("Medium Armour", "A medium-weight ensemble that strikes a harmonious balance between protection and agility. Its interlocking plates and chainmail provide solid defense, while still allowing for nimble movement. This versatile armor grants the wearer the confidence to engage in both offensive and defensive maneuvers, adapting seamlessly to the ever-changing tides of battle.", 750.00, 950.00, armor, manufacturerArmorist);

        productRepository.save(productMediumArmour1);
        productRepository.save(productMediumArmour2);
        productRepository.save(productMediumArmour3);

        Product productHeavyArmour1 = new Product("Heavy Armour", "A formidable suit of heavy armor crafted for indomitable tanks. Its imposing presence inspires fear on the battlefield. Thick layers of reinforced metal offer unparalleled defense, shielding the wearer from even the most devastating blows. Though its maneuverability may be limited, its unwavering resilience makes it an unyielding bastion, absorbing damage and allowing its wearer to bravely protect allies amidst the chaos of combat.", 1250.00, 1400.00, armor, manufacturerArmorist);

        productRepository.save(productHeavyArmour1);
    }
}
