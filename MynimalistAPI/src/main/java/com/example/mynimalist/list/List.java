package com.example.mynimalist.list;

import javax.persistence.*;

@Entity
public class List {

    @Id
    @SequenceGenerator(
            name = "list_sequence",
            sequenceName = "list_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "list_sequence"
    )
    private Long id;
    private String name;


}
