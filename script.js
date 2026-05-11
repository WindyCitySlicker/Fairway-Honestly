const ui = {
    data: {
        played: [
            { name: "Torrey Pines", val: 200, cost: 220, loc: "La Jolla, CA" },
            { name: "Bethpage Black", val: 300, cost: 150, loc: "Farmingdale, NY" },
            { name: "Cog Hill", val: 160, cost: 155, loc: "Lemont, IL" },
            { name: "Harbour Town", val: 380, cost: 450, loc: "Hilton Head, SC" },
            { name: "Riverton Pointe", val: 105, cost: 110, loc: "Hardeeville, SC" }
        ],
        drinks: [
            { name: "Transfusion", desc: "The Club Classic. Vodka, Ginger Ale, Grape Juice." },
            { name: "Spiked Arnold Palmer", desc: "Tea, Lemonade, and a Birdie-juice kicker." }
        ],
        witb: [{ club: "Putter", model: "L.A.B. Mezz.1", note: "Cheat code." }],
        bests: [
            { feat: "Longest Drive", stat: "312 Yards", loc: "Riverton Pointe #14" },
            { feat: "Lowest Round", stat: "78", loc: "Cog Hill" }
        ]
    },

    navigate: function(target) {
        const home = document.getElementById('home-view');
        const dynamic = document.getElementById('dynamic-view');
        
        // Toggle Active Buttons
        document.querySelectorAll('.dock-btn').forEach(b => {
            b.classList.toggle('active', b.innerText.toLowerCase().includes(target));
        });

        if (target === 'home') {
            home.style.display = 'block';
            dynamic.innerHTML = '';
        } else {
            home.style.display = 'none';
            this.render(target, dynamic);
        }
        window.scrollTo(0,0);
    },

    render: function(target, container) {
        container.innerHTML = `<h2 style="margin:20px; font-family:'Playfair Display'">${target.toUpperCase()}</h2>`;
        
        if (target === 'played') {
            this.data.played.forEach(c => {
                container.innerHTML += `<div class="card"><h3>${c.name}</h3><p>${c.loc}</p><p>Value: $${c.val} | Cost: $${c.cost}</p></div>`;
            });
        } else if (target === 'map') {
            container.innerHTML += `<div class="card" style="height:300px; background:#e2e8f0; display:flex; align-items:center; justify-content:center;">[Interactive GPS Map Placeholder]</div>`;
        } else if (target === 'best') {
            this.data.bests.forEach(b => {
                container.innerHTML += `<div class="card"><h3>${b.feat}</h3><p style="font-size:1.5rem; font-weight:900; color:var(--primary)">${b.stat}</p><p>${b.loc}</p></div>`;
            });
        } else if (target === '19th') {
            this.data.drinks.forEach(d => {
                container.innerHTML += `<div class="card"><h3>${d.name}</h3><p>${d.desc}</p></div>`;
            });
        } else if (target === 'witb') {
            this.data.witb.forEach(w => {
                container.innerHTML += `<div class="card"><h3>${w.club}</h3><p>${w.model}</p><span>${w.note}</span></div>`;
            });
        }
    },

    init: function() {
        document.getElementById('quote-text').innerText = "The more I practice, the luckier I get.";
        document.getElementById('history-text').innerText = "May 11, 1911: Walter Hagen makes his professional debut.";
        console.log("Honest Yardage Pro initialized.");
    }
};

document.addEventListener('DOMContentLoaded', () => ui.init());
