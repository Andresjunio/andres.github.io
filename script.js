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

function setTextHtml(element, text){
    document.getElementById(element).innerHTML = text;
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
    feel free to send me a email in andres.dev@gmail.com or follow me on my networks: `);

    /*Education*/
    setTextHtml("education-title", "Education");
    setTextHtml("first-education-title", "[UFMG] Federal University of Minas Gerais, Brazil");
    setTextHtml("first-education-subtitle", "Mathematics degree (Feb 2022 - Dec 2025)");
    setTextHtml("second-education-title", "Cotemig College");
    setTextHtml("second-education-subtitle", "High school and technical course in informatics (Feb 2015 - Dec 2017).");
    
    /*Work experience*/
    setTextHtml("work-exp-title", "Professional experience");
    setTextHtml("first-work-exp-title", "Prodemge - Information Technology Company of State of Minas Gerais");
    setTextHtml("first-work-exp-subtitle", "Backend software engineer intern (Nov 2022 - Currently)");
    setTextHtml("first-work-exp-text", `Worked improve new features, updates and maintenances in ID cards system
    used in state of Minas Gerais.
    <br>
    <br>
    Skills: Java, Hibernate, JPA, SQL with IBM DB2, Git, Gitlab, OOP, Problem Solving.`);
    setTextHtml("second-work-exp-title", "Codebuddy - School of informatics for kids");
    setTextHtml("second-work-exp-subtitle", "Instructor (Jan 2022 - Ago 2022)");
    setTextHtml("second-work-exp-text", `Worked teaching children and teenagers concepts about informatics, like programming logic, 
    robotics, simple game development, and simple webpages development using HTML5, CSS3 and Javascript.
    <br>
    <br>
    Skills: Logic programming, good communication.`);
    
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
    setTextHtml("first-academic-exp-title", `<a href="https://trex.dcc.ufmg.br/en/">Theory Expertise Lab</a> - Computer Science Department UFMG`);
    setTextHtml("first-academic-exp-subtitle", "Undergraduate research student (Ago 2022 - Currently)");
    setTextHtml("first-academic-exp-text", `Working in a open problem related with algorithms and graph theory, oriented by Vinicius dos Santos. 
    <br>
    <br>
    Skills: Math, graph algorithms, english, research.`);
    
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
    me enviar um email no endereço andres.dev@gmail.com ou me seguir em minhas redes: `);

    /*Education*/
    setTextHtml("education-title", "Escolaridade");
    setTextHtml("first-education-title", "Universidade Federal de Minas Gerais");
    setTextHtml("first-education-subtitle", "Graduação em matemática (Jan 2022 - Dez 2025).");
    setTextHtml("second-education-title", "Colégio Cotemig");
    setTextHtml("second-education-subtitle", "Ensino médio e curso técnico em informática (Fev 2015 - Dez 2017).");
    
    /*Work experience*/
    setTextHtml("work-exp-title", "Experiência Profissional");
    setTextHtml("first-work-exp-title", "Prodemge - Companhia de Tecnologia da Informação do Estado de Minas Gerais");
    setTextHtml("first-work-exp-subtitle", "Estágiario de desenvolvimento backend (Nov 2022 - Atualmente)");
    setTextHtml("first-work-exp-text", `Trabalhei implementando novas funcionalidades, atualizações e manutenções no sistema
    de emissão de carteiras de identidade do estado de Minas Gerais.
    <br>
    <br>
    Competências: Java, Hibernate, JPA, SQL com IBM DB2, Git, Gitlab, POO, resolução de problemas.`);
    setTextHtml("second-work-exp-title", "Codebuddy - Escola de informática para crianças e adolescentes");
    setTextHtml("second-work-exp-subtitle", "Instrutor (Jan 2022 - Ago 2022)");
    setTextHtml("second-work-exp-text", `Trabalhei ensinando conceitos de informática para crianças e adolescentes, como lógica de 
    programação, robótica, desenvolvimento de jogos simples e desenvolvimento de páginas web simples com HTML5, CSS3 e Javascript.
    <br>
    <br>
    Competências: Lógica de programção, boa comunicação.`);
    
    /*Skills*/
    setTextHtml("skills-title", "Habilidades");
    setTextHtml("skills-text", `Java, Spring Boot, Banco de dados relacionais, Git, HTML5, CSS3, Typescript, SOLID, design de API's.
    Languages: Português (Nativo), Inglês (Intermediário).`);

    /*Projects*/
    setTextHtml("projects-title", "Projetos");
    setTextHtml("projects-text", "Em construção.");

    /*Projects*/
    setTextHtml("academic-exp-title", "Projetos Acadêmicos");
    setTextHtml("first-academic-exp-title", `<a href="https://trex.dcc.ufmg.br/en/">Theory Expertise Lab</a> - Departamento de Ciência da 
    Computação UFMG`);
    setTextHtml("first-academic-exp-subtitle", "Estudante de iniciação científica (Ago 2022 - Atualmente)");
    setTextHtml("first-academic-exp-text", `Trabalhando em um problema aberto relacionado à algoritmos e teoria dos grafos, orientado pelo professor Vinicius
    dos Santos.
    <br>
    <br>
    Competências: matemática, algoritmos, teoria dos grafos, inglês.`);

}