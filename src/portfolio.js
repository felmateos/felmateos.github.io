/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "felmateos",
  title: "Oie, me chamo Felipe Castro",
  subTitle: emoji(
    "Sou curioso 🙈, aficionado por Ciência de Dados 🎲 e aberto para novas experiências 🚀"
  ),
  resumeLink:
    "https://github.com/felmateos/USP/blob/main/RESUME/Curriculo.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/felmateos",
  linkedin: "https://www.linkedin.com/in/felmateos/",
  gmail: "felmateos@usp.br",
  medium: "https://medium.com/@felmateos",
  kaggle: "https://www.kaggle.com/felmateos",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "O que eu faço?",
  subTitle: "SEMPRE EM BUSCA DE USAR A TECNOLOGIA PARA SOLUCIONAR PROBLEMAS DO MUNDO REAL! 🌎✨",
  skills: [
    emoji(
      "⚡ Analiso conjuntos de dados e treino modelos de Inteligência Artificial"
    ),
    emoji("⚡ Crio interfaces interativas e intuitivas"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
        skillName: "python",
        fontAwesomeClassname: "fab fa-python"
    },
    {
        skillName: "databricks",
        fontAwesomeClassname: "fas fa-database"
    },
    {
        skillName: "docker",
        fontAwesomeClassname: "fab fa-docker"
    },
    {
        skillName: "java",
        fontAwesomeClassname: "fab fa-java"
    },
    {
        skillName: "SQL",
        fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
        skillName: "Streamlit",
        fontAwesomeClassname: "fas fa-crown"
    },
    {
      skillName: "trello",
      fontAwesomeClassname: "fab fa-trello"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidade de São Paulo",
      logo: require("./assets/images/logoUSP.png"),
      subHeader: "Bacharelado em Sistemas de Informação",
      duration: "Fevereiro 2020 - Dezembro 2024",
      desc: "Participação em Entidade Estudantil, Realização de Monitoria e Iniciação Científica",
      descBullets: [
        "Introdução à Ciência de Dados: 10.0",
        "Experimentação de Aprendizado de Máquina Supervisionado: 9.0",
        "Algoritmos e Estruturas de Dados: 9.5",
        "Qualidade de Software: 9.2",
        "Métodos Quantitativos Aplicados à Administração de Empresas: 9.0",
      ]
    },
    {
      schoolName: "ETEC Prof. Camargo Aranha",
      logo: require("./assets/images/logoCps.png"),
      subHeader: "Curso de Informática Integrado ao Ensino Médio",
      duration: "Fevereiro 2017 - Dezembro 2019",
      descBullets: [
        "Desenvolvimento de aplicações web",
        "Desenvolvimento de aplicações móveis",
        "Banco de Dados Relacional SQL",
        "Pacote Office"
    ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Monitor de Disciplina",
      company: "Diretório Acadêmico",
      companylogo: require("./assets/images/logoDasi.jpg"),
      date: "Mar 2023 – Jul 2023",
      desc: "Durante o primeiro semestre de 2023, tive a oportunidade de ministrar sessões semanais didáticas para disciplina \"Introdução à Programação\".",
      descBullets: [
        "Monitoria realizada para calouros de Sistemas de Informação da USP Leste",
        "Pesquisa, elaboração de material didático e realização de sessões de exercícios práticos"
      ]
    },
    {
        role: "Pesquisador Bolsista",
        company: "C4AI",
        companylogo: require("./assets/images/logoC4ai.png"),
        date: "Set 2023 – Atual",
        desc: "Financiado pela parceria USP+IBM+FAPESP, neste projeto de pesquisa em Processamento de Língua Natural sou responsável pela anotação morfossintática de tweets de políticos brasileiros sobre vacinação contra a Covid-19.",
        descBullets: [
          "Análise e tratamento de dados, rotulação usando ferramentas de PLN (Processamento de Linguagem Natural)",
          "Análise de distribuição de rótulos entre diferentes corpora"
        ]
    },
    {
      role: "Estagiário em Ciência de Dados",
      company: "Itaú Unibanco",
      companylogo: require("./assets/images/logoItau.png"),
      date: "Jun 2024 – Atual",
      descBullets: [
        "Manipulação, tratamento de bases de dados e desenvolvimento de modelos preditivos de séries temporais;",
        "Extração de informações de documentos e imagens por meio de OCR e auxiliar a equipe com projetos de Inteligência Artificial Generativa;",
        "Desenvolvimento e configuração de esteiras de deploy para os projetos."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projetos ✏️",
  subtitle: "ALGUNS DOS PROJETOS QUE PARTICIPEI DURANTE MINHA TRAGETÓRIA",
  projects: [
    {
      image: require("./assets/images/eachflixLogo.png"),
      projectName: "EACHFLIX",
      projectDesc: "Projeto desenvolvido para a disciplina \"Análise de Redes Sociais\" constituindo de uma interface que permite ao usuário visualizar recomendações de filmes que se adequem aos perfis da base de dados.",
      footerLink: [
        {
          name: "Dar uma olhada",
          url: "https://huggingface.co/spaces/felmateos/movie-recommender-system"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ageLogo.png"),
      projectName: "Classificador de Faixa Etária",
      projectDesc: "Projeto desenvolvido para a disciplina \"Processamento de Lígua Natural\" constituindo de notebook jupyter que classifica a qual faixa etária que alguém pertence baseando-se em seu texto.",
      footerLink: [
        {
          name: "Dar uma olhada",
          url: "https://github.com/felmateos/age-group-classifier"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Realizações e Certificações 🏆 "),
  //subtitle:
  //  "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "1º Lugar em Capture The Flag",
      subtitle:
        "Capture The Flag foi uma competição aberta para toda a comunidade da USP, em que os participantes tinham que resolver desafios de Segurança da Informação usando técnicas de Hacking. Minha equipe e eu fomos campeões da edição de 2022",
      image: require("./assets/images/eitsLogo.png"),
      imageAlt: "EitS Logo",
      footerLink: [

      ]
    },
    {
        title: "CS50's Introduction to Programming with Python",
        subtitle: "Certificação que compreende conceitos fundamentais da linguagem de Programação Python",
        image: require("./assets/images/harvardLogo.png"),
        imageAlt: "Harvard Logo",
        footerLink: [
          {
            name: "Certificado",
            url: "https://certificates.cs50.io/a5ff5838-581e-4eb5-abea-986129b1eeb8.pdf?size=letter"
          }
        ]
    },
    {
      title: "SQL for Data Science",
      subtitle:
        "Certificação que compreende conceitos fundamentais da linguagem SQL, com ênfase em queries para ciência de dados",
      image: require("./assets/images/UCDAVISLogo.png"),
      imageAlt: "UCDAVIS Logo",
      footerLink: [
        {
          name: "Certificado",
          url: "https://www.coursera.org/account/accomplishments/verify/5SP3KNA3334L"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs 📓",
  subtitle:
    "De vez em quando gosto de fazer uns posts no Medium. 😁",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@felmateos/os-perigos-do-mindset-fixo-80253fe86735",
      title: "Os perigos do Mindset Fixo",
      description:
        "Desculpe-me se te assustei com o título — que a primeira vista parece um pouco sensacionalista. Mas é por uma bo..."
    },
    {
      url: "https://medium.com/@felmateos/storytelling-a-arte-de-contar-hist%C3%B3rias-8e1875384e83",
      title: "Storytelling: a arte de contar histórias",
      description:
        "Contar histórias é uma prática antiga que sempre esteve presente em nossa cultura. Desde as pinturas nas cavernas, pas..."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Palestras 🎤",
  subtitle: emoji(
    "EU AMO COMPARTILHAR O QUE APRENDO (E ATÉ QUE VALE A PENA PARA PERDER A TIMIDEZ 😅)"
  ),

  talks: [
    {
      title: "Revelando padrões ocultos - análises e aplicações de dados das redes sociais",
      subtitle: "Campus Party 2023 #CPBR15",
      slides_url: "https://docs.google.com/presentation/d/1Uwdp4gWMavoBY203S5cOgrObSxfjdpevxdaQZcw88xE/edit?usp=sharing",
      event_url: "https://brasil.campus-party.org/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "MINHA PARTICIPAÇÃO NO PODCAST \"FALA, CORUJA!\"",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/embed/episode/5JnqTgrAFoSAtB9Uw8K5AD?utm_source=generator"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Entre em Contato ☎️"),
  subtitle:
    "Sinta-se a vontade para falar comigo! 😎",
  email_address: "felmateos@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
