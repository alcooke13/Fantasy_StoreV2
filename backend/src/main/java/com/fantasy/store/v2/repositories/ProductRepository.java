package com.fantasy.store.v2.repositories;

import com.fantasy.store.v2.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository <Product, Long> {
}
