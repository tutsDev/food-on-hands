package br.com.foodonhands.api.services;

import br.com.foodonhands.api.models.Restaurante;
import br.com.foodonhands.api.models.User;
import br.com.foodonhands.api.repositories.RestauranteRepository;
import br.com.foodonhands.api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestauranteService {

    @Autowired
    private RestauranteRepository restauranteRepository;

    @Autowired
    private UserRepository userRepository;

    public Restaurante create(Restaurante restaurante, String userEmail) {
        User user = userRepository.findByEmail(userEmail).orElseThrow(() -> new RuntimeException("User not found"));
        restaurante.setUser(user);
        if (restaurante.getEndereco() != null) {
            restaurante.getEndereco().setRestaurante(restaurante);
        }
        return restauranteRepository.save(restaurante);
    }

    public List<Restaurante> findAllByUser(String userEmail) {
        User user = userRepository.findByEmail(userEmail).orElseThrow(() -> new RuntimeException("User not found"));
        return restauranteRepository.findByUserId(user.getId());
    }

    public Restaurante findById(Long id) {
        return restauranteRepository.findById(id).orElseThrow(() -> new RuntimeException("Restaurante not found"));
    }

    public Restaurante update(Long id, Restaurante updateData) {
        Restaurante existing = findById(id);
        existing.setNome(updateData.getNome());
        existing.setLogoUrl(updateData.getLogoUrl());
        
        if (updateData.getEndereco() != null) {
            updateData.getEndereco().setId(existing.getEndereco() != null ? existing.getEndereco().getId() : null);
            updateData.getEndereco().setRestaurante(existing);
            existing.setEndereco(updateData.getEndereco());
        }
        
        return restauranteRepository.save(existing);
    }

    public void delete(Long id) {
        restauranteRepository.deleteById(id);
    }
}
