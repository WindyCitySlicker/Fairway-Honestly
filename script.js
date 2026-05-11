const ui = {
    data: {
        played: [
            { name: "Torrey Pines (North)", loc: "La Jolla, CA", price: 220, value: 200, sg: "+1.2", lat: 32.905, lng: -117.244, img: "https://images.unsplash.com/photo-1596404313271-9df6084e8574?q=80&w=800" },
            { name: "Cog Hill (Dubsdread)", loc: "Lemont, IL", price: 155, value: 160, sg: "+3.8", lat: 41.674, lng: -87.954, img: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=800" },
            { name: "Harbour Town", loc: "Hilton Head, SC", price: 450, value: 380, sg: "+2.1", lat: 32.137, lng: -80.812, img: "https://images.unsplash.com/photo-1623190289197-3914e7a82ec6?q=80&w=800" },
            { name: "Bethpage Black", loc: "Farmingdale, NY", price: 150, value: 300, sg: "+5.2", lat: 40.742, lng: -73.456, img: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=800" },
            { name: "Riverton Pointe", loc: "Hardeeville, SC", price: 110, value: 105, sg: "-0.5", lat: 32.285, lng: -81.018, img: "https://images.unsplash.com/photo-1592919016381-f07bec536017?q=80&w=800" }
        ],
        drinks: [
            { name: "The Transfusion", desc: "The Gold Standard. Vodka, Ginger Ale, and Grape Juice.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800" },
            { name: "John Daly", desc: "Iced Tea, Lemonade, and Vodka. A lethal back-nine pivot.", img: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=800" },
            { name: "Azalea Cocktail", desc: "Gin, pineapple juice, and grenadine. The taste of Augusta.", img: "https://images.unsplash.com/photo-1536935338212-db2c2d366c84?q=80&w=800" }
        ],
        witb: [
            { club: "Driver", model: "Stealth 2 Plus", spec: "9.0° Graphite Design" },
            { club: "Putter", model: "L.A.B. Mezz.1", spec: "35 inch / 69° Lie" }
        ]
    },

    navigate: function(target) {
        const home = document.getElementById('home-view');
        const dynamic = document.getElementById('dynamic-view');
        
        document.querySelectorAll('.dock-btn').forEach(b => {
            b.classList.toggle('active', b.innerText.toLowerCase().includes(target.replace('hole', '')));
        });

        if (target === 'home') {
            home.style.display = 'block';
            dynamic.innerHTML = '';
        } else {
            home.style.display = 'none';
            this.render(target, dynamic);
            if (target === 'map') this.initMap();
        }
        window.scrollTo(0,0);
    },

    initMap: function() {
        const map = L.map('map-canvas').setView([37.8, -96], 4);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        this.data.played.forEach(c => {
            L.marker([c.lat, c.lng]).addTo(map).bindPopup(`<b>${c.name}</b><br>${c.loc}`);
        });
    },

    render: function(target, container) {
        container.innerHTML = `<h2 style="padding:20px; font-family:'Playfair Display'">${target.toUpperCase()}</h2>`;
        
        if (target === 'played') {
            this.data.played.forEach(c => {
                const valPct = Math.min((c.value / c.price) * 100, 100);
                container.innerHTML += `
                    <div class="card">
                        <img src="${c.img}" class="card-img">
                        <div class="card-body">
                            <span class="kicker">Difficulty: SG ${c.sg}</span>
                            <h3>${c.name}</h3>
                            <div class="value-bar-bg"><div class="value-bar-fill" style="width:${valPct}%"></div></div>
                            <p style="font-size:0.8rem"><b>Value: $${c.value}</b> | Cost: $${c.price}</p>
                        </div>
                    </div>`;
            });
        } else if (target === '19th') {
            this.data.drinks.forEach(d => {
                container.innerHTML += `
                    <div class="card">
                        <img src="${d.img}" class="card-img">
                        <div class="card-body"><h3>${d.name}</h3><p>${d.desc}</p></div>
                    </div>`;
            });
        } else if (target === 'map') {
            container.innerHTML += `<div id="map-canvas"></div>`;
        } else if (target === 'witb') {
            this.data.witb.forEach(w => {
                container.innerHTML += `<div class="card"><div class="card-body"><h3>${w.club}</h3><p>${w.model}</p><span>${w.spec}</span></div></div>`;
            });
        }
    },

    init: function() {
        document.getElementById('quote-text').innerText = "The most important shot in golf is the next one.";
        document.getElementById('history-text').innerText = "May 11, 2026: Proving that the 'Honest Value' of a round starts at the first tee.";
    }
};

document.addEventListener('DOMContentLoaded', () => ui.init());

