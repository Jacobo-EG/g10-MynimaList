package com.example.mynimalist.list;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListRespository extends JpaRepository<List, Long> {
}
