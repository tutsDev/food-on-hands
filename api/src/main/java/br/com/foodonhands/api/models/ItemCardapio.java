package br.com.foodonhands.api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "tb_itens_cardapio")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ItemCardapio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    private String descricao;
    
    @Column(columnDefinition = "TEXT")
    private String descricaoLonga;

    private Boolean disponivel;

    private Double preco;

    @ManyToMany(mappedBy = "itensCardapio")
    @JsonIgnore
    private List<Cardapio> cardapios;
}
