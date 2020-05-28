package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.stream.Collectors;

@RestController
class TodoController {
    private TodoRepository repository;

    public TodoController(TodoRepository repository) {
        this.repository = repository;
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/todo-items")
    public Collection<Todo> todoItem() {
        return repository.findAll().stream()
                .collect(Collectors.toList());
    }

    private boolean isItem(Todo todo) {
        return true;
    }
}