// Coordenadas Geográficas das 27 Capitais Brasileiras
const CITY_COORDS = {
    "Aracaju": { lat: -10.9472, lon: -37.0731 },
    "Belém": { lat: -1.4558, lon: -48.4902 },
    "Belo Horizonte": { lat: -19.9167, lon: -43.9345 },
    "Boa Vista": { lat: 2.8235, lon: -60.6758 },
    "Brasília": { lat: -15.7801, lon: -47.9292 },
    "Campo Grande": { lat: -20.4428, lon: -54.6464 },
    "Cuiabá": { lat: -15.601, lon: -56.0974 },
    "Curitiba": { lat: -25.4284, lon: -49.2733 },
    "Florianópolis": { lat: -27.5948, lon: -48.5482 },
    "Fortaleza": { lat: -3.7319, lon: -38.5267 },
    "Goiânia": { lat: -16.6869, lon: -49.2648 },
    "João Pessoa": { lat: -7.1153, lon: -34.861 },
    "Macapá": { lat: 0.034, lon: -51.0694 },
    "Maceió": { lat: -9.6658, lon: -35.735 },
    "Manaus": { lat: -3.119, lon: -60.0217 },
    "Natal": { lat: -5.7945, lon: -35.211 },
    "Palmas": { lat: -10.2491, lon: -48.3243 },
    "Porto Alegre": { lat: -30.0346, lon: -51.2177 },
    "Porto Velho": { lat: -8.7612, lon: -63.9039 },
    "Recife": { lat: -8.0539, lon: -34.8811 },
    "Rio Branco": { lat: -9.974, lon: -67.8076 },
    "Rio de Janeiro": { lat: -22.9068, lon: -43.1729 },
    "Salvador": { lat: -12.9714, lon: -38.5014 },
    "São Luís": { lat: -2.5307, lon: -44.3068 },
    "São Paulo": { lat: -23.5505, lon: -46.6333 },
    "Teresina": { lat: -5.092, lon: -42.8038 },
    "Vitória": { lat: -20.3155, lon: -40.3128 }
};

// Gerar lista de nomes para os selects
const CITIES = Object.keys(CITY_COORDS).sort();