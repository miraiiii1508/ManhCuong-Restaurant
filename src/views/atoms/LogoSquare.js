import logo from "../../assets/Logo.png";
export const LogoSquare = () => {
  return (
    <div className="flex basis-1/3 justify-center items-center">
      <a href="/">
        <img src={logo} alt="logo" className="h-24 w-24 object-contain"></img>
      </a>
    </div>
  );
};
