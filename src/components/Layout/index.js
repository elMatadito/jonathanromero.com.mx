import CurrentStack from "../CurrentStack";
import Header from "../Header";
import Jobs from "../Jobs";
import { Main } from "./Layout.styled";

const Layout = () => {
  return (
    <Main>
      <Header />
      <CurrentStack />
      {/* <Jobs /> */}
    </Main>
  )
};

export default Layout;
