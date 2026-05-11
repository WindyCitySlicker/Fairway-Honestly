const appState = {
    view: 'home',
    courses: [
        { name: "Torrey Pines", price: 220, value: 140, sg: "+2.4" },
        { name: "Riverton Pointe", price: 110, value: 95, sg: "-1.1" }
    ]
};

// 1. Navigation Controller
const navButtons = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        
        // Update UI
        navButtons.forEach(b => b.classList.remove('active'));
        views.forEach(v => v.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});

// 2. Strokes Gained Logic (The Architect's Edge)
// We use 'Strokes Gained' to show true course difficulty.


function renderReviews() {
    const feed = document.getElementById('course-feed');
    appState.courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <h3>${course.name}</h3>
            <div class="stats-bar">
                <span>SG Difficulty: ${course.sg}</span>
                <div class="value-meter">
                    <div class="fill" style="width: ${(course.value/course.price)*100}%"></div>
                </div>
            </div>
        `;
        feed.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderReviews);
