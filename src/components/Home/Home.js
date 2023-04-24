import { Wrapper, Inner, Header, StyledLink } from "./Home.styled";

const Home = () => {
  return (
    <Wrapper>
        <Inner>
            <Header>Welcome to Twitter Cards</Header>
            <StyledLink to="/tweets">Go to Tweets</StyledLink>
        </Inner>
    </Wrapper>
  );
};

export default Home;