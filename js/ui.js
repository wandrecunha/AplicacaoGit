const UI = {
    elements: {
        origin: document.getElementById('origin-city'),
        dest: document.getElementById('destination-city'),
        dist: document.getElementById('distance-input'),
        manual: document.getElementById('manual-toggle'),
        transport: document.getElementById('transport-mode'),
        btn: document.getElementById('calculate-btn'),
        result: document.getElementById('result-box')
    },

    init: function() {
        CITIES.forEach(city => {
            this.elements.origin.add(new Option(city, city));
            this.elements.dest.add(new Option(city, city));
        });

        Object.entries(TRANSPORT_MODES).forEach(([key, val]) => {
            this.elements.transport.add(new Option(`${val.icon} ${val.label}`, key));
        });

        // Eventos: Atualiza distância assim que as cidades são escolhidas
        this.elements.origin.addEventListener('change', () => this.updateDistance());
        this.elements.dest.addEventListener('change', () => this.updateDistance());
        
        this.elements.manual.addEventListener('change', (e) => {
            this.elements.dist.disabled = !e.target.checked;
            if(!e.target.checked) this.updateDistance();
        });
    },

    updateDistance: function() {
        if (this.elements.manual.checked) return;
        
        const cityA = this.elements.origin.value;
        const cityB = this.elements.dest.value;

        if (cityA && cityB) {
            if (cityA === cityB) {
                alert("A cidade de origem e destino não podem ser as mesmas.");
                this.elements.dest.value = "";
                this.elements.dist.value = "";
                return;
            }
            // Chama o novo cálculo geográfico
            const km = Calculator.getDistance(cityA, cityB);
            this.elements.dist.value = km;
        }
    },

    renderResult: function(co2, trees, transportLabel) {
        this.elements.result.innerHTML = `
            <small style="color: #2563eb; font-weight: 800; letter-spacing: 1px;">RELATÓRIO DE IMPACTO</small>
            <div class="result-value" style="font-size: 2.5rem; font-weight: 800; color: #0f172a; margin: 10px 0;">
                ${co2} <span style="font-size: 1rem; color: #64748b; font-weight: 400;">kg CO₂</span>
            </div>
            <p style="font-size: 0.9rem; color: #475569; line-height: 1.6; background: #fff; padding: 15px; border-radius: 10px; border: 1px solid #e2e8f0;">
                🌿 Utilizando <strong>${transportLabel}</strong>, seu trajeto gera um impacto que exige <strong>${trees} árvore(s)</strong> crescendo por um ano para ser neutralizado.
            </p>
        `;
        this.elements.result.classList.remove('hidden');
    }
};