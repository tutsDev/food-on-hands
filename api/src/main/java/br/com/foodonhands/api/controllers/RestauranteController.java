package br.com.foodonhands.api.controllers;

import br.com.foodonhands.api.models.Restaurante;
import br.com.foodonhands.api.services.RestauranteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurantes")
public class RestauranteController {

    @Autowired
    private RestauranteService restauranteService;

    @PostMapping
    public ResponseEntity<Restaurante> create(@RequestBody Restaurante restaurante) {
        String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        return ResponseEntity.ok(restauranteService.create(restaurante, userEmail));
    }

    @GetMapping
    public ResponseEntity<List<Restaurante>> findAll() {
        String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        return ResponseEntity.ok(restauranteService.findAllByUser(userEmail));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Restaurante> findById(@PathVariable Long id) {
        return ResponseEntity.ok(restauranteService.findById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Restaurante> update(@PathVariable Long id, @RequestBody Restaurante restaurante) {
        return ResponseEntity.ok(restauranteService.update(id, restaurante));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        restauranteService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
