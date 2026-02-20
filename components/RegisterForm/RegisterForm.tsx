"use client";

import { FormEvent, useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

interface RegisterFormTypes {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const [form, setForm] = useState<RegisterFormTypes>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError(null);
    setSuccess(null);
  };

  return (
    <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
      <input
        type="text"
        id="fullName"
        className="outline-none text-[#f2f2f2] font-medium w-full py-3 px-6 rounded-md text-lg border-2 
      border-[#2E314F] bg-[#161929] focus:border-[#404368] transition duration-200"
        placeholder="氏名"
        name="fullName"
        minLength={3}
        maxLength={28}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        id="email"
        className="outline-none text-[#f2f2f2] font-medium w-full py-3 px-6 rounded-md text-lg border-2 
      border-[#2E314F] bg-[#161929] focus:border-[#404368] transition duration-200"
        placeholder="あなたのメールアドレス"
        name="email"
        onChange={handleChange}
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
        onChange={handleChange}
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
        onChange={handleChange}
        required
      />

      <div className="mt-8 flex flex-col gap-y-3 text-center">
        {error && <strong className="text-red-500 text-wrap">{error}</strong>}
        {success && (
          <strong className="text-green-500 text-wrap">{success}</strong>
        )}

        <PrimaryButton
          disabled={loading}
          type="submit"
          className="w-full h-12 sm:h-14 lg:text-lg"
        >
          新規登録
        </PrimaryButton>
      </div>
    </form>
  );
};

export default RegisterForm;
