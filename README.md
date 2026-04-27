# Food On Hands - Gerador de Cardápios

Aplicação Mobile para criação e visualização de cardápios modernos para Hamburguerias.

## 👥 Integrantes do Projeto
* Arthur Soares Pereira
* Guilherme Soares Lima
* Tarcisio Neris de Souza
* Vinicius Alves Mateus

## 📝 Resumo Executivo
O **Food On Hands** é uma solução mobile desenvolvida para facilitar a criação e visualização de cardápios modernos, focada especificamente no nicho de hamburguerias.

## 🎯 Público-Alvo / Nicho
Chefes e donos de Hamburguerias que desejam oferecer modernidade e praticidade aos seus clientes na hora de escolher sua refeição.

## 🚀 Objetivo
Promover uma aplicação amigável, prática, moderna e intuitiva para criação de cardápios.

## 🛠 Escopo do Projeto

### ✅ Escopo Incluído
* **Autenticação de Usuário:** Níveis de acesso para Cliente e Administrador.
* **Gestão de Produtos (CRUD):** Formulário para criação, leitura, atualização e exclusão de produtos do cardápio, marcas e restaurantes do usuário.
* **Visualização:** Pré-visualização do cardápio digital.
* **Integração:** Gerador de QR Code para visualização final do cardápio.

### ❌ Escopo Excluído
* Geração de cardápios para restaurantes fora do nicho de hamburguerias.
* Sistema de pedido.
* Dashboard Administrativo para restaurantes.

## 📦​ Modelagem de Classes
<img width="731" height="479" alt="Modelagem de Classes - Food On Hands drawio" src="https://github.com/user-attachments/assets/7d651bea-abb5-412a-8454-6ba1775133c6" />

## 👤 Personas

| Nome | Função / Idade | Perfil | Objetivos no Sistema | Dores | Interação com o MVP |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Fernanda Costa** | Proprietária Your Burguer (29 anos) | Gastronomia e Empreendedora. Foca na estética e experiência: "se come primeiro com os olhos". | Promover "Pratos do Dia" ou edições limitadas; Criar categorias (tipos e subtipos). | Interface feia ou rígida que não permite mostrar a identidade visual da Hamburgueria; Falta de detalhes para alérgicos. | Focará na Gestão do Catálogo e na Customização Visual, esperando valorização da fotografia. |
| **Marcos Oliveira** | Chefe Los Hermanos Burguer (42 anos) | Especialista em Hamburguers Artesanais. Prático, busca clareza na essência dos produtos. | Cadastrar novos pratos rapidamente com fotos reais e descrições de ingredientes. | Medo de erros na cozinha por pedidos mal compreendidos. | Priorizará a gestão simples do catálogo, garantindo que o cardápio esteja sempre atualizado para evitar erros. |
| **Arnaldo Souza** | Cliente Casual (58 anos) | Aposentado. Valoriza tempo com a família e prefere interfaces simples sem termos técnicos. | Descrever pratos de forma intuitiva; Rapidez e simplicidade na leitura do cardápio. | Má interpretação dos pratos oferecidos pelo estabelecimento. | Atraído pelo layout intuitivo, categorização visual clara e qualidade das informações. |

## 🏗 Arquitetura Técnica
* **Frontend:** React Native (TypeScript, HTML e CSS).
* **Backend:** Spring Boot (Java, Spring Security, JWT).
* **Banco de Dados:** PostgreSQL (Produção) / H2 (Testes).

## 📋 Responsabilidade de Cada Integrante

| Nome | Responsabilidade |
| :--- | :--- |
| **Arthur Soares Pereira** | Backend Developer e DevOps/QA: Autenticação e Segurança da API / Gerenciar versionamento e realizar testes. |
| **Guilherme Soares Lima** | Backend Developer: Modelagem e Desenvolvimento dos Endpoints da API. |
| **Tarcisio Neris de Souza** | Frontend Developer: Integrar os containers criados. |
| **Vinicius Alves Mateus** | Frontend Developer e UI/UX Designer: Desenvolvimento dos Containers necessários para aplicação. |

## 📅 Cronograma de Entregas
* **Kickoff:** 01 de Março de 2026
* **Protótipo e UI/UX:** 20 de Março de 2026
* **API Alpha (Backend) e Componentes Principais (Frontend):** 01 de Maio de 2026
* **MVP Finalizado:** 01 de Junho de 2026
* **Encerramento do Projeto:** 15 de Junho de 2026
