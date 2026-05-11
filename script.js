const ui = {
    data: {
        played: [
            { name: "Torrey Pines", val: 200, cost: 220, sg: "+1.2", loc: "La Jolla, CA", img: "https://images.unsplash.com/photo-1596404313271-9df6084e8574?q=80&w=800" },
            { name: "Cog Hill", val: 165, cost: 155, sg: "+3.8", loc: "Lemont, IL", img: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=800" },
            { name: "Riverton Pointe", val: 110, cost: 105, sg: "-0.5", loc: "Hardeeville, SC", img: "https://images.unsplash.com/photo-1592919016381-f07bec536017?q=80&w=800" }
        ],
        lab: [
            { activity: "Weightlifting", metric: "1RM Bench: 215 lbs", status: "In-Protocol" },
            { activity: "Soccer", metric: "Position: CM", status: "Match Tonight" },
            { activity: "Supplementation", metric: "Magnesium Bisglycinate", status: "7:30 PM Cycle" }
        ],
        journal: [
            { spot: "Greenville, SC", date: "April 16-20", score: "8.5/10", note: "Move Scouting: High viability." },
            { spot: "NYC (SoHo)", date: "June 11", score: "TBD", note: "Birthday Celebration Dinner." }
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
        }
        window.scrollTo(0,0);
    },

    render: function(target, container) {
        container.innerHTML = `<h2 style="padding:20px; font-family:'Playfair Display'; color:white;">${target.toUpperCase()}</h2>`;
        
        if (target === 'played') {
            this.data.played.forEach(c => {
                const valPct = (c.val / c.cost) * 100;
                container.innerHTML += `
                    <div class="card">
                        <img src="${c.img}" style="width:100%; height:160px; object-fit:cover;">
                        <div class="card-content">
                            <div class="sg-badge">SG: ${c.sg}</div>
                            <h3 style="margin-top:10px">${c.name}</h3>
                            <p style="font-size:0.7rem; color:gray">${c.loc}</p>
                            <div class="value-bar-bg"><div class="value-bar-fill" style="width:${Math.min(valPct, 100)}%"></div></div>
                            <p style="font-size:0.8rem"><b>Value: $${c.val}</b> | Paid: $${c.cost}</p>
                        </div>
                    </div>`;
            });
        } else if (target === 'lab') {
            this.data.lab.forEach(l => {
                container.innerHTML += `<div class="card"><div class="card-content"><h3>${l.activity}</h3><p style="font-size:1.2rem; font-weight:900">${l.metric}</p><p style="color:var(--primary); font-size:0.7rem">${l.status}</p></div></div>`;
            });
        } else if (target === 'journal') {
            this.data.journal.forEach(j => {
                container.innerHTML += `<div class="card"><div class="card-content"><h3>${j.spot}</h3><p>${j.date}</p><p><b>Viability: ${j.score}</b></p><p style="font-size:0.8rem; color:gray">${j.note}</p></div></div>`;
            });
        }
    },

    init: function() {
        document.getElementById('quote-text').innerText = "The more I practice, the luckier I get.";
        console.log("Architect Mode: Signature Production.");
    }
};

document.addEventListener('DOMContentLoaded', () => ui.init());
