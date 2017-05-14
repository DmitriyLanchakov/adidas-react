import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';
import { NavLink } from 'react-router-dom';

const Card = styled.div`
  background: #f4f4f4;
  padding: 9px;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 17px;
  justify-content: space-between;
  flex: 1 0 auto;
`;

const Img = styled.img`
  width: 100%;
`;

const Link = styled(NavLink)`
  background: #fff;
  color: #111;
  display: block;
  font-family: 'AvenirBold';
  font-size: 30px;
  margin-top: 6px;
  padding: 23px 0 27px;
  text-decoration: none;
  width: 100%;

  &:hover {
    background-image: linear-gradient(180deg, #0c09bf, #966dd8);
    color: #fff;
  }
`;

export default props => (
  <Col xs={12} sm={6} ms={4} lg={4}>
    <Card>
      <Img src={props.image} />
      <Link to="/item">{props.cost}</Link>
    </Card>
  </Col>
);
