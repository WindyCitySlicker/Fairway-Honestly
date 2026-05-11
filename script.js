const dailyData = {
    quote: "Golf is a game in which you yell 'fore,' shoot six, and write down five.",
    author: "Paul Harvey",
    history: "May 11, 1911: Eleven-time major winner Walter Hagen makes his professional debut.",
    link: "https://www.worldgolfhalloffame.org/walter-hagen"
};

const courses = [
    { name: "Torrey Pines (North)", value: 140, cost: 220, speed: "11.5", walk: "9/10", staff: "🙂" },
    { name: "Riverton Pointe", value: 95, cost: 110, speed: "10.0", walk: "7/10", staff: "😐" },
    { name: "Harbour Town", value: 350, cost: 450, speed: "12.0", walk: "10/10", staff: "🙂" },
    { name: "Cog Hill (Dubsdread)", value: 155, cost: 155, speed: "11.0", walk: "6/10", staff: "😐" },
    { name: "Bethpage Black", value: 130, cost: 150, speed: "12.5", walk: "1/10", staff: "🙁" }
];

const topBeers = [
    "1. Founders All Day IPA (The Gold Standard)",
    "2. Kona Big Wave Golden Ale (Easy Drinking)",
    "3. Sierra Nevada Pale Ale (The Classic)",
    "4. Michelob Ultra (The Athlete's Choice)",
    "5. Coors Banquet (The Heritage Pick)"
];

let coursesLoaded = 0;
const maxCourses = courses.length;

function createCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
        <h3>${course.name}</h3>
        <p style="font-size: 0.8rem; color: gray;">Cost: $${course.cost} | Honest Value: $${course.value}</p>
        <div class="beer-list">
            <p><strong>Top 5 Clubhouse Beers:</strong></p>
            ${topBeers.map(beer => `<div class="beer-item">${beer}</div>`).join('')}
        </div>
    `;
    return card;
}

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('daily-quote').innerHTML = `"${dailyData.quote}" — <em>${dailyData.author}</em>`;
    document.getElementById('golf-history').innerText = dailyData.history;
    document.getElementById('history-link').href = dailyData.link;
    
    loadMore();
});

function loadMore() {
    const container = document.getElementById('feed-container');
    if (coursesLoaded < maxCourses) {
        container.appendChild(createCard(courses[coursesLoaded]));
        coursesLoaded++;
    } else {
        document.getElementById('end-message').style.display = 'block';
    }
}

// Scroll detection
window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        loadMore();
    }
};
