import { HeaderTop, HeaderContainer } from "./Header.styled";
import Image from "next/image";
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <>
      <HeaderTop>
        <div className="menu">
          {/* <Icon icon="material-symbols:menu" /> */}
        </div>
        <div className="social">
          <a href="https://github.com/elMatadito" target="_blank">
            <Icon icon="skill-icons:github-dark" />
          </a>
          <a href="https://linkedin.com/in/jromeroh93" target="_blank">
            <Icon icon="skill-icons:linkedin" />
          </a>
          <a href="https://twitter.com/elMataditoMX" target="_blank">
            <Icon icon="skill-icons:twitter" />
          </a>
          <a href="https://instagram.com/elMatadito" target="_blank">
            <Icon icon="skill-icons:instagram" />
          </a>
        </div>
        <div className="toggle">
        </div>
      </HeaderTop>
      <HeaderContainer>
        <div className="info">
          <h1>Jonathan Romero Hernandez</h1>
          <h2>I build things for the web</h2>
          <p>I am passionate about creating innovative solutions with code and infrastructure that can benefit people and businesses. I have more than 9 years of experience in this field.</p>
        </div>
        <Image src="/profile-picture.png" width={150} height={150} alt="JRH" />
      </HeaderContainer>
    </>
  )
};

export default Header;