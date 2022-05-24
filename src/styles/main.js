import styled from 'styled-components';
import { Row, Col4 } from './bootstrap';

const Header = styled(Row)`
  div {
    align-self: center;
  }
  img {
    text-align: center;
  }
  h1,
  h2,
  h3 {
    text-align: right;
  }
`;

const Flag = styled.img`
  width: 25px;
  margin-right: 8px;
  display: inline;
  cursor: pointer;
`;

const ProfilePic = styled.img`
  filter: brightness(1.33);
  border-radius: 100%;
  width: 168px;
  box-shadow: inset 3px 6px 10px black;
`;
const Links = styled(Col4)`
  margin-bottom: 50px;
  a {
    font-size: 11pt;
    color: #111;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Langs = styled(Col4)`
  div {
    margin-bottom: 15px;
  }
  h2 {
    font-weight: 500;
  }
  h3 {
    margin: 2px 0px 0px 0px;
  }
`;

const Work = styled(Row)`
  align-self: center;
  margin: 10px 0px 5px 15px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  h3 {
    text-align: left;
  }
  img {
    width: 96px;
    border-radius: 8px;
  }
  h4 {
    font-weight: 200;
    font-size: 9pt;
    margin-top: -6px;
    text-align: left;
  }
`;
const Footer = styled(Row)`
  p,
  a,
  div {
    font-size: 10px;
    text-align: center;
    color: #777;
    margin: 14px auto;
  }
`;
const PrintBtn = styled.button`
  font-weight: bold;
  margin-top: -30px;
  margin-bottom: 50px;
  height: 50px;
  background-color: #6fc128;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  border: none;
  width: 200px;
  &:hover {
    transform: translateY(-3px);
    transition: 0.1s;
  }
`;

export { Header, Flag, ProfilePic, Links, Langs, Work, Footer, PrintBtn };
