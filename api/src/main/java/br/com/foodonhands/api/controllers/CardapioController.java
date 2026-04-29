package br.com.foodonhands.api.controllers;

import br.com.foodonhands.api.models.Cardapio;
import br.com.foodonhands.api.services.CardapioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurantes/{restauranteId}/cardapios")
public class CardapioController {

    @Autowired
    private CardapioService cardapioService;

    @PostMapping
    public ResponseEntity<Cardapio> create(@PathVariable Long restauranteId, @RequestBody Cardapio cardapio) {
        return ResponseEntity.ok(cardapioService.create(restauranteId, cardapio));
    }

    @GetMapping
    public ResponseEntity<List<Cardapio>> findAll(@PathVariable Long restauranteId) {
        return ResponseEntity.ok(cardapioService.findAllByRestaurante(restauranteId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cardapio> findById(@PathVariable Long id) {
        return ResponseEntity.ok(cardapioService.findById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cardapio> update(@PathVariable Long id, @RequestBody Cardapio cardapio) {
        return ResponseEntity.ok(cardapioService.update(id, cardapio));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        cardapioService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
