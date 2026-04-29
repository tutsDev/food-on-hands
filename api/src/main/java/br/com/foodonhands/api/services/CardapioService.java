package br.com.foodonhands.api.services;

import br.com.foodonhands.api.models.Cardapio;
import br.com.foodonhands.api.models.Restaurante;
import br.com.foodonhands.api.repositories.CardapioRepository;
import br.com.foodonhands.api.repositories.RestauranteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardapioService {

    @Autowired
    private CardapioRepository cardapioRepository;

    @Autowired
    private RestauranteRepository restauranteRepository;

    public Cardapio create(Long restauranteId, Cardapio cardapio) {
        Restaurante restaurante = restauranteRepository.findById(restauranteId)
                .orElseThrow(() -> new RuntimeException("Restaurante not found"));
        
        cardapio.setRestaurante(restaurante);
        
        // Formatar o qrCodeUrl (ex: /nome-do-restaurante/titulo-do-cardapio)
        String restauranteSlug = restaurante.getNome().toLowerCase().replaceAll("[^a-z0-9]", "-");
        String cardapioSlug = cardapio.getTitulo().toLowerCase().replaceAll("[^a-z0-9]", "-");
        cardapio.setQrCodeUrl("/" + restauranteSlug + "/" + cardapioSlug);
        
        return cardapioRepository.save(cardapio);
    }

    public List<Cardapio> findAllByRestaurante(Long restauranteId) {
        return cardapioRepository.findByRestauranteId(restauranteId);
    }

    public Cardapio findById(Long id) {
        return cardapioRepository.findById(id).orElseThrow(() -> new RuntimeException("Cardapio not found"));
    }

    public Cardapio update(Long id, Cardapio updateData) {
        Cardapio existing = findById(id);
        existing.setTitulo(updateData.getTitulo());
        existing.setTipoLayout(updateData.getTipoLayout());
        
        // Atualizar a URL caso o título mude
        String restauranteSlug = existing.getRestaurante().getNome().toLowerCase().replaceAll("[^a-z0-9]", "-");
        String cardapioSlug = existing.getTitulo().toLowerCase().replaceAll("[^a-z0-9]", "-");
        existing.setQrCodeUrl("/" + restauranteSlug + "/" + cardapioSlug);

        return cardapioRepository.save(existing);
    }

    public void delete(Long id) {
        cardapioRepository.deleteById(id);
    }
}
