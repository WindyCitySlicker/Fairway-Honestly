const ui = {
    state: {
        current: 'home',
        data: {
            reviews: [
                { name: "Torrey Pines (North)", price: 220, value: 200, sg: "+1.2", location: "La Jolla, CA", img: "[attachment_2](attachment)" },
                { name: "Cog Hill (Dubsdread)", price: 155, value: 160, sg: "+3.8", location: "Lemont, IL", img: "[attachment_0](attachment)" },
                { name: "Harbour Town", price: 450, value: 380, sg: "+2.1", location: "Hilton Head, SC", img: "[attachment_3](attachment)" },
                { name: "Riverton Pointe", price: 110, value: 105, sg: "-0.5", location: "Hardeeville, SC", img: "images/image.jpeg" },
                { name: "Bethpage Black", price: 150, value: 300, sg: "+5.2", location: "Farmingdale, NY", img: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800" }
            ],
            drinks: [
                { name: "The Transfusion", img: "[attachment_1](attachment)", desc: "The undisputed king. Vodka, ginger ale, and a heavy splash of grape juice." },
                { name: "John Daly", img: "[attachment_4](attachment)", desc: "An Arnold Palmer with a kick. Spiked iced tea and lemonade for those hot back-nines." },
                { name: "Bloody Mary", img: "[attachment_5](attachment)", desc: "The early tee-time savior. Spicy, salty, and topped with a full salad." }
            ]
        }
    },

    render: function(view, container) {
        container.innerHTML = '';
        if(view === 'reviews') {
            this.state.data.reviews.forEach(c => {
                const valPercent = (c.value / c.price) * 100;
                container.innerHTML += `
                    <div class="course-card">
                        <div class="map-container">
                            <img src="${c.img}" style="width:100%; height:100%; object-fit:cover; opacity:0.6;">
                            <div class="map-dot"></div>
                        </div>
                        <span class="kicker">${c.location}</span>
                        <h2>${c.name}</h2>
                        <div class="value-meter-bg"><div class="value-meter-fill" style="width:${Math.min(valPercent, 100)}%"></div></div>
                        <p style="font-size:0.85rem">Difficulty: <strong>${c.sg}</strong> | Value: $${c.value}</p>
                    </div>`;
            });
        } else if(view === '19th') {
            this.state.data.drinks.forEach(d => {
                container.innerHTML += `
                    <div class="drink-card">
                        <img src="${d.img}" class="drink-img">
                        <div class="drink-details">
                            <h3>${d.name}</h3>
                            <p style="font-size:0.85rem; color:var(--text);">${d.desc}</p>
                        </div>
                    </div>`;
            });
        }
    },
    // ... rest of navigate and init functions from previous turn
};
