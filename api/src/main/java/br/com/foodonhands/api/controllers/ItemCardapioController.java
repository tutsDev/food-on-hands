package br.com.foodonhands.api.controllers;

import br.com.foodonhands.api.models.ItemCardapio;
import br.com.foodonhands.api.services.ItemCardapioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/itens-cardapio")
public class ItemCardapioController {

    @Autowired
    private ItemCardapioService itemCardapioService;

    @PostMapping
    public ResponseEntity<ItemCardapio> create(@RequestBody ItemCardapio itemCardapio) {
        return ResponseEntity.ok(itemCardapioService.create(itemCardapio));
    }

    @GetMapping
    public ResponseEntity<List<ItemCardapio>> findAll() {
        return ResponseEntity.ok(itemCardapioService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ItemCardapio> findById(@PathVariable Long id) {
        return ResponseEntity.ok(itemCardapioService.findById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ItemCardapio> update(@PathVariable Long id, @RequestBody ItemCardapio itemCardapio) {
        return ResponseEntity.ok(itemCardapioService.update(id, itemCardapio));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        itemCardapioService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
