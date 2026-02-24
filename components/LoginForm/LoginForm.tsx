"use client";

import { useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

const LoginForm = () => {
  const router = useRouter();
  const { setUser } = useUser();

  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError(null);
    setSuccess(null);
    setIsSuccess(false);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        setError("エラーが発生しました。もう一度お試しください。");
        return;
      }

      setUser({ email: form.email.split("@")[0] });

      setSuccess("ログインに成功しました。");
      setIsSuccess(true);
      setLoading(false);

      router.replace("/");
    } catch {
      setError("エラーが発生しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
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
        autoComplete="current-password"
        className="outline-none text-[#f2f2f2] font-medium w-full py-3 px-6 rounded-md text-lg border-2 
      border-[#2E314F] bg-[#161929] focus:border-[#404368] transition duration-200"
        placeholder="パスワードを設定"
        name="password"
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
          ログイン
        </PrimaryButton>
      </div>
    </form>
  );
};

export default LoginForm;
