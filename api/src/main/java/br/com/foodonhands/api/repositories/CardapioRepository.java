package br.com.foodonhands.api.repositories;

import br.com.foodonhands.api.models.Cardapio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardapioRepository extends JpaRepository<Cardapio, Long> {
    List<Cardapio> findByRestauranteId(Long restauranteId);
}
