package io.projeto.roteiro02.todoapp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.projeto.roteiro02.todoapp.entity.Todo;
import io.projeto.roteiro02.todoapp.entity.User;
import io.projeto.roteiro02.todoapp.repository.TodoRepository;
import io.projeto.roteiro02.todoapp.repository.UserRepository;

@SpringBootApplication
public class TodoAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(TodoAppApplication.class, args);
    }

    /**
     * @param userRepository
     * @param todoRepository
     * @return
     */
    @Bean
    public CommandLineRunner demo(UserRepository userRepository, TodoRepository todoRepository) {
        return (args) -> {
            // Cria um usuário
            User user = new User();
            user.setPassword("123");
            user.setUsername("Vitor");

            // Cria uma tarefa
            Todo todo  = new Todo();
            todo.setContent("teste");

            // Adiciona a tarefa à lista de tarefas do usuário
            user.getTodoList().add(todo);

            // Salva o usuário no banco de dados
            userRepository.save(user);
        };
    }
}
