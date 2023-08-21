function Email() {
  return (
    <div className="flex">
      <label htmlFor="">
        <input
          type="email"
          id=""
          placeholder="이메일 주소"
          required
          className="w-[520px] h-[60px] border pl-[20px]"
        />
      </label>
      <button
        type="button"
        className="bg-red-500 w-[230px] h-[60px] py-[15px] px-[20px] text-white text-[22px] font-semibold  text-center"
      >
        30일 무료 이용 →
      </button>
    </div>
  );
}

export default Email;
