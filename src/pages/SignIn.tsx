import { Password, User } from "components/Icon/Icons";
import InputField from "components/InputField/InputField";

import { useForm } from "react-hook-form";
import { SignInFormData } from "types/SignIn/types";

const SignIn = () => {
  const { control, handleSubmit } = useForm<SignInFormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="flex flex-col justify-center h-screen w-full items-center gap-5 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white  shadow-2xl rounded-xl h-[28rem] w-[30rem] max-w-full  flex flex-col gap-6 px-6"
      >
        <div className="flex flex-col gap-2 items-center pt-4">
          <h1 className="text-3.5xl font-medium font-quickSand leading-9 text-primary">
            Sign In
          </h1>
          <p className="font-poppins text-sm font-semibold leading-5 text-secondary text-center tracking-wide">
            Log in to your account to continue.
          </p>
        </div>
        <InputField
          control={control}
          name="username"
          label="USERNAME"
          Icon={User}
          placeholder="e.g., John_Doe"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "This is not a valid email",
            },
          }}
        />
        <InputField
          control={control}
          name="password"
          label="PASSWORD"
          Icon={Password}
          placeholder="Password"
          isPassword
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            maxLength: {
              value: 13,
              message: "Password must be no more than 13 characters",
            },
          }}
        />

        <div className="">
          <button
            type="submit"
            className="bg-blue-db-1 p-2 rounded-lg w-full hover:-translate-y-1 transition ease-in-out duration-300"
          >
            <span className=" font-semibold font-quickSand text-[#fff] leading-5 tracking-widest text-sm">
              Log In
            </span>
          </button>
        </div>
        <div className="flex justify-center gap-2 text-xs sm:text-base">
          <div className="flex gap-2">
            <span className="text-sm leading-6 font-bold text-primary font-poppins ">
              Not registered ?
            </span>
            <span className="underline text-[#662e53] text-base font-poppins tracking-wider cursor-pointer">
              Create an account
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
