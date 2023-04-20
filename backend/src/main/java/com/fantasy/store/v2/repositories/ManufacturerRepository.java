package com.fantasy.store.v2.repositories;

import com.fantasy.store.v2.models.Manufacturer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManufacturerRepository extends JpaRepository<Manufacturer, Long> {
}
