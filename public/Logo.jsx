import styled from "styled-components";
import { useDarkMode } from "../src/context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 18rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode
    ? "/redwood-resort-dark.png"
    : "/redwood-resort-light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
