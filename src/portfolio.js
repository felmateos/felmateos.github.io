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
    emoji("⚡ Transformo problemas complexos em soluções de dados com impacto real."),
    emoji("⚡ Atuo de ponta a ponta no ciclo de vida de modelos de Machine Learning."),
    emoji("⚡ Uno base estatística sólida a execução prática em produção."),
    emoji("⚡ Conecto decisões técnicas a prioridades estratégicas de negócio."),
    emoji("⚡ Trabalho com dados reais, escala real e responsabilidade real."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
        skillName: "Python",
        fontAwesomeClassname: "fab fa-python"
    },
    {
        skillName: "DataBricks",
        fontAwesomeClassname: "fas fa-database"
    },
    {
        skillName: "Docker",
        fontAwesomeClassname: "fab fa-docker"
    },
    {
        skillName: "Kedro",
        fontAwesomeClassname: "fab fa-kaggle"
    },
    {
        skillName: "SQL",
        fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
        skillName: "Streamlit",
        fontAwesomeClassname: "fas fa-crown"
    },
    {
      skillName: "Trello",
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
      subHeader: "Mestrado stricto sensu em Sistemas de Informação",
      duration: "Março 2026",
      desc: "Pesquisa na área de PLN: Detecção de Transtornos de Saúde Mental em Redes Sociais Usando Modelos Clinicamente Motivados",
    },
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
        role: "Pesquisador Bolsista",
        company: "C4AI",
        companylogo: require("./assets/images/logoC4ai.png"),
        date: "Set 2023 – Ago 2024",
        desc: "Financiado pela parceria USP+IBM+FAPESP, neste projeto de pesquisa em Processamento de Língua Natural sou responsável pela anotação morfossintática de tweets de políticos brasileiros sobre vacinação contra a Covid-19.",
        descBullets: [
          "Análise e tratamento de dados, rotulação usando ferramentas de PLN (Processamento de Linguagem Natural)",
          "Análise de distribuição de rótulos entre diferentes corpora"
        ]
    },
    {
      role: "Estagiário em Ciência de Dados",
      company: "Genial Investimentos",
      companylogo: require("./assets/images/logoGenial.jpg"),
      date: "Mar 2024 – Jun 2024",
      descBullets: [
        "Análise Exploratória e Tratamento de dados.",
        "Formulação e Testes de hipótese em dados categóicos.",
        "Sistema de monitoramento de modelos de Séries temporais em produção."
      ]
    },
    {
      role: "Estagiário em Ciência de Dados",
      company: "Itaú Unibanco",
      companylogo: require("./assets/images/logoItau.png"),
      date: "Jun 2024 – Fev 2025",
      descBullets: [
        "Manipulação, tratamento de bases de dados e desenvolvimento de modelos preditivos de séries temporais;",
        "Extração de informações de documentos e imagens por meio de OCR e auxiliar a equipe com projetos de Inteligência Artificial Generativa;",
        "Desenvolvimento e configuração de esteiras de deploy para os projetos."
      ]
    },
    {
      role: "Analista de Dados",
      company: "Itaú Unibanco",
      companylogo: require("./assets/images/logoItau.png"),
      date: "Fev 2025 – Fev 2026",
      descBullets: [
        "Desenvolvimento e implementação de solução de Reconhecimento de Entidades Nomeadas (NER) com Large Language Models (LLMs), incluindo definição da arquitetura, escolha do modelo base e estratégia de fine-tuning, atingindo F1-score de 85%",
        " Construção de dashboard analítico no AWS QuickSight para análise da distribuição das entidades capturadas e suporte à tomada de decisão baseada em dados",
        "Otimização do rateio de custos de produtos PJ, permitindo alocação mais rápida, confiável e escalável, com impacto financeiro estimado em R$ 16 milhões/ano."
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
      image: require("./assets/images/darknetLogo.png"),
      projectName: "Identificador de Ameaças na Darknet",
      projectDesc: "O projeto aplica SNN para detecção de ameaças em tráfego de internet criptografado, inspirado em estudo publicado pela Elsevier (Neurocomputing, 2022). Utilizando o dataset CIC-IDS2017, realiza extração de fluxos, rotulação de ataques e balanceamento de classes, com modelagem em PyTorch e otimização via Optuna.",
      footerLink: [
        {
          name: "Repositório no GitHub",
          url: "https://github.com/felmateos/snn-darknet-traffic-classification"
        }
      ]
    },
    {
      image: require("./assets/images/ageLogo.png"),
      projectName: "Classificador de Faixa Etária",
      projectDesc: "O projeto Classificador de Faixa Etária desenvolve um modelo de Processamento de Linguagem Natural (PLN) para prever a faixa etária de uma pessoa com base apenas em seu texto. Utilizando técnicas de machine learning supervisionado, o sistema foi avaliado por meio de acurácia em conjunto de teste e validação cruzada em 10 folds, além de análise por matriz de confusão.",
      footerLink: [
        {
          name: "Repositório no GitHub",
          url: "https://github.com/felmateos/age-group-classifier"
        }
      ]
    },
    {
      image: require("./assets/images/incomeLogo.png"),
      projectName: "Predição de Renda por Atributos Demográficos",
      projectDesc: "O projeto envolve análise exploratória e testes de hipótese, além de um pipeline de ciência de dados para predição de renda a partir de atributos demográficos e ocupacionais, utilizando o framework Kedro e testes com pytest para garantir organização e reprodutibilidade. O problema é tratado como classificação binária, com foco em desempenho e interpretabilidade, avaliando métricas como Precision, Recall e F1-score.",
      footerLink: [
        {
          name: "Repositório no GitHub",
          url: "https://github.com/felmateos/income-analysis"
        }
      ]
    },
    {
      image: require("./assets/images/itauLogo.png"),
      projectName: "Extrator de Produtos em Textos Corporativos",
      projectDesc: "Desenvolvi e implementei uma solução de Reconhecimento de Entidades Nomeadas (NER) com Large Language Models (LLMs), incluindo definição de arquitetura, escolha do modelo base e estratégia de fine-tuning, atingindo F1-score de 85%. Integrei um pipeline produtivo com AWS Athena e Amazon SageMaker para extração, processamento, armazenamento e inferência em larga escala, possibilitando a análise mensal de centenas de milhares de textos corporativos. Também construí dashboard analítico no Amazon QuickSight para monitoramento da distribuição das entidades e suporte à tomada de decisão orientada a dados, além de otimizar o rateio de custos de produtos PJ, gerando impacto financeiro estimado em R$ 16 milhões por ano.",
      footerLink: [

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
      title: "Generative AI",
      subtitle:
        "Certificação que compreende conceitos fundamentais de IA Generativa, engenharia de prompt e aplicações",
      image: require("./assets/images/itauLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certificado",
          url: "https://www.credly.com/badges/2ace28df-c5f7-489b-bcb4-8f7c2d502e36/linked_in_profile"
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
    },
    {
      title: "Data Science Foundations",
      subtitle:
        "Certificação que compreende conceitos fundamentais de Ciência de Dados, Big Data e Analytics",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certificado",
          url: "https://www.credly.com/badges/7e4276f5-0bd9-4a14-b34a-618c9293d0d0"
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  email_address: "felmateos@alumni.usp.br"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
