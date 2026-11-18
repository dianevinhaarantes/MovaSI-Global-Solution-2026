
/*
=========================================
MOVASI - MOBILIDADE INTELIGENTE
Seu movimento gera MovimentAÇÃO.

PAINEL PRINCIPAL - ETAPA 5

Funcionalidades:
- Mapa interativo OpenStreetMap
- Pontos de referência
- Seleção de origem e destino
- Perfil de mobilidade
- Favoritos locais
- Informações sobre próximos módulos

IMPORTANTE:
Não há cálculo de rotas acessíveis
nem confirmação de rampas nesta etapa.
=========================================
*/

document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 1 - PONTOS DE REFERÊNCIA
    // =====================================

    const locais = {

        masp: {
            nome: "MASP",
            coordenadas: [-23.5614, -46.6563]
        },

        trianon: {
            nome: "Parque Trianon",
            coordenadas: [-23.5610, -46.6578]
        },

        conjunto: {
            nome: "Conjunto Nacional",
            coordenadas: [-23.5587, -46.6605]
        }

    };

    // Coordenadas aproximadas para o piloto.
    // Não representam acessibilidade verificada.


    // =====================================
    // 2 - ELEMENTOS DO HTML
    // =====================================

    const campoOrigem =
        document.getElementById("origem");

    const campoDestino =
        document.getElementById("destino");

    const campoMobilidade =
        document.getElementById("mobilidade");

    const botaoVer =
        document.getElementById("ver-pontos");

    const resultado =
        document.getElementById("resultado");

    const botaoFavorito =
        document.getElementById("salvar-favorito");

    const listaFavoritos =
        document.getElementById("lista-favoritos");

    const botaoAlertas =
        document.getElementById("botao-alertas");


    // =====================================
    // 3 - MENSAGENS DO SISTEMA
    // =====================================

    function mostrarMensagem(texto) {
        resultado.textContent = texto;
    }


    // =====================================
    // 4 - INICIALIZAR O MAPA
    // =====================================

    let mapa = null;
    let marcadoresSelecionados = null;

    if (typeof L === "undefined") {

        document.getElementById("mapa").textContent =
            "Não foi possível carregar o mapa. " +
            "Verifique sua conexão com a internet.";

        mostrarMensagem(
            "A biblioteca do mapa não foi carregada."
        );

    } else {

        // Criar o mapa na Avenida Paulista

        mapa = L.map("mapa").setView(
            [-23.5610, -46.6580],
            15
        );

        // Adicionar mapa do OpenStreetMap

        L.tileLayer(
            "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
                maxZoom: 19,
                attribution:
                    '&copy; OpenStreetMap contributors'
            }
        ).addTo(mapa);


        // Grupo dos marcadores selecionados

        marcadoresSelecionados =
            L.layerGroup().addTo(mapa);


        // =================================
        // 5 - MARCAR PONTOS DE REFERÊNCIA
        // =================================

        Object.values(locais).forEach(function (local) {

            L.circleMarker(
                local.coordenadas,
                {
                    radius: 7,
                    color: "#C8F42A",
                    fillColor: "#C8F42A",
                    fillOpacity: 0.8,
                    weight: 2
                }
            )
            .bindPopup(
                "<strong>" + local.nome + "</strong>" +
                "<p>Referência geográfica.</p>" +
                "<p>Acessibilidade não verificada.</p>"
            )
            .addTo(mapa);

        });

    }


    // =====================================
    // 6 - MOSTRAR ORIGEM E DESTINO
    // =====================================

    function mostrarPontos() {

        const origemID = campoOrigem.value;
        const destinoID = campoDestino.value;

        const origem = locais[origemID];
        const destino = locais[destinoID];

        const mobilidade =
            campoMobilidade.options[
                campoMobilidade.selectedIndex
            ].text;


        // Conferir se os dois locais são iguais

        if (origemID === destinoID) {

            mostrarMensagem(
                "Escolha uma origem e um destino diferentes."
            );

            return;
        }


        // Conferir se o mapa carregou

        if (!mapa || !marcadoresSelecionados) {

            mostrarMensagem(
                "O mapa não está disponível no momento."
            );

            return;
        }


        // Limpar marcadores de seleção anteriores

        marcadoresSelecionados.clearLayers();


        // Marcar origem em ciano

        L.circleMarker(
            origem.coordenadas,
            {
                radius: 12,
                color: "#FFFFFF",
                fillColor: "#19DDF3",
                fillOpacity: 1,
                weight: 3
            }
        )
        .bindPopup(
            "<strong>Origem</strong><p>" +
            origem.nome +
            "</p>"
        )
        .addTo(marcadoresSelecionados);


        // Marcar destino em rosa

        L.circleMarker(
            destino.coordenadas,
            {
                radius: 12,
                color: "#FFFFFF",
                fillColor: "#F315A6",
                fillOpacity: 1,
                weight: 3
            }
        )
        .bindPopup(
            "<strong>Destino</strong><p>" +
            destino.nome +
            "</p>"
        )
        .addTo(marcadoresSelecionados);


        // Enquadrar os dois pontos na tela

        mapa.fitBounds(
            [
                origem.coordenadas,
                destino.coordenadas
            ],
            {
                padding: [65, 65],
                maxZoom: 16
            }
        );


        // Mostrar resultado informativo

        mostrarMensagem(
            "Origem: " + origem.nome +
            " | Destino: " + destino.nome +
            " | Perfil: " + mobilidade +
            ". Os pontos foram localizados no mapa. " +
            "O cálculo de rotas acessíveis ainda " +
            "não está disponível."
        );

    }


    // Ativar o botão

    botaoVer.addEventListener(
        "click",
        mostrarPontos
    );


    // =====================================
    // 7 - SISTEMA DE FAVORITOS
    // =====================================

    const chaveFavoritos =
        "movasi_favoritos_demonstracao";


    // Ler favoritos salvos no navegador

    function lerFavoritos() {

        try {

            const dados = JSON.parse(
                localStorage.getItem(chaveFavoritos) || "[]"
            );

            if (!Array.isArray(dados)) {
                return [];
            }

            return dados.filter(function (id) {
                return Boolean(locais[id]);
            });

        } catch (erro) {

            return [];

        }

    }


    // Mostrar favoritos na página

    function atualizarFavoritos() {

        const favoritos = lerFavoritos();

        listaFavoritos.replaceChildren();


        if (favoritos.length === 0) {

            const texto = document.createElement("p");

            texto.className = "favoritos-vazio";

            texto.textContent =
                "Nenhum destino favorito salvo.";

            listaFavoritos.appendChild(texto);

            return;
        }


        favoritos.forEach(function (id) {

            const botao = document.createElement("button");

            botao.type = "button";

            botao.className = "botao-favorito";

            botao.textContent =
                "★ " + locais[id].nome;


            // Ao clicar no favorito,
            // selecionar o destino correspondente

            botao.addEventListener("click", function () {

                campoDestino.value = id;

                mostrarMensagem(
                    locais[id].nome +
                    " selecionado como destino."
                );

            });


            listaFavoritos.appendChild(botao);

        });

    }


    // Salvar novo destino favorito

    botaoFavorito.addEventListener(
        "click",
        function () {

            const destinoID = campoDestino.value;

            const favoritos = lerFavoritos();


            // Evitar favoritos repetidos

            if (favoritos.includes(destinoID)) {

                mostrarMensagem(
                    "Este destino já está nos favoritos."
                );

                return;
            }


            favoritos.push(destinoID);


            // Guardar somente neste navegador

            try {

                localStorage.setItem(
                    chaveFavoritos,
                    JSON.stringify(favoritos)
                );

                atualizarFavoritos();

                mostrarMensagem(
                    locais[destinoID].nome +
                    " foi salvo como favorito " +
                    "neste navegador."
                );

            } catch (erro) {

                mostrarMensagem(
                    "Não foi possível salvar o favorito. " +
                    "Verifique as permissões do navegador."
                );

            }

        }
    );


    // Exibir favoritos existentes

    atualizarFavoritos();


    // =====================================
    // 8 - MOVASI ALERTA
    // =====================================

    botaoAlertas.addEventListener(
        "click",
        function () {

            window.location.href = "alertas.html";

        }
    );


    // =====================================
    // 9 - FINALIZAÇÃO
    // =====================================

    console.log(
        "MovaSI - Painel carregado com sucesso."
    );

});
