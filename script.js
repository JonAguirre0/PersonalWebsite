const home = document.getElementById('home')
const skills = document.getElementById('skills')
const projects = document.getElementById('projects')
const about = document.getElementById('about')
const darkMode = document.getElementById('darkmode')
const githubImg = document.querySelector('.githubImg')
const githubImg2 = document.querySelector('.githubImg2')
const githubBtn = document.querySelector('.githubBtn')
const resumeBtn = document.querySelector('.resumeBtn')
const video1 = document.querySelector('.vid1')

home.addEventListener('click', () => {
    console.log('Home Clicked')
    document.getElementById('homeSection').scrollIntoView({behavior: 'smooth'})
})

skills.addEventListener('click', () => {
    console.log('Skills Clicked')
    document.getElementById('skillsSection').scrollIntoView({behavior: 'smooth'})
})

projects.addEventListener('click', () => {
    console.log('Projects Clicked')
    document.getElementById('projectsSection').scrollIntoView({behavior: 'smooth'})
})

about.addEventListener('click', () => {
    console.log('About Clicked')
    document.getElementById('aboutSection').scrollIntoView({behavior: 'smooth'})
})

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme')) {
        darkMode.innerHTML = 'Light Mode'
        githubImg.style.filter = 'invert(1)'
        // githubImg2.style.filter = 'invert(1)'
    } else {
        darkMode.innerHTML = 'Dark Mode'
        githubImg.style.filter = 'invert(0)'
        // githubImg2.style.filter = 'invert(0)'
    }
})

githubBtn.addEventListener('click', () => {
    window.open('https://github.com/JonAguirre0', '_blank')
})

resumeBtn.addEventListener('click', () => {
    window.open('https://docs.google.com/document/d/1HhKYJfpNmp3MKKt3fLDBxhoFcogyUbv-jtSl79XdjK0/edit?usp=sharing', '_blank')
})