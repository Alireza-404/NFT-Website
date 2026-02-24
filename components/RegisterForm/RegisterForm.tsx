"use client";

import { useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useRouter } from "next/navigation";

interface RegisterFormTypes {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const router = useRouter();

  const [form, setForm] = useState<RegisterFormTypes>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError(null);
    setSuccess(null);
    setIsSuccess(false);

    if (form.password !== form.confirmPassword) {
      setError("パスワードが一致しません。");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          password: form.password,
        }),
      });

      if (!res.ok) {
        setError("エラーが発生しました。もう一度お試しください。");
        return;
      }

      setIsSuccess(true);
      setSuccess("登録が完了しました。");
      setLoading(false);

      setTimeout(() => {
        router.replace("/");
      }, 1500);
    } catch {
      setError("エラーが発生しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
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
          disabled={loading || isSuccess}
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
