const Calculator = {
    // Calcula distância entre dois pontos (Haversine)
    getDistance: function(city1, city2) {
        const c1 = CITY_COORDS[city1];
        const c2 = CITY_COORDS[city2];
        if (!c1 || !c2) return 0;

        const R = 6371; // Raio da Terra em km
        const dLat = (c2.lat - c1.lat) * Math.PI / 180;
        const dLon = (c2.lon - c1.lon) * Math.PI / 180;
        
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(c1.lat * Math.PI / 180) * Math.cos(c2.lat * Math.PI / 180) * 
                  Math.sin(dLon/2) * Math.sin(dLon/2);
        
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const distance = R * c;

        // Multiplicamos por 1.25 para simular curvas de estradas/rotas reais
        return Math.round(distance * 1.25);
    },

    calculateCO2: function(dist, factor) {
        return (dist * factor).toFixed(2);
    },

    estimateTrees: function(co2) {
        return Math.ceil(co2 / 15);
    }
};