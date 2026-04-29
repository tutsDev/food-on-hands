package br.com.foodonhands.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "tb_cardapios")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Cardapio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    private int tipoLayout;

    private String qrCodeUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurante_id")
    @JsonIgnore
    private Restaurante restaurante;

    @ManyToMany
    @JoinTable(
        name = "tb_cardapio_item",
        joinColumns = @JoinColumn(name = "cardapio_id"),
        inverseJoinColumns = @JoinColumn(name = "item_id")
    )
    private List<ItemCardapio> itensCardapio;
}
