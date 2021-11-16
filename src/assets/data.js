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
      Lavoro su tutti i sistemi operativi, ho lavorato come SysAdmin e seguo il modello OSI per troubleshooting.
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
            value: "Node Express, Python Flask, PHP, Laravel, Wordpress, SQL, MySQL, Sqlite, MongoDB, JSON API ..."
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

export default data;