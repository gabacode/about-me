import styled from "styled-components";
import {Container, Row, Col4, Col8} from "./styles/bootstrap";
import {Center, A4} from "./styles/template";
import Profile from "./assets/images/profile.jpg"

import { FaRegEnvelope, FaGithub, FaHome, FaInstagram, FaFacebook, FaSoundcloud, FaLinkedin } from "react-icons/fa";

const data = {
  personal: {
    name: "Gabriele Arcangelo Scalici",
    role: "Full Stack Web Developer",
    subtitle: "Amo la tecnologia e i modi in cui essa può migliorare la vita di tutti.",
    description: `Ho vissuto per più di 10 anni nel Regno Unito, sviluppando ottime conoscenze informatiche e di
    public relations. Sviluppo web e apps da più di 15 anni, ultimamente specializzandomi in Javascript, Python,
    e PHP. Lavoro su tutti i sistemi operativi, ho lavorato come SysAdmin in passato e
    seguo il modello OSI per troubleshooting. Ho studiato per il Cisco CCNA e attualmente lavoro
    come developer in proprio, studiando Computer Science alla University of The People,
    California, e partecipando attivamente al gruppo di iniziativa civica OpenDataSicilia. `,
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
    // {
    //   name: 'Facebook',
    //   icon: FaFacebook,
    //   url: 'https://fb.com/gabaman',
    //   nick: 'gabaman'
    // },
    // {
    //   name: 'Instagram',
    //   icon: FaInstagram,
    //   url: 'https://instagram.com/gabapics',
    //   nick: 'gabapics'
    // },
    // {
    //   name: 'Soundcloud',
    //   icon: FaSoundcloud,
    //   url: 'https://soundcloud.com/gaba41',
    //   nick: 'gaba41'
    // },
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
          value: "React, Next.js, Gatsby, Bootstrap, TailwindCSS"
        },
        {
          name: "Backend",
          value: "Node, Python, PHP, Laravel, Wordpress, MySQL, Sqlite, MongoDB"
        },
        {
          name: "Mobile",
          value: "React Native, Flutter"
        },
        {
          name: "Altro",
          value: "Adobe Suite"
        }
      ]
    },
    {
      name: "Interessi",
      values: [
        {
          name: null,
          value: "Meditazione, Ciclismo, Tecnologia, VR"
        }
      ]
    }
  ]
}

export default function CV() {
  return (
    <>
      <Center>
        <A4>
          <Container>
            
            <Header>
              <Col4>
                <ProfilePic src={Profile} alt={data.personal.name} />
              </Col4>
              <Col8>
                <h1>{data.personal.name}</h1>
                <h2>{data.personal.role}</h2>
                <h3>{data.personal.subtitle}</h3>
                <div style={{borderBottom:'1px solid #999'}}/>
              </Col8>
            </Header>
            
            <Row>
              <Links>
              {
                data.contacts.map((f, i) => (
                  <div key={i}>
                    <a href={f.name === 'email' ? "mailto:" + f.url : f.url} target="_blank" rel="noreferrer">
                      <f.icon style={{marginRight:'5px'}}/>
                      {f.nick ?? f.url}
                    </a>
                  </div>
                ))
              }
              </Links>
              <Col8>
                <h3 style={{textAlign: 'justify', textJustify:'auto'}}>{data.personal.description}</h3>
              </Col8>
            </Row>

            <Row>
              <Langs>
                <div>
                  {
                    data.skills
                    .map((skill, i) => (
                      <div key={i}>
                        <h2>{skill.name}</h2>
                        {
                          skill.values.map((s, i) => (
                            <h3 key={i}>
                              {s.name ? `${s.name}: ${s.value}` : s.value}
                            </h3>
                            )
                          )
                        }
                      </div>
                      )
                    )
                  }
                </div>
              </Langs>
              <Col8>
                <h2 style={{textAlign:'right'}}>Ultimi Lavori</h2>
              </Col8>
            </Row>
          
          </Container>
        </A4>
      </Center>
    </>
  );
}

const Header = styled(Row)`
    div{
      align-self:center;
    }
    img{
      text-align:center;
    }
    h1,h2,h3{
      text-align:right;
    }
`
const ProfilePic = styled.img`
    filter: brightness(1.33);
    //filter: brightness(2.3) grayscale(100%);
    border-radius: 100%;
    width: 168px;
    box-shadow: inset 3px 6px 10px black;
    // &:hover{
    //   filter: brightness(1.33) grayscale(0%);
    // }
    // transition: .618s;
`
const Links = styled(Col4)`
    margin-bottom:50px;
    a{
      font-size: 11pt;
      color: #111;
      text-decoration: none;
      &:hover{
        text-decoration:underline;
      }
    }
`
const Langs = styled(Col4)`
    div{
      margin-bottom: 15px;
    }
    h2{
      font-weight: 500;
    }
    h3{
      margin:2px 0px 0px 0px;
    }
`