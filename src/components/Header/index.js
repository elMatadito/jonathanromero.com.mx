import { HeaderContainer } from "./Header.styled";
import Image from "next/image";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="info">
        <Image src="/profile-picture.png" width={150} height={150} alt="JRH" />
        <h1>Jonathan Romero</h1>
        <h2>I build things for the web</h2>
        <p>I am passionate about creating innovative solutions with code and infrastructure that can benefit people and businesses. I have more than 9 years of experience in this field.</p>
      </div>
    </HeaderContainer>
  )
};

export default Header;