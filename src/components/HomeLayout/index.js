import CurrentStack from "../CurrentStack";
import Experience from "../Experience";
import Footer from "../Footer";
import Header from "../Header";
import Jobs from "../Jobs";
import { Main } from "./Layout.styled";

const Layout = () => {
  return (
    <Main>
      <Header />
      <Experience />
      <CurrentStack />
      <Footer />
    </Main>
  )
};

export default Layout;
