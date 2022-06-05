package com.example.mynimalist.task;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findAllByList(com.example.mynimalist.list.List list);

    void deleteByList(com.example.mynimalist.list.List list);

}
