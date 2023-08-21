import { useId } from "react";

function LanguageBtn() {
  const btnId = useId();

  return (
    <div className="flex py-3 px-[10px] h-[40px] w-[116px] items-center bg-none gap-2 border-gray-500 border-2">
      <div>
        <img src="/src/assets/global.svg" alt="" />
      </div>
      <div>
        <label htmlFor="btnId">
          <select
            name="btnId"
            id="btnId"
            className="bg-transparent text-gray-500"
          >
            <option>한국어</option>
            <option>영어</option>
            <option>일본어</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default LanguageBtn;
