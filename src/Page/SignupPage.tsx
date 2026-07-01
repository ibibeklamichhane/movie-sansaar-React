import { FC } from "react";
import { useForm } from "react-hook-form";
import { LoginInput } from "../Component/CustomComponents.tsx";
import { Link } from "react-router-dom";
import { useRegister } from "../apis/authApi.ts";
import { RegisterCredentials } from "../Interface/AuthInterfaces.ts";

const SignupPage: FC<any> = ({}) => {
  const { mutateAsync: registerdata } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>({});

  const onSubmit = handleSubmit(async (value: RegisterCredentials) => {
    const { repeatPassword, ...payload } = value;
    try {
      await registerdata(payload);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-zinc-950 py-10">
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-start gap-5 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] max-w-[500px] bg-zinc-900 rounded-xl p-10"
      >
        <h1 className="text-lg font-medium text-gray-300 font-nunito">
          Sign up!
        </h1>

        <LoginInput
          register={register}
          type="text"
          name="name"
          label="Name"
          placeholder="User name"
        />
        {errors.name && (
          <p className="text-[11px] text-red-400 font-nunito -mt-3">
            {errors.name.message}
          </p>
        )}

        <LoginInput
          register={register}
          type="text"
          name="email"
          label="Account"
          placeholder="User email"
        />
        {errors.email && (
          <p className="text-[11px] text-red-400 font-nunito -mt-3">
            {errors.email.message}
          </p>
        )}

        <LoginInput
          register={register}
          type="password"
          name="password"
          label="Password"
          placeholder="User Password"
        />
        {errors.password && (
          <p className="text-[11px] text-red-400 font-nunito -mt-3">
            {errors.password.message}
          </p>
        )}

        <LoginInput
          register={register}
          type="password"
          name="repeatPassword"
          label="Repeat Password"
          placeholder="Confirm Password"
        />
        {errors.repeatPassword && (
          <p className="text-[11px] text-red-400 font-nunito -mt-3">
            {errors.repeatPassword.message}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-500 text-zinc-900 text-xs font-semibold py-2.5 rounded-md transition-colors"
        >
          Sign Up
        </button>

        <Link to="/log-in" className="text-red-500 text-[11px] font-nunito">
          Have an existing account? Sign in
        </Link>
      </form>
    </div>
  );
};
export default SignupPage;
