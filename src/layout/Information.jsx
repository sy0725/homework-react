import Movie from "../components/Movie";
import Divice from "../components/Divice";
import Ready from "../components/Ready";
import Email from "../components/Email";
import New from "../components/New";

function Information() {
  return (
    <div className="flex flex-col gap-[28px] px-[240px] py-[54px] items-center bg-[url('/src/assets/backgorund.svg')]">
      <Movie />
      <Divice />
      <Ready />
      <Email />
      <New />
    </div>
  );
}

export default Information;
