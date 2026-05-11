const ui = {
    data: {
        played: [
            { name: "Torrey Pines", val: 200, cost: 220, loc: "La Jolla, CA", lat: 32.905, lng: -117.244, img: "https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?q=80&w=800" },
            { name: "Cog Hill", val: 160, cost: 155, loc: "Lemont, IL", lat: 41.674, lng: -87.954, img: "https://images.unsplash.com/photo-1592919016381-f07bec536017?q=80&w=800" },
            { name: "Harbour Town", val: 380, cost: 450, loc: "Hilton Head, SC", lat: 32.137, lng: -80.812, img: "https://images.unsplash.com/photo-1623190289197-3914e7a82ec6?q=80&w=800" }
        ],
        drinks: [
            { name: "The Transfusion", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800", desc: "The Club Original. Vodka, Ginger Ale, Grape Juice, Lime." },
            { name: "Bloody Mary", img: "https://images.unsplash.com/photo-1541546339599-ecdb5ec540bc?q=80&w=800", desc: "Spicy back-nine recovery drink. Garnish is mandatory." }
        ]
    },

    navigate: function(target) {
        const home = document.getElementById('home-view');
        const dynamic = document.getElementById('dynamic-view');
        
        document.querySelectorAll('.dock-btn').forEach(b => {
            b.classList.toggle('active', b.innerText.toLowerCase().includes(target));
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
        // Creates the map centered on USA
        const map = L.map('map-canvas').setView([37.8, -96], 4);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        // Add pins for all played courses
        this.data.played.forEach(c => {
            L.marker([c.lat, c.lng]).addTo(map)
                .bindPopup(`<b>${c.name}</b><br>${c.loc}`);
        });
    },

    render: function(target, container) {
        container.innerHTML = `<h2 style="padding:20px;">${target.toUpperCase()}</h2>`;
        
        if (target === 'map') {
            container.innerHTML += `<div id="map-canvas"></div>`;
        } else if (target === 'played') {
            this.data.played.forEach(c => {
                container.innerHTML += `
                    <div class="card">
                        <img src="${c.img}" class="card-img">
                        <div class="card-body">
                            <h3>${c.name}</h3>
                            <p>${c.loc}</p>
                            <p><b>Value: $${c.val}</b> | Paid: $${c.cost}</p>
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
        }
    },

    init: function() {
        document.getElementById('quote-text').innerText = "Golf is a game of misses. He who misses the best wins.";
        document.getElementById('history-text').innerText = "May 11, 2026: The site is officially operational.";
    }
};

document.addEventListener('DOMContentLoaded', () => ui.init());
