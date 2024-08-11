import dataCourses from "./dataCourses.js"
import dataSkills from "./dataSkills.js"

const courses = document.querySelector(".courses")
const skills = document.querySelector(".skills")
const itemMenu = document.querySelectorAll(".item__menu")
const btnMenu = document.querySelector("#btn__menu")
const ulMenu = document.querySelector(".nav ul")


dataCourses.forEach(course => {
    courses.innerHTML += `
        <div class="course__item" id="service_${course.id}">
            <span></span>
            <div>    
                    <h3>${course.name}</h3>
                    <p>${course.school}</p>
                    <p>${course.duration}</p>
            </div>
        </div>
    `
})

dataSkills.forEach(skill => {
    skills.innerHTML += `
         <div class="skill__item" id="skill_${skill.id}">
                <span>${skill.name}</span>
                <div class="progress">
                    <div class="progress__bar" style="width: ${skill.value}%">
                    </div>
                </div>
            
        </div>
    `
})



// menu 
itemMenu.forEach(item =>{
    item.addEventListener('click', (e)=>{
        const activeItemMenu = document.querySelector(".active")
        activeItemMenu.classList.remove("active")
        item.classList.add("active")
        ulMenu.classList.toggle("off")
    })
})

console.log(ulMenu.classList.value)

btnMenu.addEventListener('click',()=>{
    ulMenu.classList.toggle("off")
})