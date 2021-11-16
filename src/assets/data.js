import Maresi from "./images/icons/maresi.png"
import f8lite from "./images/icons/f8lite.png"
import PAW from "./images/icons/paw.png"

import { FaRegEnvelope, FaGithub, FaHome, FaLinkedin } from "react-icons/fa";

const data = [
  {
    language: 'it',
    personal: {
      name: "Gabriele Arcangelo Scalici",
      role: "Full Stack Web Developer",
      subtitle: "Amo la tecnologia e i modi in cui essa può migliorare la vita di tutti.",
      description: `Ho vissuto per più di 10 anni nel Regno Unito, dove ho coltivato la mia passione per la musica e per la tecnologia, lavorando come musicista e come corriere in bicicletta. 
      La passione per la tecnologia è sempre stata forte sin dalla mia infanzia, ma col tempo è andata solamente a degenerare. 
      Amo Python, Javascript e tutto ciò che si può costruire al di là del linguaggio utilizzato. 
      Lavoro su tutti i sistemi operativi, e seguo il modello OSI per troubleshooting.
      Studio attualmente Computer Science presso la University of The People, California, anche partecipando attivamente al gruppo di iniziativa civica nazionale OpenDataSicilia.`,
    },
    contacts: [
      {
        name: 'Location',
        icon: FaHome,
        url: 'https://en.wikipedia.org/wiki/Palermo',
        nick: 'Palermo, Italy'
      },
      {
        name: 'email',
        icon: FaRegEnvelope,
        url: 'gaba@totel.it',
        nick: null
      },
      {
        name: 'Github',
        icon: FaGithub,
        url: 'https://github.com/gabacode',
        nick: 'gabacode'
      },
      {
        name: 'LinkedIn',
        icon: FaLinkedin,
        url: 'https://www.linkedin.com/in/gabriele-scalici/',
        nick: 'gabriele-scalici'
      }
    ],
    skills: [
      {
        name: "Lingue",
        values: [
          {
            name: "Italiano",
            value: "⭐⭐⭐⭐⭐"
          },
          {
            name: "Inglese",
            value: "⭐⭐⭐⭐⭐"
          }
        ]
      },
      {
        name: "Stack frequenti",
        values: [
          {
            name: "Frontend",
            value: "React, Next.js, Gatsby, Bootstrap, TailwindCSS ..."
          },
          {
            name: "Backend",
            value: "Node Express, Python Flask, PHP, Laravel, WordPress, SQL, MySQL, SQLite, MongoDB, JSON API ..."
          },
          {
            name: "Mobile",
            value: "React Native, Ionic, Flutter"
          },
          {
            name: "Altro",
            value: "Adobe Creative Suite, Solidity, Cardano Blockchain, AWS, Proxmox, JAVA (base), R, C++, GraphQL etc ..."
          }
        ]
      },
      {
        name: "Interessi",
        values: [
          {
            name: null,
            value: "3D Printing, Ciclismo, Meditazione, VR, Arduino e laser cutters, la Musica e tutta l'Arte in generale, ciò che luccica di vita propria, e ciò che anche se spesso sottovalutato, ha un intrinsico potere per cambiare il mondo."
          }
        ]
      }
    ],
    career: [
      {
        name: "Qualche ultimo Lavoro",
        values: [
          {
            name: "MareSì",
            thumbnail: Maresi,
            description: "Un'app per scoprire la qualità delle acque vicine, e le relative misurazioni batteriche",
            tech: "API backend in Node, webapp in React e versione mobile in React Native (early access), scraper in Python.",
            url: "https://maresi.app/"
          },
          {
            name: "f8lite",
            thumbnail: f8lite,
            description: "Software gestionale utilizzato dalla ASP Bagheria per il tracciamento pazienti positivi al COVID-19",
            tech: "Sviluppato in Laravel e React, promosso da VICE Motherboard.",
            url: "https://www.vice.com/it/article/wx5ekx/sicilia-dati-comuni-covid"
          },
          {
            name: "Palermo Art Weekend",
            thumbnail: PAW,
            description: "Chief Technology officer",
            tech: "Gestione reparto tecnologico, hosting, e supporto tecnico durante l'organizzazione e lo svolgimento dell'evento.",
            url: "https://palermoculture.comune.palermo.it/palermo-culture-eventi-dettaglio.php?id=277"
          }
        ]
      }
    ]
  },
  {
    language: 'en',
    personal: {
      name: "Gabriele Arcangelo Scalici",
      role: "Full Stack Web Developer",
      subtitle: "I love technology for the ways it can improve lives on this planet, and beyond.",
      description: `I lived in the United Kingdom for more than 10 years, where I nourished my passion for music and technology, whilst working as a musician, and as a bike courier. 
      My passion for tech has always been strong since my childhood, and by growing up it only got worst.
      I love Python, Javascript and anything that can be built, regardless of the language used.
      I work with all OSs, and I follow the OSI model for troubleshooting.
      I'm a student of Computer Science at the University of The People, California, and I actively participate in the initiatives of civic hacking group OpenDataSicilia.`,
    },
    contacts: [
      {
        name: 'Location',
        icon: FaHome,
        url: 'https://en.wikipedia.org/wiki/Palermo',
        nick: 'Palermo, Italy'
      },
      {
        name: 'email',
        icon: FaRegEnvelope,
        url: 'gaba@totel.it',
        nick: null
      },
      {
        name: 'Github',
        icon: FaGithub,
        url: 'https://github.com/gabacode',
        nick: 'gabacode'
      },
      {
        name: 'LinkedIn',
        icon: FaLinkedin,
        url: 'https://www.linkedin.com/in/gabriele-scalici/',
        nick: 'gabriele-scalici'
      }
    ],
    skills: [
      {
        name: "Languages",
        values: [
          {
            name: "Italian",
            value: "⭐⭐⭐⭐⭐"
          },
          {
            name: "English",
            value: "⭐⭐⭐⭐⭐"
          }
        ]
      },
      {
        name: "Frequent stacks",
        values: [
          {
            name: "Frontend",
            value: "React, Next.js, Gatsby, Bootstrap, TailwindCSS ..."
          },
          {
            name: "Backend",
            value: "Node Express, Python Flask, PHP, Laravel, WordPress, SQL, MySQL, SQLite, MongoDB, JSON API ..."
          },
          {
            name: "Mobile",
            value: "React Native, Ionic, Flutter"
          },
          {
            name: "Other",
            value: "Adobe Creative Suite, Solidity, Cardano Blockchain, AWS, Proxmox, JAVA (base), R, C++, GraphQL, etc ..."
          }
        ]
      },
      {
        name: "Interests",
        values: [
          {
            name: null,
            value: "3D Printing, Cycling, Meditating, VR, Arduino and laser cutters, Music and all Arts in general, what shines with its own light, and what is considered undervalued, yet, holds an intrinsic power to change the world."
          }
        ]
      }
    ],
    career: [
      {
        name: "Recent Work",
        values: [
          {
            name: "MareSì",
            thumbnail: Maresi,
            description: "An APP built to discover the quality of the oceans around us, and their bacteria levels",
            tech: "Node API back end, web app developed with React and mobile version with React Native (EA), scrapers built with Python.",
            url: "https://maresi.app/"
          },
          {
            name: "f8lite",
            thumbnail: f8lite,
            description: "Project Management Software adopted by the Local Health Authority (ASP Bagheria) to keep track of COVID-19 positive patients",
            tech: "Made with Laravel and React, featured on VICE Motherboard.",
            url: "https://www.vice.com/it/article/wx5ekx/sicilia-dati-comuni-covid"
          },
          {
            name: "Palermo Art Weekend",
            thumbnail: PAW,
            description: "Chief Technology officer",
            tech: "IT management, providing hosting, and technical support during the planning and execution of the event.",
            url: "https://palermoculture.comune.palermo.it/palermo-culture-eventi-dettaglio.php?id=277"
          }
        ]
      }
    ]
  }
]

export default data;