// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import myimg from "./img/img.jpg";

const Container = () => {
  const initialState = {
    email: "",
    password: "",
    check: false,
  };
  const [formData, setData] = useState(initialState);

  const [validation, setValidation] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData({ ...formData, [name]: value });
  }

  const checkValidation = () => {
    let errors = validation;

    // email validation
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!formData.email.match(emailCond)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }

    //password validation
    const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    const password = formData.password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else if (!password.match(cond1)) {
      errors.password = "Password must contain at least one lowercase";
    } else if (!password.match(cond2)) {
      errors.password = "Password must contain at least one capital letter";
    } else if (!password.match(cond3)) {
      errors.password = "Password must contain at least a number";
    } else {
      errors.password = "";
    }

    setValidation(errors);
  };
  useEffect(() => {
    checkValidation();
  }, [formData]);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      {/* <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="Woman's Face"></img>
    <form onSubmit={onSubmit}>
      <label>Login Form</label>
      <div class="form-group">
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        ></input>
        <br />
        {validation.email && <p>{validation.email}</p>}
      </div>

      <div class="form-group">
        {" "}
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          required
        ></input>
        <br />
        {validation.password && <p>{validation.password}</p>}
      </div>
      <div class="form-group">
        {" "}
        <input type="checkbox" name="check" onChange={handleChange}></input>
        <label>Remember Me</label>
      </div>
      <div class="form-group">
        {" "}
        <a href="/">Forget Password?</a>
      </div>
      <div class="form-group">
        {" "}
        <button
          type="submit"
          class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
      <div class="form-group">
        {" "}
        <label>Get Members Benefit.</label>
        <a href="/">Sign Up</a>
      </div>
    </form> */}
      <div class="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
        <div class="flex shadow-md">
          <div
            class="flex flex-wrap content-center justify-center rounded-l-md bg-white"
            style={{ width: 350, height: 470 }}
          >
            <div class="w-72">
              <h1 class="text-xl font-semibold">Welcome back</h1>
              <small class="text-gray-400">
                Welcome back! Please enter your details
              </small>

              <form class="mt-4" onSubmit={onSubmit}>
                <div class="mb-3">
                  <label class="mb-2 block text-xs font-semibold">Email</label>
                  <input
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    type="email"
                    placeholder="Enter your email"
                    class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                  <br />
                  {validation.email && <p>{validation.email}</p>}
                </div>

                <div class="mb-3">
                  <label class="mb-2 block text-xs font-semibold">
                    Password
                  </label>
                  <input
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    required
                    type="password"
                    placeholder="*****"
                    class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                  <br />
                  {validation.password && <p>{validation.password}</p>}
                </div>

                <div class="mb-3 flex flex-wrap content-center">
                  <input
                    name="check"
                    onChange={handleChange}
                    id="remember"
                    type="checkbox"
                    class="mr-1 checked:bg-purple-700"
                  />{" "}
                  <label for="remember" class="mr-auto text-xs font-semibold">
                    Remember for 30 days
                  </label>
                  <a href="#" class="text-xs font-semibold text-purple-700">
                    Forgot password?
                  </a>
                </div>

                <div class="mb-3">
                  <button
                    type="submit"
                    class="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <div class="text-center">
                <span class="text-xs text-gray-400 font-semibold">
                  Don't have account?
                </span>
                <a href="#" class="text-xs font-semibold text-purple-700">
                  Sign up
                </a>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap content-center justify-center rounded-r-md">
            <img
              class="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
              src={myimg}
              style={{ height: 470 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <div class="App">
      <Container />
    </div>
  );
}

export default App;
