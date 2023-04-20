package com.fantasy.store.v2.repositories;

import com.fantasy.store.v2.models.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductTypeRepository extends JpaRepository<ProductType, Long> {
}
