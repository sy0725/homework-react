import Frist from "./layout/Frist";
import Information from "./layout/Information";
import HeaderBar from "./layout/HeaderBar";
import Second from "./layout/Second";
import Third from "./layout/Third";
import FooterBar from "./layout/FooterBar";

function App() {
  return (
    <div className="w-[1680px] h-[2967px]">
      <HeaderBar />
      <Information />
      <Frist />
      <Second />
      <Third />
      <FooterBar />
    </div>
  );
}

export default App;
