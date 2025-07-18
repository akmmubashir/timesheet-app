"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return (
    <div className="w-full h-full">
      <form onSubmit={handleLogin} className="space-y-6">
        <div className="flex flex-col gap-[6px]">
          <label className="text-[#111928] font-[400] text-[14px]">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border border-[#D1D5DB] focus:border-[#1C64F2] rounded-[8px] p-[10px] w-full text-[#111928] font-[500] text-[14px]"
            required
          />
        </div>

        <div className="flex flex-col gap-[6px]">
          <label className="text-[#111928] font-[400] text-[14px]">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-[#D1D5DB] focus:border-[#1C64F2] rounded-[8px] p-[10px] w-full text-[#111928] font-[500] text-[14px]"
            required
          />
        </div>

        <div className="flex items-center gap-[10px]">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label className="text-[#111928] font-[400] text-[14px]">
            Remember me
          </label>
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <button
          type="submit"
          className="border border-[#1C64F2] bg-[#1A56DB] hover:bg-[#1C64F2] text-white font-[500] text-[14px] rounded-[8px] p-[10px] cursor-pointer w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
