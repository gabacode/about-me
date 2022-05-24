import React, { useState } from 'react';
import { Center, A4 } from './styles/template';
import { Container, Row, Col3, Col4, Col8, Col9 } from './styles/bootstrap';
import {
  Header,
  Flag,
  ProfilePic,
  Links,
  Langs,
  Work,
  Footer,
  PrintBtn,
} from './styles/main';

import content from './assets/data';
import langs from './assets/languages';
import print from './lib/print';

export default function CV() {
  const locale = window.navigator.userLanguage || window.navigator.language;
  const [language, setLanguage] = useState(
    locale && locale.includes('it') ? 'it' : 'en'
  );
  const data = content.find(x => x.language === language);

  return (
    <>
      <Center>
        <Row style={{ position: 'relative', top: '42px', right: '-99mm' }}>
          {langs.map((lang, index) => (
            <Flag
              key={index}
              src={lang.flag}
              onClick={() => setLanguage(lang.slug)}
              alt={lang.name}
            />
          ))}
        </Row>
        <A4 id="printMe">
          <Container>
            <Header>
              <Col4>
                <ProfilePic src={data.personal.pic} alt={data.personal.name} />
              </Col4>
              <Col8>
                <h1>{data.personal.name}</h1>
                <h2>{data.personal.role}</h2>
                <h3>
                  <nobr>{data.personal.subtitle}</nobr>
                </h3>
                <div style={{ borderBottom: '1px solid #999' }} />
              </Col8>
            </Header>

            <Row>
              <Links>
                {data.contacts.map((f, i) => (
                  <div key={i}>
                    <a
                      href={f.name === 'email' ? 'mailto:' + f.url : f.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <f.icon style={{ marginRight: '5px' }} />
                      {f.nick ?? f.url}
                    </a>
                  </div>
                ))}
              </Links>
              <Col8>
                <h3
                  style={{
                    textAlign: 'justify',
                    textJustify: 'auto',
                    marginTop: '-18px',
                  }}
                >
                  {data.personal.description}
                </h3>
              </Col8>
            </Row>

            <Row>
              <Langs>
                <div>
                  {data.skills.map((skill, i) => (
                    <div key={i}>
                      <h2>{skill.name}</h2>
                      {skill.values.map((s, i) => (
                        <h3 key={i}>
                          {s.name ? `${s.name}: ${s.value}` : s.value}
                        </h3>
                      ))}
                    </div>
                  ))}
                </div>
              </Langs>

              <Col8>
                <div>
                  {data.career.map((work, i) => (
                    <div key={i}>
                      <h2 style={{ textAlign: 'right', fontWeight: '500' }}>
                        {work.name}
                      </h2>
                      {work.values.map((w, i) => (
                        <a
                          key={i}
                          href={w.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Work>
                            <Col3 style={{ alignSelf: 'top' }}>
                              <img src={w.thumbnail} alt={w.name} />
                            </Col3>
                            <Col9>
                              <h2>{w.name}</h2>
                              <h3>{w.description}</h3>
                              <h4>{w.tech}</h4>
                            </Col9>
                          </Work>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </Col8>
            </Row>

            <Footer>
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '50%',
                  transform: 'translate(-50%, 0)',
                  width: '200mm',
                }}
              >
                <p>{data.footer.auth}</p>
                <div dangerouslySetInnerHTML={{ __html: data.footer.repo }} />
              </div>
            </Footer>
          </Container>
        </A4>
        <PrintBtn onClick={() => print('printMe')}>
          {data.footer.print.toUpperCase()}
        </PrintBtn>
      </Center>
    </>
  );
}
