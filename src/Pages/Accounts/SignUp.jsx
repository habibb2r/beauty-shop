import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/CommonHooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import SectionTitle from "../../Components/Reuseable/SectionTitle";

const SignUp = () => {
  const navigate = useNavigate();
  const from = "/";
  const today = new Date();
  const dateTimeString = today.toLocaleDateString();
  const timeString = today.toLocaleTimeString();
  const axiosSecure = useAxiosSecure();
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.Email, data.Password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      if (loggedUser.email) {
        const userData = {
          email: loggedUser.email,
          name: data.name,
          picture: null,
          role: "customer",
          createdDate: dateTimeString,
          createdTime: timeString,
        };
        axiosSecure.post("/user", userData).then((res) => {
          if (res.data) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Signed up successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            reset();
            navigate(from, { replace: true });
          }
        });
      }
    });

    console.log(errors);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="py-10">
     <SectionTitle title={"Sign Up Now !"}></SectionTitle>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 py-5">
        <div className="h-[350px]"></div>
        <div>
          <form
            className="flex flex-col justify-center items-center gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="input input-bordered input-info w-full max-w-md"
              type="text"
              placeholder="Username"
              {...register("name", {})}
            />
            <input
              className="input input-bordered input-info w-full max-w-md"
              type="email"
              placeholder="Email"
              {...register("Email", { required: true })}
            />
            <div className="relative w-full max-w-md">
              <input
                className="input input-bordered input-info w-full pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("Password", {
                  required: true,
                  minLength: 8,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.Password && (
              <span className="text-red-500 text-sm">
                Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character.
              </span>
            )}
            <button className="btn btn-success px-5 py-3" type="submit">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
