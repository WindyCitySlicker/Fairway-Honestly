const ui = {
    state: {
        current: 'home',
        data: {
            reviews: [
                { name: "Torrey Pines", price: 220, value: 140, sg: "+2.4", speed: "11.5", staff: "🙂" },
                { name: "Riverton Pointe", price: 110, value: 95, sg: "-1.1", speed: "10.0", staff: "😁" }
            ],
            witb: [
                { cat: "Woods", model: "Stealth 2 Plus", detail: "9.0° Graphite Design" },
                { cat: "Flatstick", model: "L.A.B. Mezz.1", detail: "The Cheat Code" }
            ],
            beers: ["Founders All Day IPA", "Kona Big Wave", "Sierra Nevada Pale Ale", "Michelob Ultra", "Coors Banquet"]
        }
    },

    navigate: function(view) {
        this.state.current = view;
        const content = document.getElementById('dynamic-content');
        const home = document.getElementById('home-view');
        
        // Navigation visual update
        document.querySelectorAll('.dock-item').forEach(btn => {
            btn.classList.toggle('active', btn.innerText.toLowerCase().includes(view));
        });

        if(view === 'home') {
            home.style.display = 'block';
            content.innerHTML = '';
        } else {
            home.style.display = 'none';
            this.render(view, content);
        }
    },

    render: function(view, container) {
        container.innerHTML = '';
        if(view === 'reviews') {
            this.state.data.reviews.forEach(c => {
                const valPercent = (c.value / c.price) * 100;
                container.innerHTML += `
                    <div class="course-card">
                        <span class="kicker">COURSE REVIEW</span>
                        <h2>${c.name}</h2>
                        <p>Strokes Gained Difficulty: <strong>${c.sg}</strong></p>
                        <div class="value-meter-bg"><div class="value-meter-fill" style="width:${valPercent}%"></div></div>
                        <p style="font-size:0.8rem">Actual Cost: $${c.price} | <span style="color:var(--primary)">Honest Value: $${c.value}</span></p>
                    </div>`;
            });
        } else if(view === '19th') {
            container.innerHTML = `<div class="course-card"><h2>The Fairway & Flask</h2><p>Top Clubhouse Picks:</p>` + 
                this.state.data.beers.map(b => `<div class="beer-badge" style="background:#f0f4f8; padding:10px; margin-top:5px; border-radius:10px; font-weight:600;">${b}</div>`).join('') + `</div>`;
        } else if(view === 'witb') {
            this.state.data.witb.forEach(item => {
                container.innerHTML += `<div class="course-card"><span class="kicker">${item.cat}</span><h3>${item.model}</h3><p>${item.detail}</p></div>`;
            });
        }
    },

    init: function() {
        document.getElementById('quote-text').innerText = "The more I practice, the luckier I get.";
        document.getElementById('history-text').innerText = "May 11, 1911: Walter Hagen makes his professional debut.";
        document.getElementById('history-link').href = "https://www.worldgolfhalloffame.org/walter-hagen";
    }
};

document.addEventListener('DOMContentLoaded', () => ui.init());
