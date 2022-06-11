import React from "react";
import styled from "styled-components";
import { BiBusSchool } from "react-icons/bi";
import { GiFreedomDove } from "react-icons/gi";
import { AiFillAlipaySquare } from "react-icons/ai";

const ShopUs = () => {
  return (
    <Container>
      <Wrapper>
        <BigText>Why Shop With Us</BigText>
        <Div></Div>
        <Logodiv>
          <Logo>
            <Logohd>
              <BiBusSchool size={"50px"} color={"white"} />
            </Logohd>
            <Logotxt>
              <Tx1>Fast Delivery</Tx1>
              <Tx2>
                variations of passages of Lorem
                <br />
                Ipsum available
              </Tx2>
            </Logotxt>
          </Logo>
          <Logo>
            <Logohd>
              <GiFreedomDove size={"50px"} color={"white"} />
            </Logohd>
            <Logotxt>
              <Tx1>Free Shipping</Tx1>
              <Tx2>
                variations of passages of Lorem
                <br />
                Ipsum available
              </Tx2>
            </Logotxt>
          </Logo>
          <Logo>
            <Logohd>
              <AiFillAlipaySquare size={"50px"} color={"white"} />
            </Logohd>
            <Logotxt>
              <Tx1>Best quality</Tx1>
              <Tx2>
                variations of passages of Lorem
                <br />
                Ipsum available
              </Tx2>
            </Logotxt>
          </Logo>
        </Logodiv>
      </Wrapper>
    </Container>
  );
};
export default ShopUs;

const Container = styled.div`
  min-height: 90vh;
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 85%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: red; */

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
const BigText = styled.div`
  font-size: 70px;
  font-weight: 900;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 50px;
    font-weight: 800;
  }
  @media screen and (max-width: 375px) {
    font-size: 30px;
    font-weight: 800;
    margin-top: 10px;
  }
`;
const Div = styled.div`
  width: 150px;
  height: 5px;
  background-color: red;
`;
const Logodiv = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media screen and (max-width: 375px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: auto;
  }
`;
const Logo = styled.div`
  height: 250px;
  width: 350px;
  display: flex;
  background-color: #002c3e;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: blue; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px 10px;
  @media screen and (max-width: 768px) {
    width: 330px;
  }
  @media screen and (max-width: 320px) {
    width: 280px;
  }
`;

const Logohd = styled.div`
  height: 70px;
  width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logotxt = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: red; */
`;
const Tx1 = styled.div`
  font-size: 29px;
  font-weight: 600;
  font-family: poppins;
  color: white;
`;
const Tx2 = styled.div`
  color: white;
  font-size: 15px;
  font-weight: 600;
  font-family: poppins;
  text-align: center;
`;
