const menuButton = document.querySelector("#menuButton")
const mobileMenu = document.querySelector(".mobile-menu")
const navMobileMenu = document.querySelector(".nav-mobile-menu")
const row1Item1 = document.querySelector(".row1-item1")
const row1Item2 = document.querySelector(".row1-item2")
const row2Item1 = document.querySelector(".row2-item1")
const row2Item2 = document.querySelector(".row2-item2")
const row2Item3 = document.querySelector(".row2-item3")

const questions = {
    1: {
        pergunta: "Qual é o principal problema que o ChuvaViva tenta resolver?",
        opcoes: [
            "Falta de chuva nas cidades",
            "Dados climáticos existem, mas não viram ação hiperlocal a tempo",
            "Ausência de estações meteorológicas no Brasil",
            "Falta de financiamento para a Defesa Civil"
        ],
        correta: 1,
        explicacao: "O ChuvaViva parte da premissa de que os dados já existem — o gargalo está em transformá-los em decisões hiperlocais a tempo de salvar vidas."
    },
    2: {
        pergunta: "Qual tragédia brasileira é citada como exemplo da falha nos sistemas de alerta?",
        opcoes: [
            "Enchentes de São Paulo em 2019",
            "Petrópolis em 2022",
            "Mariana em 2015",
            "Rio de Janeiro em 2011"
        ],
        correta: 1,
        explicacao: "Petrópolis em 2022 ilustrou a 'fratura': alertas regionais chegaram tarde demais para evitar a catástrofe."
    },
    3: {
        pergunta: "Qual é a resolução espacial de risco calculada pelo ChuvaViva?",
        opcoes: [
            "1 km por célula",
            "500 m por célula",
            "100 m por célula",
            "10 m por célula"
        ],
        correta: 2,
        explicacao: "O sistema calcula risco em grid de 100 m — fino o suficiente para diferenciar uma rua da outra na mesma encosta."
    },
    4: {
        pergunta: "Qual fonte de dados é usada pelo ChuvaViva para altimetria e modelagem de fluxo de água?",
        opcoes: [
            "Sentinel-2",
            "CEMADEN",
            "SRTM / NASA",
            "OpenStreetMap"
        ],
        correta: 2,
        explicacao: "O SRTM da NASA fornece altimetria global de 30 m, usada para modelar fluxo de água e encostas."
    },
    5: {
        pergunta: "Qual tecnologia é utilizada nos sensores de campo (IoT) para transmissão de dados hiperlocais?",
        opcoes: [
            "Wi-Fi e Bluetooth",
            "LoRa e LTE-M",
            "5G e Zigbee",
            "Satélite VSAT"
        ],
        correta: 1,
        explicacao: "Os pluviômetros e sensores ribeirinhos baseados em ESP32 transmitem via LoRa e LTE-M, protocolos adequados para IoT em campo."
    },
    6: {
        pergunta: "Qual é a janela de antecipação que o ChuvaViva oferece para serviços essenciais como hospitais e escolas?",
        opcoes: [
            "15 a 30 minutos",
            "30 minutos a 1 hora",
            "1 a 6 horas",
            "12 a 24 horas"
        ],
        correta: 2,
        explicacao: "A janela de antecipação de 1 a 6 horas permite que hospitais, escolas e utilities se preparem antes do evento."
    },
    7: {
        pergunta: "Qual banco de dados com extensão espacial compõe o núcleo de geoprocessamento do ChuvaViva?",
        opcoes: [
            "MySQL + GeoServer",
            "PostGIS (PostgreSQL espacial)",
            "MongoDB + Turf.js",
            "SQLite + GDAL"
        ],
        correta: 1,
        explicacao: "O PostGIS é a extensão espacial do PostgreSQL usada para operações geoespaciais em escala no núcleo do sistema."
    },
    8: {
        pergunta: "Quais grupos populacionais têm peso explícito no algoritmo de priorização de alertas?",
        opcoes: [
            "Apenas moradores de encostas",
            "Proprietários de imóveis em área de risco",
            "Idosos, crianças, PCDs e populações de baixa renda",
            "Gestores públicos e socorristas"
        ],
        correta: 2,
        explicacao: "O algoritmo prioriza idosos, crianças, pessoas com deficiência e populações de baixa renda — os mais vulneráveis durante desastres."
    },
    9: {
        pergunta: "Qual é o prazo estimado de implantação para o primeiro município piloto?",
        opcoes: [
            "30 dias",
            "60 dias",
            "90 dias",
            "180 dias"
        ],
        correta: 2,
        explicacao: "O ChuvaViva opera como uma camada sobre dados públicos existentes e promete implantação em até 90 dias para o município piloto."
    },
    10: {
        pergunta: "Qual das afirmações descreve corretamente o impacto médio dos desastres hidrológicos no Brasil?",
        opcoes: [
            "Cerca de 200 mortes por ano e R$ 5 bi em prejuízos",
            "Cerca de 847 mortes por ano e R$ 27 bi em prejuízos na última década",
            "Mais de 2.000 mortes por ano e R$ 100 bi em prejuízos",
            "Cerca de 500 mortes por ano e R$ 10 bi em prejuízos"
        ],
        correta: 1,
        explicacao: "Os dados do CEMADEN, CRED e CNM apontam 847 mortes médias por ano e R$ 27 bi em prejuízos acumulados na última década."
    }
}

menuButton.addEventListener("click", () => {
    console.log("clicou aqui")
    mobileMenu.classList.toggle("active")
    navMobileMenu.classList.toggle("close")
})

row1Item1.addEventListener("click", () => {
    row1Item1.classList.toggle("col-lg-8")
    row1Item1.classList.toggle("style")
    console.log("Clicou aqui 1")
})
row1Item2.addEventListener("click", () => {
    row1Item2.classList.toggle("col-lg-8")
    row1Item2.classList.toggle("style")
    console.log("Clicou aqui 2")
})

row2Item1.addEventListener("click", () => {
    row2Item1.classList.toggle("col-lg-6")
    row2Item1.classList.toggle("style")
    console.log("Clicou aqui 2")
})

row2Item2.addEventListener("click", () => {
    row2Item2.classList.toggle("col-lg-6")
    row2Item2.classList.toggle("style")
    console.log("Clicou aqui 2")
})

row2Item3.addEventListener("click", () => {
    row2Item3.classList.toggle("col-lg-6")
    row2Item3.classList.toggle("style")
    console.log("Clicou aqui 2")
})
