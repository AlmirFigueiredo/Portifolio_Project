function showSection(sectionId) {
    
    document.querySelectorAll('.section').forEach((section) => {
        section.style.display = 'none';
    });

    document.querySelectorAll('.nav-item').forEach((item) =>{
        item.classList.remove('active');
    });

    document.getElementById(sectionId).style.display = 'block';
    document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');
}
document.addEventListener('DOMContentLoaded', () => showSection('about'));