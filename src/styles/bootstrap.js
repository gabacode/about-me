import styled from 'styled-components';

/*!
 * Inspired from Bootstrap Grid v4.4.1 (https://getbootstrap.com/)
 * A port by Gabriele Arcangelo Scalici (https://github.com/gabacode)
 * Copyright 2011-2019 The Bootstrap Authors
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-left: 25px;
  margin-right: 25px;
`;
const Col = styled.div`
  position: relative;
  width: 100%;
`;

const Col3 = styled(Col)`
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
`;

const Col4 = styled(Col)`
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
`;

const Col6 = styled(Col)`
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
`;

const Col8 = styled(Col)`
  -ms-flex: 0 0 66.666667%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
`;

const Col9 = styled(Col)`
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;
`;

const Col12 = styled(Col)`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
`;

export { Container, Row, Col, Col3, Col4, Col6, Col8, Col9, Col12 };
