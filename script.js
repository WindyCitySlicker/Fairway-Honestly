const feedContainer = document.getElementById('feed-container');

// Sample data to simulate the infinite scroll reviews
const courseData = [
    { name: "Torrey Pines (North)", value: 140, cost: 220, speed: "11.5", walk: "9/10", staff: "🙂" },
    { name: "Riverton Pointe", value: 95, cost: 110, speed: "10.0", walk: "7/10", staff: "😐" },
    { name: "Harbour Town", value: 350, cost: 450, speed: "12.0", walk: "10/10", staff: "🙂" },
    { name: "Cog Hill (Dubsdread)", value: 155, cost: 155, speed: "11.0", walk: "6/10", staff: "😐" }
];

function createCourseCard(course) {
    const section = document.createElement('section');
    section.className = 'course-card';
    section.innerHTML = `
        <div class="card-content">
            <div class="card-header">
                <h2>${course.name}</h2>
                <span class="value-tag">Value: $${course.value} | Cost: $${course.cost}</span>
            </div>
            <p>The "Fairway & Flask" Review: Great atmosphere, but the halfway house was overpriced for a standard dog.</p>
            <div class="stats-grid">
                <div class="stat-item">Speed: ${course.speed}</div>
                <div class="stat-item">Walkability: ${course.walk}</div>
                <div class="stat-item">Staff: ${course.staff}</div>
            </div>
            <a href="#" style="color: var(--pacific-blue); font-weight: bold; text-decoration: none;">Book Tee Time &rarr;</a>
        </div>
    `;
    return section;
}

// Initial load
courseData.forEach(course => feedContainer.appendChild(createCourseCard(course)));

// Infinite Scroll Logic
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 800) {
        // In a real app, you'd fetch from an API here. 
        // We'll just loop the sample data for the demo.
        const randomCourse = courseData[Math.floor(Math.random() * courseData.length)];
        feedContainer.appendChild(createCourseCard(randomCourse));
    }
});
