import { Nav } from "./Nav";
import logo from "./../../assets/logo.svg";

export const Header = (): JSX.Element => {
  return (
    <header>
      <div className="container main-header">
        <img src={logo} height="54px" alt="logo" />
        <Nav />
      </div>
    </header>
  );
}