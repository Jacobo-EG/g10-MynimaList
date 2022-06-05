package com.example.mynimalist.list;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class GetListResponse {
    private Long id;
    private String name;
}
