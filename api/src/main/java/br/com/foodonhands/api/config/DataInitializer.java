package br.com.foodonhands.api.config;

import br.com.foodonhands.api.models.*;
import br.com.foodonhands.api.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;
import java.util.List;

@Configuration
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ItemCardapioRepository itemRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {

        // Evita duplicidade se o banco já estiver populado
        if (userRepository.count() > 1) {
            return;
        }

        // 1. Criar Itens Base (Reutilizáveis)
        ItemCardapio burger = new ItemCardapio(null, "X-Burger Artesanal", "Pão brioche e blend bovino", "Descrição detalhada do burger", true, 35.0, null);
        ItemCardapio bebida = new ItemCardapio(null, "Refrigerante Lata", "350ml gelado", "Coca-Cola ou Guaraná", true, 8.0, null);
        ItemCardapio acompanhamento = new ItemCardapio(null, "Batata Rústica", "Com alecrim e sal", "Porção individual 200g", true, 15.0, null);

        itemRepository.saveAll(Arrays.asList(burger, bebida, acompanhamento));

        // --- USUÁRIO 1: Dois Restaurantes, cada um com um cardápio ---
        User user1 = new User();
        user1.setNome("Guilherme Soares Lima");
        user1.setEmail("guilherme@email.com");
        user1.setPassword(passwordEncoder.encode("senha123"));
        user1.setRole(Role.USER);

        // Restaurante A do User 1
        Restaurante restA = criarRestaurante("Ratão Burger - Itapevi", user1, "Rua das Flores, 100");
        Cardapio cardapioA = criarCardapio("Menu Principal - Loja A", restA, Arrays.asList(burger, bebida, acompanhamento));
        restA.setCardapios(List.of(cardapioA));

        // Restaurante B do User 1
        Restaurante restB = criarRestaurante("Ratão Burger - Osasco", user1, "Av. Central, 500");
        Cardapio cardapioB = criarCardapio("Menu Verão - Loja B", restB, Arrays.asList(burger, bebida, acompanhamento));
        restB.setCardapios(List.of(cardapioB));

        user1.setRestaurantes(Arrays.asList(restA, restB));
        userRepository.save(user1);

        // --- USUÁRIO 2: Um Restaurante com dois cardápios ---
        User user2 = new User();
        user2.setNome("Vinicius Alves Mateus");
        user2.setEmail("vinicius@email.com");
        user2.setPassword(passwordEncoder.encode("senha456"));
        user2.setRole(Role.USER);

        Restaurante restC = criarRestaurante("BurguerZADA", user2, "Rua do Porto, 22");

        Cardapio cardapioC1 = criarCardapio("Cardápio Diurno", restC, Arrays.asList(burger, bebida, acompanhamento));
        Cardapio cardapioC2 = criarCardapio("Cardápio Noturno", restC, Arrays.asList(burger, bebida, acompanhamento));

        restC.setCardapios(Arrays.asList(cardapioC1, cardapioC2));
        user2.setRestaurantes(List.of(restC));

        userRepository.save(user2);

        System.out.println("Cenários de teste para 'Food On Hands' inicializados com sucesso!");
    }

    // Métodos auxiliares para organizar a criação
    private Restaurante criarRestaurante(String nome, User user, String rua) {
        Restaurante rest = new Restaurante();
        rest.setNome(nome);
        rest.setLogoUrl("http://logo.com/" + nome.toLowerCase().replace(" ", ""));
        rest.setUser(user);

        Endereco end = new Endereco();
        end.setRua(rua);
        end.setBairro("Centro");
        end.setCidade("São Paulo");
        end.setUf("SP");
        end.setCep("01000-000");
        end.setRestaurante(rest);

        rest.setEndereco(end);
        return rest;
    }

    private Cardapio criarCardapio(String titulo, Restaurante rest, List<ItemCardapio> itens) {
        Cardapio cardapio = new Cardapio();
        cardapio.setTitulo(titulo);
        cardapio.setTipoLayout(1);
        cardapio.setQrCodeUrl("http://foodonhands.com/qr/" + titulo.hashCode());
        cardapio.setRestaurante(rest);
        cardapio.setItensCardapio(itens);
        return cardapio;
    }
}