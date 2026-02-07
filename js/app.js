document.addEventListener('DOMContentLoaded', () => {
    UI.init();

    UI.elements.btn.addEventListener('click', () => {
        const dist = parseFloat(UI.elements.dist.value);
        const transportKey = UI.elements.transport.value;

        if (!dist || dist <= 0) {
            alert("Por favor, selecione as cidades para calcular a distância.");
            return;
        }

        if (!transportKey) {
            alert("Por favor, selecione o meio de transporte.");
            return;
        }

        const mode = TRANSPORT_MODES[transportKey];
        const totalCO2 = Calculator.calculateCO2(dist, mode.factor);
        const trees = Calculator.estimateTrees(totalCO2);

        UI.renderResult(totalCO2, trees, mode.label);
    });
});