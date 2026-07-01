// import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { toast } from "sonner";

import { LoginInput } from "../Component/CustomComponents";

import { useLogin } from "../apis/authApi";

import { LoginCredentials } from "../Interface/AuthInterfaces";
import { Button } from "../components/ui/button";

export default function LoginPage() {
  const { mutateAsync: logindata } = useLogin();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginCredentials>();

  const onSubmit = handleSubmit(async (value: LoginCredentials) => {
    try {
      await logindata(value);

      toast.success("Login Successful");
    } catch (error) {
      console.log(error);

      toast.error("Login Failed");
    }
  });

  return (
    <div
      className="
        flex
        items-center
        justify-center
        w-full
        h-screen
        bg-black
      "
    >
      {/* FORM CARD */}
      <form
        onSubmit={onSubmit}
        className="
          flex
          flex-col
          items-start
          gap-3
          w-[90%]
          sm:w-[75%]
          md:w-[50%]
          lg:w-[35%]
          rounded-xl
          bg-zinc-900
          px-8
          py-10
        "
      >
        {/* HEADING */}
        <h1
          className="
            text-3xl
            font-medium
            text-gray-200
            font-nunito
          "
        >
          Welcome back!
        </h1>

        {/* EMAIL */}
        <LoginInput
          register={register}
          type="text"
          name="email"
          label="Account"
          placeholder="User email"
        />

        <p
          className="
            text-xs
            text-red-500
          "
        >
          {errors.email?.message}
        </p>

        {/* PASSWORD */}
        <LoginInput
          register={register}
          type="password"
          name="password"
          label="Password"
          placeholder="User Password"
        />

        <p
          className="
            text-xs
            text-red-500
          "
        >
          {errors.password?.message}
        </p>

        {/* BUTTON */}
        <Button
          type="submit"
          className="
            w-full
            bg-red-500
            text-black
            hover:bg-red-600
            font-semibold
          "
        >
          Sign In
        </Button>

        {/* LINKS */}
        <p
          className="
            text-xs
            text-red-400
            cursor-pointer
            hover:underline
          "
        >
          Forget your Password?
        </p>

        <Link to="/sign-up">
          <p
            className="
              text-xs
              text-red-400
              hover:underline
            "
          >
            Sign up for a new account
          </p>
        </Link>
      </form>
    </div>
  );
}
