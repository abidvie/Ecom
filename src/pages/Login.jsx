// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// function Login() {
//   const [signindata, setsignindata] = useState({
//     email:"",
//     password:"",
//   });
//   const handleinputchange = (e) => {
//   const { name, value } = e.target;
//   setsignindata((prevData) => ({
//     ...prevData,
//     [name]: value,
//   }));
// };
// const handlesubmit=(e)=>{
//     e.preventDefault();
//     console.log(signindata);
// }
//   return (
//     <section className="py-10 ">
//       <div className="container">
//         <div className="card shadow-md w-[500px] rounded-md bg-amber-50 p-3">
//           <h3 className="text-center">Log in to your account</h3>
//           <form onSubmit={handlesubmit}>
//             <TextField
//             type="email"
//               className="w-full mt-2 mb-3"
//               id="email"
//               label="Email"
//               variant="standard"
//               name="email"
//               value={signindata.email}
//               onChange={handleinputchange}
//             />
//             <TextField
//             type="password"
//               name="password"
//               className="w-full"
//               id="pass"
//               label="Password"
//               variant="standard"
//               value={signindata.password}
//               onChange={handleinputchange}
//             />
//            <Button type="submit">log in</Button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;



import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login() {
  const [signindata, setsignindata] = useState({
    email: "",
    password: "",
  });

  const handleinputchange = (e) => {
    const { name, value } = e.target;
    setsignindata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(signindata);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h3 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Log in to your account
        </h3>
        <form onSubmit={handlesubmit} className="space-y-8">
          <TextField
            type="email"
            className="w-full"
            id="email"
            label="Email"
            variant="standard"
            name="email"
            value={signindata.email}
            onChange={handleinputchange}
            fullWidth
          />
          <TextField
            type="password"
            name="password"
            className="w-full"
            id="password"
            label="Password"
            variant="standard"
            value={signindata.password}
            onChange={handleinputchange}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full h-5 "
            fullWidth
          >
            Log In
          </Button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Register
          </a>
                  <a href="/otp" className="text-blue-500 hover:underline ml-1.5">
            Forget password
          </a>
        </div>
      </div>
    </section>
  );
}

export default Login;
