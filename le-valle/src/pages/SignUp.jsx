import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
     const [isSubmitting, setIsSubmitting] = useState(false);
    
      const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const handlechange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        }));
    
      };
  return (
     <div>
      <div className="min-h-screen  flex  justify-center items-center  bg-gray-50">
        <div className="w-[90%]  md:w-[450px] h-[550px]  p-5 rounded-2xl bg-gray-100 shadow-xl">
          <div className="flex  justify-center items-center mb-4">
            <h1 className="text-xs lg:text-xl  font-sans font-medium">
              Create an Account
            </h1>
          </div>

          <form className="mt-3" 
         // onSubmit={handleSubmit}
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                User Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handlechange}
                className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="JHON DOE"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handlechange}
                className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="youremailid@domain.com"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handlechange}
                className="bg-gray-100 border border-gray-200 text-black text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="password_confirmation"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handlechange}
                className="bg-gray-100 border border-gray-200 text-black text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>

            <div className="flex flex-col gap-3 items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm min-w-[150px] py-2 px-6 text-center whitespace-nowrap transition-all duration-200"
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </button>

              <Link
                to={"/"}
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-sm"
              >
                Already have an account? Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
