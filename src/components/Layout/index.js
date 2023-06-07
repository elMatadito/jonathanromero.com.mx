import CurrentStack from "../CurrentStack";
import Footer from "../Footer";
import Header from "../Header";
import Jobs from "../Jobs";
import { Main } from "./Layout.styled";

const Layout = () => {
  return (
    <Main>
      <Header />
      <CurrentStack />
      <Jobs />
      <Footer />
    </Main>
  )
};

export default Layout;
