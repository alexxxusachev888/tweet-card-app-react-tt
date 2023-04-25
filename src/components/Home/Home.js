import { Wrapper, Inner, Header, SubHeader, StyledLink } from "./Home.styled";

const Home = () => {
  return (
    <Wrapper>
        <Inner>
            <Header>Welcome to Twitter Cards</Header>
            <SubHeader>Discover how popular they are</SubHeader>
            <StyledLink to="/tweets">Go to Tweets</StyledLink>
        </Inner>
    </Wrapper>
  );
};

export default Home;