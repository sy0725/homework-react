import Logo from "../components/Logo";
import GroupBtn from "../components/btn/GroupBtn";

function HeaderBar() {
  return (
    <div className="bg-black flex  justify-between px-[200px] py-[40px]">
      <Logo />
      <GroupBtn />
    </div>
  );
}

export default HeaderBar;
