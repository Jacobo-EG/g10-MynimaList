package com.example.mynimalist.list;

import com.example.mynimalist.user.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
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

    @ManyToOne
    private User user;

    public List(String name, User user){
        this.name = name;
        this.user = user;
    }

}
