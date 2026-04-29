package br.com.foodonhands.api.services;

import br.com.foodonhands.api.models.ItemCardapio;
import br.com.foodonhands.api.repositories.ItemCardapioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemCardapioService {

    @Autowired
    private ItemCardapioRepository itemCardapioRepository;

    public ItemCardapio create(ItemCardapio item) {
        return itemCardapioRepository.save(item);
    }

    public List<ItemCardapio> findAll() {
        return itemCardapioRepository.findAll();
    }

    public ItemCardapio findById(Long id) {
        return itemCardapioRepository.findById(id).orElseThrow(() -> new RuntimeException("Item not found"));
    }

    public ItemCardapio update(Long id, ItemCardapio updateData) {
        ItemCardapio existing = findById(id);
        existing.setNome(updateData.getNome());
        existing.setDescricao(updateData.getDescricao());
        existing.setDescricaoLonga(updateData.getDescricaoLonga());
        existing.setDisponivel(updateData.getDisponivel());
        existing.setPreco(updateData.getPreco());
        
        return itemCardapioRepository.save(existing);
    }

    public void delete(Long id) {
        itemCardapioRepository.deleteById(id);
    }
}
