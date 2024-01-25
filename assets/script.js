document.addEventListener('DOMContentLoaded', function () {
    const menus = document.querySelectorAll('.menu');

    // Array de objetos representando os itens do cardápio
    const cardapio = {
        almoco: [
            { id: 'feijoada', nome: 'Feijoada', preco: 18.00 },
            { id: 'frango-grelhado', nome: 'Frango Grelhado', preco: 15.00 },
            { id: 'strogonoff-carne', nome: 'Strogonoff de Carne', preco: 20.00 },
            { id: 'arroz-camarao', nome: 'Arroz de Camarão', preco: 25.00 },
            { id: 'salada-caesar', nome: 'Salada Caesar', preco: 12.00 },
            { id: 'escondidinho-carne-seca', nome: 'Escondidinho de Carne Seca', preco: 18.00 },
        ],
        jantar: [
            { id: 'salmao-grelhado', nome: 'Salmão Grelhado', preco: 22.00 },
            { id: 'penne-pesto', nome: 'Penne ao Pesto', preco: 15.00 },
            { id: 'costelas-bbq', nome: 'Costelas BBQ', preco: 25.00 },
            { id: 'risoto-funghi', nome: 'Risoto de Funghi', preco: 20.00 },
            { id: 'lasanha-bolonhesa', nome: 'Lasanha à Bolonhesa', preco: 18.00 },
            { id: 'peixe-assado-legumes', nome: 'Peixe Assado com Legumes', preco: 23.00 },
        ],
        bebidas: [
            { id: 'refrigerante-lata', nome: 'Refrigerante (Lata)', preco: 5.00 },
            { id: 'suco-natural', nome: 'Suco Natural', preco: 7.00 },
            { id: 'agua-mineral', nome: 'Água Mineral', preco: 3.00 },
            { id: 'coquetel-frutas', nome: 'Coquetel de Frutas', preco: 8.00 },
            { id: 'cerveja-artesanal', nome: 'Cerveja Artesanal', preco: 10.00 },
            { id: 'cha-gelado', nome: 'Chá Gelado', preco: 4.00 },
        ],
        sobremesas: [
            { id: 'pudim-leite', nome: 'Pudim de Leite', preco: 8.00 },
            { id: 'torta-chocolate', nome: 'Torta de Chocolate', preco: 10.00 },
            { id: 'sorvete-morango', nome: 'Sorvete de Morango', preco: 6.00 },
            { id: 'brigadeiro-gourmet', nome: 'Brigadeiro Gourmet', preco: 5.00 },
            { id: 'creme-brulee', nome: 'Creme Brulée', preco: 12.00 },
            { id: 'canudinho-doce-leite', nome: 'Canudinho de Doce de Leite', preco: 7.00 },
        ],
    };

    // Função para gerar o HTML dos itens do cardápio
    function gerarCardapioHTML(menuId) {
        const menu = cardapio[menuId];
        const menuSection = document.getElementById(menuId);

        if (menu && menuSection) {
            menu.forEach(item => {
                const itemHTML = document.createElement('p');
                itemHTML.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
                itemHTML.addEventListener('click', function () {
                    redirecionarParaDetalhesPedido(item.id);
                });
                menuSection.appendChild(itemHTML);
            });
        }
    }

    // Função para redirecionar para a tela de detalhes do pedido
    function redirecionarParaDetalhesPedido(itemId) {
        // Aqui você deve adicionar a lógica de redirecionamento para a tela de detalhes do pedido
        // Pode ser usando window.location.href ou outras técnicas de roteamento em seu framework
        console.log(`Redirecionando para detalhes do pedido: ${itemId}`);
        // Exemplo de redirecionamento:
        // window.location.href = `detalhes-pedido.html?id=${itemId}`;
    }

    // Adiciona os itens do cardápio a cada seção do menu
    menus.forEach(menu => {
        const menuId = menu.id;
        gerarCardapioHTML(menuId);
    });

    // Adiciona evento de clique no ícone do menu
    const menuIcon = document.getElementById('menu-icon');
    menuIcon.addEventListener('click', function () {
        document.getElementById('cardapio-container').classList.toggle('show-menu');
    });

    // Adiciona evento de clique no botão de comprar
    const btnComprar = document.getElementById('btn-comprar');
    btnComprar.addEventListener('click', function () {
        // Lógica para finalizar a compra
        console.log('Finalizando a compra');
    });
});
