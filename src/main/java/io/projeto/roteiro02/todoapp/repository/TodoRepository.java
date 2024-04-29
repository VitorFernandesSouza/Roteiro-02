package io.projeto.roteiro02.todoapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.projeto.roteiro02.todoapp.entity.Todo;
import io.projeto.roteiro02.todoapp.entity.User;

public interface TodoRepository extends JpaRepository<Todo,Long> {
}
