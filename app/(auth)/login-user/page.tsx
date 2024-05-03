"use client";

import { Formik } from "formik";

function LoginUser() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-slate-200 w-full max-w-3xl p-3 md:p-11 flex flex-col items-center mt-10 ">
        <h2 className="text-2xl font-bold text-center my-6">
          Login to your account
        </h2>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          className=""
          validate={(values) => {
            const errors: {
              email: string;
              password: string;
              confirmPassword: string;
            } = {
              email: "",
              password: "",
              confirmPassword: "",
            };
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <label htmlFor="email" className="md:w-1/4 flex-shrink-0">
                  Email
                </label>
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email here"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="px-1 py-1 rounded-md w-full"
                  />
                  <span className="text-red-400 text-xs">
                    {errors.email && touched.email && errors.email}
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-4">
                <label htmlFor="password" className="md:w-1/4 flex-shrink-0">
                  Password
                </label>
                <div className="flex-1">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password here"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className="px-1 py-1 rounded-md w-full"
                  />
                  <span className="text-red-400 text-xs">
                    {errors.password && touched.password && errors.password}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginUser;
