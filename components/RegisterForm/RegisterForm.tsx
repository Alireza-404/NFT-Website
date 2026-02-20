import PrimaryButton from "../Buttons/PrimaryButton";

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-y-5">
      <input
        type="text"
        id="fullName"
        className="outline-none text-[#f2f2f2] font-medium w-full py-3 px-6 rounded-md text-lg border-2 
      border-[#2E314F] bg-[#161929] focus:border-[#404368] transition duration-200"
        placeholder="氏名"
        name="fullName"
        minLength={3}
        maxLength={28}
        required
      />

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
        type="password"
        id="password"
        autoComplete="new-password"
        className="outline-none text-[#f2f2f2] font-medium w-full py-3 px-6 rounded-md text-lg border-2 
      border-[#2E314F] bg-[#161929] focus:border-[#404368] transition duration-200"
        placeholder="パスワードを設定"
        name="password"
        minLength={8}
        maxLength={12}
        required
      />

      <input
        type="password"
        id="confirm-password"
        autoComplete="new-password"
        className="outline-none text-[#f2f2f2] font-medium w-full py-3 px-6 rounded-md text-lg border-2 
      border-[#2E314F] bg-[#161929] focus:border-[#404368] transition duration-200"
        placeholder="パスワードを再入力"
        name="confirmPassword"
        minLength={8}
        maxLength={12}
        required
      />

      <PrimaryButton
        type="submit"
        className="w-full h-12 mt-8 sm:h-14 lg:text-lg"
      >
        新規登録
      </PrimaryButton>
    </form>
  );
};

export default RegisterForm;
