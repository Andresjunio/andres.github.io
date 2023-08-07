var sprite = document.getElementById("sprite");

function staticSprite(){
    sprite.src = "assets/static-sprite.png";
}

function changeSprite(){
    sprite.src = "assets/animation.gif";
    setTimeout(staticSprite, 1500);
}

var currentButtonId = "link-about-me";
var currentDisplayId = "about-me";

function updateState(element, linkElement){
    document.getElementById(currentButtonId).className = "";
    document.getElementById(currentDisplayId).style.display = "none";
    currentButtonId = linkElement;
    currentDisplayId = element;
    document.getElementById(linkElement).className = "stylized-button";
    document.getElementById(element).style.display = "block";
    changeSprite();
}

function setTextHtml(element, text){
    document.getElementById(element).innerHTML = text;
}

function selectLanguage(){
    var select = document.getElementById("languages");
    var selectedOption = select.options[select.selectedIndex].value;

    switch(selectedOption){
        case "pt":
            portuguese();
            break;
        case "en":
            english();
    }
}

function english(){
    /*left content*/
    setTextHtml("caption", "Java software engineer and Math student");
    setTextHtml("link-about-me", `About me<i class="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i>`);
    setTextHtml("link-education", `Education<i class="fa-solid fa-graduation-cap" style="color: #ffffff;"></i>`);
    setTextHtml("link-work-exp", `Work experience<i class="fa-regular fa-keyboard" style="color: #ffffff;"></i>`);
    setTextHtml("link-skills", `Skills<i class="fa-solid fa-code" style="color: #ffffff;"></i>`);
    setTextHtml("link-projects", `Projects<i class="fa-sharp fa-solid fa-puzzle-piece"></i>`);
    setTextHtml("link-academic-exp", `Academic experience<i class="fa-regular fa-file" style="color: #ffffff;"></i>`);

    /*main content*/
    /*about me*/
    setTextHtml("about-me-title", "About me");
    setTextHtml("about-me-text", `Hey, welcome to me website! My name is Andres, i have 23 yo and i'm a software engineer
    and mathematics student at Federal University of Minas Gerais. I start coding at 17 yo, 
    and since then i've never stopped. I like to solve logic related problems, and find this 
    studying math and software engineering. Also, i'm a computer science enthusiast, and i'm 
    interested in learn about algorithms and data structures applications in real problems, 
    graph theory and related topics.
    <br>
    <br>
    My strong programming background is in Java and backend tools. If you wanna talk with me, 
    feel free to send me a email or follow me on my networks: `);

    /*Education*/
    setTextHtml("education-title", "Education");
    setTextHtml("first-education-title", "Federal University of Minas Gerais (UFMG), Brazil");
    setTextHtml("first-education-subtitle", "Mathematics degree (Feb 2022 - Dec 2025)");
    setTextHtml("second-education-title", "Cotemig College");
    setTextHtml("second-education-subtitle", "High school and technical course in informatics (Feb 2015 - Dec 2017).");
    
    /*Work experience*/
    setTextHtml("work-exp-title", "Professional experience");
    setTextHtml("first-work-exp-title", "Backend software engineer intern");
    setTextHtml("first-work-exp-subtitle", "Prodemge - Information Technology Company of State of Minas Gerais (Nov 2022 - Currently)");
    setTextHtml("first-work-exp-text", `Worked improve new features, updates and maintenances in ID cards system
    used in state of Minas Gerais.`);
    setTextHtml("first-work-skills","Skills: Java, Hibernate, JPA, SQL with IBM DB2, Git, Gitlab, OOP, Problem solving.");
    setTextHtml("second-work-exp-title", "Instructor");
    setTextHtml("second-work-exp-subtitle", "Codebuddy - School of informatics for children and teenagers (Jan 2022 - Ago 2022)");
    setTextHtml("second-work-exp-text", `Worked teaching children and teenagers concepts about informatics, like programming logic, 
    robotics, simple game development, and simple webpages development using HTML5, CSS3 and Javascript.`);
    setTextHtml("second-work-skills", "Skills: Logic programming, good communication.");

    /*Skills*/
    setTextHtml("skills-title", "Skills");
    setTextHtml("skills-text", `Java, Spring Boot, Relational Databases, Git, HTML, CSS, Typescript, SOLID, API's design. 
    <br>
    Languages: Brazilian Portuguese (Native), English (Intermediate).`);

    /*Projects*/
    setTextHtml("projects-title", "Projects");
    setTextHtml("projects-text", "Under building.");

    /*Projects*/
    setTextHtml("academic-exp-title", "Academic experience");
    setTextHtml("first-academic-exp-title", "Undergraduate research stutent");
    setTextHtml("first-academic-exp-subtitle", `<a class="trex-link" target="_blank" href="https://trex.dcc.ufmg.br/en/">Theory Expertise Lab</a> -
    Computer Science Department UFMG (Ago 2022 - Currently)`);
    setTextHtml("first-academic-exp-text", `Working in a open problem related with algorithms and graph theory, oriented by Vinicius dos Santos. 
    <br>
    <br>
    <span class="academic-skills">Skills: Math, graph algorithms, english, research.</span>`);
    
    setTextHtml("copyrigth", "&#0169 Andres Junio S. Souza - 2023 (website under building)");

    changeSprite();
}

function portuguese(){
    /*left content */
    setTextHtml("caption", "Desenvolvedor Java e estudante de matemática");
    setTextHtml("link-about-me", `Sobre mim<i class="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i>`);
    setTextHtml("link-education", `Escolaridade<i class="fa-solid fa-graduation-cap" style="color: #ffffff;"></i>`);
    setTextHtml("link-work-exp", `Experiência profissional<i class="fa-regular fa-keyboard" style="color: #ffffff;"></i>`);
    setTextHtml("link-skills", `Habilidades<i class="fa-solid fa-code" style="color: #ffffff;"></i>`);
    setTextHtml("link-projects", `Projetos<i class="fa-sharp fa-solid fa-puzzle-piece"></i>`);
    setTextHtml("link-academic-exp", `Experiência acadêmica<i class="fa-regular fa-file" style="color: #ffffff;"></i>`);
    
    /*main content*/

    /*about me*/
    setTextHtml("about-me-title", "Sobre mim");
    setTextHtml("about-me-text", `Olá, bem vindo(a) à minha página. Meu nome é Andres, tenho 23 anos e sou desenvolvedor e estudande de 
    matemática na Universidade Federal de Minas Gerais. Eu comecei a programar aos 17 anos e, desde então, nunca mais parei. Gosto de resolver
    problemas que envolvem raciocínio lógico, e encontrei esses desafios estudando matemática e desenvolvimento de software. Também sou entusiasta
    em ciência da computação, e tenho interesse em aprender sobre aplicações de algoritmos e estrutura de dados em problemas reais, teoria dos grafos
    e temas afins. 
    <br>
    <br>
    Minha maior experiência em programação é com Java, e ferramentas do ecossistema backend. Caso você queira falar comigo, fique à vontade para 
    me enviar um email ou me seguir em minhas redes: `);

    /*Education*/
    setTextHtml("education-title", "Escolaridade");
    setTextHtml("first-education-title", "Universidade Federal de Minas Gerais (UFMG)");
    setTextHtml("first-education-subtitle", "Graduação em matemática (Jan 2022 - Dez 2025).");
    setTextHtml("second-education-title", "Colégio Cotemig");
    setTextHtml("second-education-subtitle", "Ensino médio e curso técnico em informática (Fev 2015 - Dez 2017).");
    
    /*Work experience*/
    setTextHtml("work-exp-title", "Experiência Profissional");
    setTextHtml("first-work-exp-title", "Estagiário de desenvolvimento backend");
    setTextHtml("first-work-exp-subtitle", "Prodemge - Companhia de Tecnologia da Informação do Estado de Minas Gerais (Nov 2022 - Atualmente)");
    setTextHtml("first-work-exp-text", `Trabalhei implementando novas funcionalidades, atualizações e manutenções no sistema
    de emissão de carteiras de identidade do estado de Minas Gerais.`)
    setTextHtml("first-work-skills","Competências: Java, Hibernate, JPA, SQL com IBM DB2, Git, Gitlab, POO, Resolução de problemas.");
    setTextHtml("second-work-exp-title", "Instrutor");
    setTextHtml("second-work-exp-subtitle", "Codebuddy - Escola de informática para crianças e adolescentes (Jan 2022 - Ago 2022)");
    setTextHtml("second-work-exp-text", `Trabalhei ensinando conceitos de informática para crianças e adolescentes, como lógica de 
    programação, robótica, desenvolvimento de jogos simples e desenvolvimento de páginas web simples com HTML5, CSS3 e Javascript.`);
    setTextHtml("second-work-skills", "Competências: Lógica de programação, Boa comunicação.");
    
    /*Skills*/
    setTextHtml("skills-title", "Habilidades");
    setTextHtml("skills-text", `Java, Spring Boot, Banco de dados relacionais, Git, HTML5, CSS3, Typescript, SOLID, design de API's.
    <br>
    Línguas: Português (Nativo), Inglês (Intermediário).`);

    /*Projects*/
    setTextHtml("projects-title", "Projetos");
    setTextHtml("projects-text", "Em construção.");

    /*Projects*/
    setTextHtml("academic-exp-title", "Projetos Acadêmicos");
    setTextHtml("first-academic-exp-title", "Estudante de iniciação científica");
    setTextHtml("first-academic-exp-subtitle", `<a class="trex-link" target="_blank" href="https://trex.dcc.ufmg.br/en/">Theory Expertise Lab</a> -
    Departamento de Ciência da Computação UFMG (Ago 2022 - Atualmente)`);
    setTextHtml("first-academic-exp-text", `Trabalhando em um problema aberto relacionado à algoritmos e teoria dos grafos, orientado pelo professor Vinicius
    dos Santos.
    <br>
    <br>
    <span class="academic-skills">Competências: Matemática, Algoritmos em grafos, Inglês, Pesquisa.</span>`);
 
    setTextHtml("copyrigth", "&#0169 Andres Junio S. Souza - 2023 (site em construção)");
    changeSprite();
}