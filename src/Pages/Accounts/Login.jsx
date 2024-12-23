import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/CommonHooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../Components/Reuseable/SectionTitle";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const today = new Date();
  const dateTimeString = today.toLocaleDateString();
  const timeString = today.toLocaleTimeString();

  const from = location.state?.from?.pathname || "/";

  const axiosSecure = useAxiosSecure();
  const { signin, signInGoogle } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signin(data.Email, data.Password).then((result) => {
      const user = result.user;
      if (user) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate(from, { replace: true });
      }
      console.log(user);
    });
  };

  const handleLogInWithGoogle = () => {
    signInGoogle().then((result) => {
      if (result.user) {
        const data = {
          email: result.user.email,
          name: result.user.displayName,
          picture: result.user.photoURL,
          role: "customer",
          createdDate: dateTimeString,
          createdTime: timeString,
        };
        console.log(data);
        axiosSecure.post("/user", data).then((res) => {
          if (res.data) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Log in successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          }
        });
      }
    });
  };
  return (
    <div className="py-10">
     <SectionTitle title="Login Here"></SectionTitle>
      <div className="py-[3%] flex flex-col md:flex-row justify-center items-center gap-5 md:gap-16">
        <div>
          <div>
            
              <form
                className="flex flex-col justify-center items-center gap-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  className="input input-bordered input-info w-full max-w-md"
                  type="email"
                  placeholder="Email"
                  {...register("Email", { required: true })}
                />
                <input
                  className="input input-bordered input-info w-full max-w-md"
                  type="password"
                  placeholder="Password"
                  {...register("Password", {})}
                />

                <button className="btn btn-success px-5 py-3" type="submit">
                  Login
                </button>
              </form>
           
            <div className="divider divider-secondary">Or login with</div>
            <div className="flex justify-center items-center gap-10">
              <button
                onClick={handleLogInWithGoogle}
                className="text-5xl rounded-full"
              >
                <FcGoogle />
              </button>
            </div>
            <div className="text-center pt-5">
              <p className="font-semibold text-error">
                New User?{" "}
                <Link to="/signup" className="text-info font-bold">
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
