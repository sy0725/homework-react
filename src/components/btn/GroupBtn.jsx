import LanguageBtn from "./LanguageBtn";
import LoginBtn from "./LoginBtn";

function GroupBtn() {
  return (
    <div className="flex items-center gap-[24px]">
      <LanguageBtn />
      <LoginBtn />
    </div>
  );
}

export default GroupBtn;
