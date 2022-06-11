import React from "react";
import styled from "styled-components";
import ShopUs from "../../Components/shopUs/ShopUs";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Text>
              Sale 20% Off
              <br /> <span> On Everything</span>
            </Text>
            <Smltext>
              Explicabo esse amet tempora quibusdam laudantium, laborum
              <br /> dolorem deserunt quo quidem ad optio
              <br /> eaque magnam fugiat hic? Esse dicta aliquid error
              repudiandae
              <br /> earum suscipit fugiat molestias, veniam, vel architecto
              veritatis
            </Smltext>
            <Link to="/project">
              <Button>Read more</Button>
            </Link>
          </Left>
          <Right>
            <img src="/phn.png" alt="loading" />
          </Right>
        </Wrapper>
      </Container>
      <ShopUs />
    </>
  );
};

export default Hero;

const Container = styled.div`
  height: auto;
  /* min-height: calc(100% - 70px); */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  /* background: blue; */
`;
const Wrapper = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and(max-width: 768px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  /* background: green; */
`;

const Right = styled.div`
  width: 50%;
  height: 500px;
  /* background: blue; */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    width: 90%;
    height: 400px;
    justify-content: center;
    align-items: center;
    margin-left: 5%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 375px) {
    display: flex;
    width: 90%;
    height: 200px;
    justify-content: center;
    align-items: center;
    margin-left: 5%;
    margin-top: 15px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Left = styled.div`
  /* background: red; */
  width: 570px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    display: flex;
    height: 400px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
// const Container = styled.div``;
const Text = styled.div`
  font-size: 80px;
  font-weight: 900;
  margin-bottom: 20px;
  line-height: 1.15;
  font-family: poppins;
  span {
    color: blue;
    font-family: poppins;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    /* background: red; */
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    /* display: flex; */
    /* align-items: center; */
  }
`;
const Smltext = styled.div`
  font-size: 17.5px;
  font-weight: 500;
  color: grey;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    width: 95%;
    text-align: center;
    font-size: 15px;
  }
`;
const Button = styled.button`
  width: 140px;
  height: 50px;
  font-weight: 550;
  border: 0;
  outline: none;
  color: white;
  background: blue;
  font-size: 17px;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    color: blue;
    background: transparent;
    border: 1px solid blue;
  }
`;
// const Container = styled.div``;
