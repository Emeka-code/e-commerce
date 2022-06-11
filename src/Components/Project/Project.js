import React from "react";
import styled from "styled-components";

const Project = () => {
  return (
    <Container>
      <Wrapper>
        <HeadText>
          Our <span>Products</span>
        </HeadText>
        <Div></Div>
        <ImgHold>
          <Carder>
            <CardImg>
              <img src="fone1.png" alt="loading" />
            </CardImg>
            <TextHd>
              <Type>Iphone 13pro max</Type>
              <Price>#805,000</Price>
            </TextHd>
          </Carder>
          <Carder>
            <CardImg>
              <img src="fone1.png" alt="loading" />
            </CardImg>
            <TextHd>
              <Type>Iphone 13pro max</Type>
              <Price>#685,000</Price>
            </TextHd>
          </Carder>
          <Carder>
            <CardImg>
              <img src="oppo.png" alt="loading" />
            </CardImg>
            <TextHd>
              <Type>Oppo Find X5 Pro</Type>
              <Price>#550,000</Price>
            </TextHd>
          </Carder>
          <Carder>
            <CardImg>
              <img src="fone3.png" alt="loading" />
            </CardImg>
            <TextHd>
              <Type>Iphone 13pro max</Type>
              <Price>#950,000</Price>
            </TextHd>
          </Carder>
          <Carder>
            <CardImg>
              <img src="fone11.png" alt="loading" />
            </CardImg>
            <TextHd>
              <Type>Iphone 12pro max</Type>
              <Price>#500,000</Price>
            </TextHd>
          </Carder>
          <Carder>
            <CardImg>
              <img src="fone12.png" alt="loading" />
            </CardImg>
            <TextHd>
              <Type>Iphone 12pro max</Type>
              <Price>#650,000</Price>
            </TextHd>
          </Carder>
          <Carder>
            <CardImg>
              <img src="sam1.png" alt="loading" />
            </CardImg>
            <TextHd>
              <Type>samsung s21</Type>
              <Price>#400,000</Price>
            </TextHd>
          </Carder>
          <Carder>
            <CardImg>
              <img src="sam2.png" alt="loading" />
            </CardImg>
            <TextHd>
              <Type>samsung s21 ultra</Type>
              <Price>#650,000</Price>
            </TextHd>
          </Carder>
          <Carder>
            <CardImg>
              <img src="sam3.png" alt="loading" />
            </CardImg>
            <TextHd>
              <Type>samsung s22 ultra</Type>
              <Price>#850,000</Price>
            </TextHd>
          </Carder>
        </ImgHold>
      </Wrapper>
    </Container>
  );
};
export default Project;

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 55px;
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
`;
const HeadText = styled.div`
  font-size: 70px;
  font-weight: bold;
  font-family: poppins;
  margin-bottom: 10px;
  color: black;
  span {
    color: #f7444e;
  }
  @media screen and (max-width: 425px) {
    font-size: 40px;
  }
`;
const Div = styled.div`
  width: 150px;
  height: 6px;
  background-color: #f7444e;
  margin-bottom: 50px;
`;
const ImgHold = styled.div`
  width: 95%;
  /* height: 400px; */
  /* background-color: red; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
`;
const Carder = styled.div`
  width: 350px;
  /* height: 350px; */
  height: auto;
  padding: 10px 0px;
  /* background-color: #f7444e; */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CardImg = styled.div`
  width: 250px;
  height: 200px;
  /* background-color: red; */
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const TextHd = styled.div`
  width: 280px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: blue; */
  margin-top: 10px;
  @media screen and (max-width: 375px) {
    width: 250px;
  }
`;
const Type = styled.div`
  font-size: 15px;
  font-weight: 900;
  font-family: poppins;
`;
const Price = styled.div`
  font-size: 15px;
  font-weight: bold;
  font-family: poppins;
`;
