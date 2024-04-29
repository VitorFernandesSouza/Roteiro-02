package io.projeto.roteiro02.todoapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.projeto.roteiro02.todoapp.entity.Todo;
import io.projeto.roteiro02.todoapp.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
}
