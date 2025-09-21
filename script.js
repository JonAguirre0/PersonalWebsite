const home = document.getElementById('home')
const resume = document.getElementById('resume')
const projects = document.getElementById('projects')
const about = document.getElementById('about')
const darkMode = document.getElementById('darkmode')
const githubImg = document.querySelector('.githubImg')
const githubImg2 = document.querySelector('.githubImg2')
const video1 = document.querySelector('.vid1')

home.addEventListener('click', () => {
    console.log('Home Clicked')
    document.getElementById('homeSection').scrollIntoView({behavior: 'smooth'})
})

resume.addEventListener('click', () => {
    console.log('Resume Clicked')
    document.getElementById('resumeSection').scrollIntoView({behavior: 'smooth'})
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
        githubImg2.style.filter = 'invert(1)'
    } else {
        darkMode.innerHTML = 'Dark Mode'
        githubImg.style.filter = 'invert(0)'
        githubImg2.style.filter = 'invert(0)'
    }
})