import PrimaryButton from "../Buttons/PrimaryButton";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-y-5">
      <input
        type="email"
        id="email"
        className="outline-none text-[#f2f2f2] font-medium w-full py-3 px-6 rounded-md text-lg border-2 
      border-[#2E314F] bg-[#161929] focus:border-[#404368] transition duration-200"
        placeholder="あなたのメールアドレス"
        name="email"
        required
      />

      <input
        type="email"
        id="email"
        className="outline-none text-[#f2f2f2] font-medium w-full py-3 px-6 rounded-md text-lg border-2 
      border-[#2E314F] bg-[#161929] focus:border-[#404368] transition duration-200"
        placeholder="パスワードを設定"
        name="password"
        minLength={8}
        maxLength={12}
        required
      />

      <PrimaryButton
        type="submit"
        className="w-full h-12 mt-8 sm:h-14 lg:text-lg"
      >
        ログイン
      </PrimaryButton>
    </form>
  );
};

export default LoginForm;
