
window.onload = function() {
    window.scrollTo(0, 0);
}


if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', function() {
    // Force scroll to top
    window.scrollTo(0, 0);
    
    // Intersection Observer for section animations
    const sections = document.querySelectorAll('.section-hidden');
    
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation when entering viewport (scrolling down or up)
                setTimeout(() => {
                    entry.target.classList.add('section-show');
                    entry.target.classList.remove('section-hidden');
                }, 100);
            } else {
                
                entry.target.classList.remove('section-show');
                
               
                setTimeout(() => {
                    if (!entry.isIntersecting) {
                        entry.target.classList.add('section-hidden');
                    }
                }, 100);
            }
        });
    }, {
        root: null,
        threshold: 0.2,
        rootMargin: '-50px'
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

   
    const skillItems = document.querySelectorAll('.skill-item');
    const toolsContent = document.querySelector('.tools-content');

    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const tools = this.getAttribute('data-tools');
            toolsContent.textContent = tools;
            toolsContent.style.opacity = '1';
            toolsContent.classList.add('active');
        });

        item.addEventListener('mouseleave', function() {
            toolsContent.style.opacity = '0';
            toolsContent.classList.remove('active');
        });
    });
});

function updateClock() {
    const now = new Date();
    
    
    const options = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    
    const dateOptions = {
        timeZone: 'Asia/Manila',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
   
    let time = now.toLocaleTimeString('en-US', options);
    time = time.replace(/:/g, '<span>:</span>');
    
    timeElement.innerHTML = time; 
    dateElement.textContent = now.toLocaleDateString('en-US', dateOptions);
}


setInterval(updateClock, 1000);
updateClock(); 

document.addEventListener('DOMContentLoaded', function() {
    const projectDev = document.getElementById('project-development');
    const projectDetails = document.getElementById('project-details');
    const aiImage = document.getElementById('ai-image');
    const awsImage = document.getElementById('aws-image');

    // Toggle the visibility of the project details when clicked
    projectDev.addEventListener('click', function() {
        projectDetails.classList.toggle('show');
    });

    // Add zoom effect on image click
    aiImage.addEventListener('click', function() {
        this.classList.toggle('zoomed');
    });

    awsImage.addEventListener('click', function() {
        this.classList.toggle('zoomed');
    });
});

