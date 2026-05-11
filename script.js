/**
 * HONEST YARDAGE | MASTER ARCHITECT SCRIPT v2.1
 * Optimized for Mobile Performance & Stability
 */

const ui = {
    // 1. DATA DATABASE
    data: {
        reviews: [
            { name: "Torrey Pines (North)", price: 220, value: 200, sg: "+1.2", loc: "La Jolla, CA", img: "https://images.unsplash.com/photo-1596404313271-9df6084e8574?q=80&w=800" },
            { name: "Cog Hill (Dubsdread)", price: 155, value: 160, sg: "+3.8", loc: "Lemont, IL", img: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=800" },
            { name: "Harbour Town", price: 450, value: 380, sg: "+2.1", loc: "Hilton Head, SC", img: "https://images.unsplash.com/photo-1623190289197-3914e7a82ec6?q=80&w=800" },
            { name: "Riverton Pointe", price: 110, value: 105, sg: "-0.5", loc: "Hardeeville, SC", img: "images/image.jpeg" },
            { name: "Bethpage Black", price: 150, value: 300, sg: "+5.2", loc: "Farmingdale, NY", img: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=800" }
        ],
        drinks: [
            { name: "The Transfusion", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800", desc: "Vodka, Ginger Ale, Grape Juice. The only juice that matters on the back nine." },
            { name: "John Daly", img: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=800", desc: "Spiked Iced Tea & Lemonade. Simple, lethal, and refreshes better than a birdie." },
            { name: "Bloody Mary", img: "https://images.unsplash.com/photo-1541546339599-ecdb5ec540bc?q=80&w=800", desc: "The breakfast of champions. Spicy enough to wake up your short game." }
        ],
        witb: [
            { club: "Driver", model: "Stealth 2 Plus", spec: "9.0° Graphite Design" },
            { club: "Irons", model: "P790 4-PW", spec: "Dynamic Gold 105" },
            { club: "Putter", model: "L.A.B. Mezz.1", spec: "35 inch / 69° Lie" }
        ]
    },

    // 2. NAVIGATION ENGINE
    navigate: function(view) {
        const dynamicContent = document.getElementById('dynamic-content');
        const homeView = document.getElementById('home-view');
        
        if (!dynamicContent || !homeView) return;

        // Visual Active State for Buttons
        document.querySelectorAll('.dock-item').forEach(btn => {
            btn.classList.toggle('active', btn.innerText.toLowerCase().includes(view));
        });

        if (view === 'home') {
            homeView.style.display = 'block';
            dynamicContent.innerHTML = '';
            window.scrollTo(0, 0);
        } else {
            homeView.style.display = 'none';
            this.render(view, dynamicContent);
            window.scrollTo(0, 0);
        }
    },

    // 3. MASTER RENDERER
    render: function(view, container) {
        container.innerHTML = '';
        
        if (view === 'reviews') {
            this.data.reviews.forEach(c => {
                const valPct = Math.min((c.value / c.price) * 100, 100);
                container.innerHTML += `
                    <div class="course-card">
                        <div class="map-container" style="background: url('${c.img}') center/cover;">
                            <div class="map-dot"></div>
                        </div>
                        <span class="kicker">${c.loc}</span>
                        <h2>${c.name}</h2>
                        <div class="value-meter-bg"><div class="value-meter-fill" style="width:${valPct}%"></div></div>
                        <p style="font-size:0.8rem">Diff: <strong>${c.sg}</strong> | Value: $${c.value}</p>
                    </div>`;
            });
        } 
        
        else if (view === '19th') {
            this.data.drinks.forEach(d => {
                container.innerHTML += `
                    <div class="drink-card">
                        <img src="${d.img}" class="drink-img" onerror="this.src='https://via.placeholder.com/400x200?text=Golf+Drink'">
                        <div class="drink-details">
                            <span class="kicker">MUST HAVE</span>
                            <h3>${d.name}</h3>
                            <p style="font-size:0.85rem">${d.desc}</p>
                        </div>
                    </div>`;
            });
        } 
        
        else if (view === 'witb') {
            this.data.witb.forEach(i => {
                container.innerHTML += `
                    <div class="course-card">
                        <span class="kicker">EQUIPMENT SPEC</span>
                        <h3>${i.club}</h3>
                        <p style="font-weight:600;">${i.model}</p>
                        <p style="font-size:0.8rem; color:gray;">${i.spec}</p>
                    </div>`;
            });
        }
    },

    // 4. INITIALIZER
    init: function() {
        // Safe check for elements
        const q = document.getElementById('quote-text');
        const h = document.getElementById('history-text');
        const l = document.getElementById('history-link');

        if (q) q.innerText = "The more I practice, the luckier I get.";
        if (h) h.innerText = "May 11, 1911: Walter Hagen, the father of professional golf, makes his pro debut.";
        if (l) l.href = "https://www.worldgolfhalloffame.org/walter-hagen";
        
        console.log("Architect Mode: Online.");
    }
};

// Launch
document.addEventListener('DOMContentLoaded', () => ui.init());
