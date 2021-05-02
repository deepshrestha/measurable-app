import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

//import "./../../css/App.css";
//import "./../../css/bootstrap4.min.css";

const Login = () => {
    let inputRef = useRef();
    let history = useHistory();

    let initialState = {
        email: null,
        password: null
    };

    const [formState, setFormState] = useState(initialState);

    const onHandleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const onLogin = event => {
        event.preventDefault();

        const { email, password } = formState;

        if (email === "sid@organicecommerce.com" && password === "12345678") {
            if (!window.localStorage.getItem("user_name"))
                window.localStorage.setItem("user_name", "Sid");

            history.push("/new-react-device-list-route");
        } else {
            alert("Login credential is not matched!");
        }
    };

    return (
        <div className="bg-40 text-black h-full">
            <div className="h-full">
                <div className="px-view py-view mx-auto">
                    <div className="mx-auto py-8 max-w-sm text-center text-90">
                        <img
                            className="logo"
                            src="/assets/measurable-logo-login-page.jpg"
                            alt="Measurable Energy"
                        />
                    </div>

                    <form className="bg-white shadow rounded-lg p-8 max-w-login mx-auto" onSubmit={(event) => onLogin(event)}>
                        <h2 className="text-2xl text-center font-normal mb-6 text-90">
                            Welcome Back!
                        </h2>
                        <svg
                            className="block mx-auto mb-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="2"
                            viewBox="0 0 100 2"
                        >
                            <path fill="#D8E3EC" d="M0 0h100v2H0z"></path>
                        </svg>

                        <div className="mb-6 ">
                            <label
                                className="block font-bold mb-2"
                                htmlFor="email"
                            >
                                Email Address
                            </label>
                            <input
                                ref={inputRef}
                                className="form-control form-input form-input-bordered w-full"
                                id="email"
                                type="email"
                                name="email"
                                required=""
                                autoFocus=""
                                onChange={onHandleChange}
                            />
                        </div>

                        <div className="mb-6 ">
                            <label
                                className="block font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="form-control form-input form-input-bordered w-full"
                                id="password"
                                type="password"
                                name="password"
                                required=""
                                onChange={onHandleChange}
                            />
                        </div>

                        <div className="flex mb-6">
                            <label className="flex items-center block text-xl font-bold">
                                <input
                                    className=""
                                    type="checkbox"
                                    name="remember"
                                />
                                <span className="text-base ml-2">
                                    Remember Me
                                </span>
                            </label>

                            <div className="ml-auto">
                                <a
                                    className="text-primary dim font-bold no-underline"
                                    href="https://www.dev-54ta5gq-xv6fw36gd2nx2.uk-1.platformsh.site/nova/password/reset"
                                >
                                    Forgot Your Password?
                                </a>
                            </div>
                        </div>

                        <button
                            className="w-full btn btn-default btn-primary hover:bg-primary-dark"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
