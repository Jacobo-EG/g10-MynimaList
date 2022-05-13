package com.example.mynimalist.list;

import com.example.mynimalist.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Repository;

@Repository
public interface ListRepository extends JpaRepository<List, Long> {


/*
    @Query(value = "SELECT l.id l.name FROM List l WHERE l.user_id = :id", nativeQuery = true)
    java.util.List<Object> getListsByUserId(@Param("id") Long userId);
*/


    java.util.List<List> findAllByUser(User user);

    List findByName(String name);
}
