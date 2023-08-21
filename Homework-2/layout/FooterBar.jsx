import Netflix from "../components/Netflix";
import List from "../components/List";
import Question from "../components/Question";
import LanguageBtn from "./../components/btn/LanguageBtn";
import Info from "./../components/Info";

function FooterBar() {
  return (
    <div className="bg-black flex flex-col px-[130px] py-[60px]">
      <Question />
      <List />
      <LanguageBtn />
      <Netflix />
      <Info />
    </div>
  );
}

export default FooterBar;
