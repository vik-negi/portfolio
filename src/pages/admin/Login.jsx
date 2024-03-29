import React, { useState } from "react";
import { social } from "../../assets/svg/social";
import create from "../../utils/Theme";
import { signin } from "../../axios/auth";
import { Link, useNavigate } from "react-router-dom";

import { errorMessage, successMessage } from "../../utils/Toast";

import { useQuery, useQueryClient, useMutation } from "react-query";

const LoginWithSocial = ({ svgImage }) => {
  return (
    <button
      type="button"
      data-te-ripple-init
      fill="currentColor"
      data-te-ripple-color="light"
      className="mx-1 h-16 w-16 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    >
      <img src={svgImage} alt="alt" />
    </button>
  );
};

const TextField = ({ name, value, onChange, label }) => {
  const isFilled = value !== "";

  return (
    <div className="relative mb-6" data-te-input-wrapper-init>
      <input
        type="text"
        className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-neutral-800 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
        id={`exampleFormControlInput-${name}`}
        name={name}
        value={value}
        placeholder={label}
        onChange={onChange}
      />
      <label
        htmlFor={`exampleFormControlInput-${name}`}
        className={`absolute left-3 top-[-1rem] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out ${
          isFilled ? "text-primary -translate-y-[1.15rem] scale-[0.8]" : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const [loading, setLoading] = useState(false);

  const mutation = useMutation((data) => signin(data), {
    onSuccess: (data) => {
      successMessage("Login Successfull");

      // window.location.reload();
      setLoader(false);
      console.log("login data : ", data?.data?.data);
      localStorage.setItem(
        "userAuth",
        JSON.stringify({ token: data?.data?.token, data: data?.data?.data })
      );
      setTimeout(() => {
        navigate("/admin/dashboard");
        window.location.reload();
        setLoader(false);
      }, 1000);
      // navigate("/admin/dashboard");
    },
    onError: () => {
      errorMessage("Login Failed");
    },
  });

  // const handleSubmit = (data) => {
  //   if (loginData.email !== "" && loginData.password !== "") {
  //     mutation.mutate(loginData);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const { email, password } = loginData;
    try {
      if (!email) {
        errorMessage("Email is required!");
      } else if (!password) {
        errorMessage("Password is required!");
      } else {
        // do signin
        localStorage.setItem(
          "userAuth",
          JSON.stringify({ token: "token", data: {} })
        );
        mutation.mutate(loginData);
      }
    } catch (error) {
      errorMessage("Invaid credential");
    } finally {
      setLoader(false);
    }
  };

  const store = create();

  return (
    <div className="h-screen sm:px-[6rem]">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          <div className="mb-12 pb-10 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-[20px]">Sign in with</p>
                <LoginWithSocial svgImage={social.facebook} />
                <LoginWithSocial svgImage={social.twitter} />
                <LoginWithSocial svgImage={social.linkedin} />
              </div>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 mb-5">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p>
              </div>

              <TextField
                name="email"
                value={loginData.email}
                onChange={(e) => {
                  setLoginData({ ...loginData, email: e.target.value });
                }}
                label="Email address"
              />
              <TextField
                name="password"
                value={loginData.password}
                onChange={(e) => {
                  setLoginData({ ...loginData, password: e.target.value });
                }}
                label="Password"
              />

              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] flex items-center">
                  <input type="checkbox" value="" />
                  <label
                    className="inline-block  ml-2 text-[12px] hover:cursor-pointer"
                    for="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>

                <a
                  href="#!"
                  className="text-primary text-[12px] font-semibold hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="button"
                  className={`sm:w-[150px] w-full px-4 py-4 rounded-lg text-md font-medium ${
                    store.theme !== "light"
                      ? "bg-white text-[#232323]"
                      : "bg-[#232323] text-white"
                  }`}
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={handleSubmit}
                  disabled={mutation.isLoading}
                >
                  {mutation.isLoading ? " Loading..." : "Login"}
                </button>

                <p className="mb-0 mt-2 pt-1 text-[12px] font-semibold">
                  Don't have an account?
                  <a
                    href="/#/admin/register"
                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
