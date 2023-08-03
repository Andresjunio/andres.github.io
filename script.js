var buttonAboutMe = 'link-about-me';
var buttonEducation = 'link-education';
var buttonWorkExp = 'link-work-exp';
var buttonSkills = 'link-skills';
var buttonProjects = 'link-projects';
var buttonAcademicExp = 'link-academic-exp';

var displayAboutMe = 'about-me';
var displayEducation = 'education';
var displayWorkExp = 'work-exp';
var displaySkills = 'skills';
var displayProjects = 'projects';
var displayAcademicExp = 'academic-exp';

var displayList = [
    displayAboutMe,
    displayEducation,
    displayWorkExp,
    displaySkills,
    displayProjects, 
    displayAcademicExp
];

var buttonList = [
    buttonAboutMe,
    buttonEducation,
    buttonWorkExp,
    buttonSkills,
    buttonProjects,
    buttonAcademicExp
];

var currentButtonId = "link-about-me";
var currentDisplayId = "about-me";

function updateState(element, linkElement){
    document.getElementById(currentButtonId).className = "";
    document.getElementById(currentDisplayId).style.display = "none";
    currentButtonId = linkElement;
    currentDisplayId = element;
    document.getElementById(linkElement).className = "stylized-button";
    document.getElementById(element).style.display = "block";
}