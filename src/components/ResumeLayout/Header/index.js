import { HeaderContainer } from "./Header.styled";
import Image from "next/image";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="info">
        <Image src="/profile-picture.png" width={150} height={150} alt="JRH" />
        <h1>Jonathan Romero</h1>
        <h2>Full Stack Developer</h2>
      </div>
    </HeaderContainer>
  )
};

export default Header;