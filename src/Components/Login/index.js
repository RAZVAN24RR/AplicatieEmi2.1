import React, { useState, useRef } from "react";
import "./style.css";
import { InputText } from "primereact/inputtext";
import { useHistory } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function Login() {
  const [User, setUser] = useState("");
  const [pasw, setPasw] = useState("");

  const history = useHistory();
  const toastBC = useRef(null);

  const toastClickAgain = () => {
    toastBC.current.clear();
  };
  const toastClickAbort = () => {
    history.push("/");
  };
  function showConfirm() {
    toastBC.current.show({
      severity: "error",
      sticky: true,
      content: (
        <div className="p-flex p-flex-column" style={{ flex: "1" }}>
          <div className="p-text-center">
            <i
              className="pi pi-exclamation-triangle"
              style={{ fontSize: "3rem" }}
            ></i>
            <h4>Login unsuccessfull</h4>
            <p>Limited number of attempts</p>
          </div>
          <div className="p-grid p-fluid">
            <div className="p-col-6">
              <Button
                onClick={toastClickAgain}
                type="button"
                label="I could Try again"
                className="p-button-success"
              />
            </div>
            <div className="p-col-6">
              <Button
                onClick={toastClickAbort}
                type="button"
                label="I'll Fuck off"
                className="p-button-secondary"
              />
            </div>
          </div>
        </div>
      ),
    });
  }
  const submitForm = (e) => {
    e.preventDefault();
    console.log(`username is ${User} and password is ${pasw}`);
    if (User === "admin" && pasw === "admin") {
      history.push("/Components/Home");
    } else if (e.target.value === "" || !e.target.value) {
      showConfirm();
    } else {
      showConfirm();
    }
  };
  return (
    <React.Fragment>
      <div className="LoginContainer">
        <Toast ref={toastBC} position="center-center" />
        <header className="Header" id="HeaderLogin">
          {" "}
          Welcome to <span className="Alb"> Upcoming </span>{" "}
          <span id="Galben">Movies</span>
        </header>
        <form onSubmit={submitForm}>
          <div className="LoginContent">
            <header id="LoginTitlu">LOGIN</header>
            <h4 className="UserName">UserName</h4>

            <InputText
              id="UserInput"
              className="small"
              value={User}
              onChange={(e) => setUser(e.target.value)}
            />
            <h4 className="Password">Parola</h4>
            <InputText
              id="PassInput"
              className="small"
              value={pasw}
              onChange={(e) => setPasw(e.target.value)}
            />
            <br />

            <Button
              id="ButonSign"
              label="Sign in"
              className="p-button-raised p-button-rounded"
            />
          </div>
        </form>

        <br />
        <header className="ParagrafTitlu">Terms and conditions</header>
        <p className="Paragraf">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </React.Fragment>
  );
}
// import React, { useState } from "react";
// import "./style.css";

// const Login = () => {
//   const [user, setUser] = useState({
//     username: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});

//   const onChangeHandler = (e) => {
//     if (
//       (e.currentTarget.value === "" || !e.currentTarget.value) &&
//       (e.currentTarget.id === "username" || e.currentTarget.id === "password")
//     ) {
//       setErrors({
//         ...errors,
//         [e.currentTarget.id]: "**Obligatoriu",
//       });
//     } else {
//       let newErrors = { ...errors };
//       delete newErrors[e.currentTarget.id];
//       setErrors({
//         ...newErrors,
//       });
//     }
//   };
//   return (
//     <React.Fragment>
//       <div className="container">
//         <div className="header">Login</div>
//         <div className="form">
//           <div>
//             <label htmlFor="username">Username</label>
//             <input
//               onChange={onChangeHandler}
//               type="text"
//               name="username"
//               id="username"
//               placeholder="Username"
//             ></input>
//             {errors.username && (
//               <span style={{ color: "red", fontSize: "14px" }}>
//                 {errors.username}
//               </span>
//             )}
//           </div>
//           <div>
//             <label htmlFor="username">Password</label>
//             <input
//               onChange={onChangeHandler}
//               type="password"
//               name="password"
//               id="password"
//             ></input>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };
