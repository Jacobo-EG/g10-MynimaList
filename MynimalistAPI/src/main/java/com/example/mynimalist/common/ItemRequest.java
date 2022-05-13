package com.example.mynimalist.common;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class ItemRequest {
    private  final String token;
    private final String name;
    private final Long id;
}
