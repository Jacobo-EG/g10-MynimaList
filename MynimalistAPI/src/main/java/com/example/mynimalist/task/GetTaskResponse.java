package com.example.mynimalist.task;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class GetTaskResponse {
    private Long id;
    private String name;
}
