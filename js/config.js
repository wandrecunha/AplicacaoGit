// Constantes de emissão (kg CO2 por km)
const TRANSPORT_MODES = {
    carro_gasolina: { label: "Carro (Gasolina)", factor: 0.120, icon: "🚗" },
    carro_eletrico: { label: "Carro Elétrico", factor: 0.018, icon: "⚡" },
    caminhao_diesel: { label: "Caminhão (Diesel)", factor: 0.450, icon: "🚛" },
    caminhao_eletrico: { label: "Caminhão Elétrico", factor: 0.080, icon: "🔋" },
    aviao: { label: "Avião Comercial", factor: 0.250, icon: "✈️" },
    trem_metro: { label: "Trem / Metrô", factor: 0.030, icon: "🚆" },
    moto: { label: "Motocicleta", factor: 0.060, icon: "🛵" }
};