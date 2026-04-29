package br.com.foodonhands.api.dtos;

import br.com.foodonhands.api.models.Role;

public record RegisterDTO(String nome, String email, String password, Role role) {
}
