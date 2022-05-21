package com.example.mynimalist.list;

import com.example.mynimalist.user.User;
import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
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

    public void setName(String name){
        this.name = name;
    }
}
