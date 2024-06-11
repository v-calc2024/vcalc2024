import { useEffect, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { HeadContent } from "@/components/Particles/HeaderContent";
import { login } from "@/services/user/login";
import { setCookie } from "nookies";
import Modal from "@mui/material/Modal";
import React from "react";
import { InputText } from "@/components/Particles/forms/TextInput";
import { ButtonLoader } from "@/components/Particles/forms/ButtonLoader";
import { recoverPassword } from "@/services/user/recoverPassword";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [emailPass, setEmailPass] = useState("");

  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  function changeEmailPass(value: any) {
    setEmailPass(value?.target?.value);
  }

  function redirectHome() {
    router.push("/");
  }

  function changeEmail(event: any) {
    setEmail(event.target.value);
    setError(null);
  }

  function changePassword(event: any) {
    setPassword(event.target.value);
    setError(null);
  }

  async function handleLogin(e: any) {
    e.preventDefault();
    setLoading(true);
    const body = { email, password };
    login(body)
      .then((resp: any) => {
        const token = resp?.data?.token;
        setCookie(null, "token", token, {
          maxAge: 60 * 60 * 24,
          path: "/",
        });
        localStorage.setItem("token", token);
        window.location.href = "/";
      })
      .catch((err: any) => {
        setError("Invalid Credentials");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    if (emailPass.length) {
      recoverPassword({ emailPass })
        .then((resp: any) => {
          window.alert("You have been sent an email to recover your password");
        })
        .catch((err: any) => {});
    }
  }
  return (
    <>
      <HeadContent title="Login" />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        width="100vw"
        sx={{
          backgroundImage:
            "linear-gradient(to right top, #051937, #004770, #007c9f, #00b4ba, #1becbf)",
        }}
      >
        <Box
          sx={{
            maxWidth: "90vw",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "4rem",
            borderRadius: "5px",
            gap: "1rem",
          }}
        >
          <div className="logoContainer">
            <div className="logo" onClick={redirectHome}>
              <Image src="/Logo.svg" alt="Logo" width={60} height={60} />
            </div>
          </div>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            Sign in to access your account
          </Typography>
          <Box maxWidth="300px">
            <form onSubmit={handleLogin}>
              <TextField
                label="Email"
                value={email}
                onChange={changeEmail}
                fullWidth
                margin="normal"
                required
                sx={{ width: "100%" }}
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={changePassword}
                fullWidth
                margin="normal"
                required
              />
              {error && (
                <p
                  style={{
                    color: "#d32f2f",
                    fontWeight: "600",
                    fontSize: "0.8rem",
                  }}
                >
                  {error}
                </p>
              )}
              <Box
                sx={{
                  paddingTop: "0.5rem",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p className="forgot-password" onClick={handleOpen}>
                  I forgot my password
                </p>
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  fullWidth
                >
                  {loading ? "Ingresando..." : "Sign In"}
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="forgot-pass-cont">
            <div className="recover-pass">
              <form className="rec-pass-form" onSubmit={handleSubmit}>
                <p className="title">Recover Password</p>
                <InputText
                  label="Email Address"
                  validation={() => true}
                  required={true}
                  name="empailpass"
                  changeHandler={changeEmailPass}
                  value={emailPass}
                  clearError={() => {}}
                />
                <div className="buttonCont">
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={handleClose}
                    sx={{
                      fontSize: 11,
                      height: "2rem",
                      fontWeight: "bold",
                      borderRadius: "1rem",
                      overflow: "hidden",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      fontSize: 11,
                      height: "2rem",
                      fontWeight: "bold",
                      borderRadius: "1rem",
                      overflow: "hidden",
                    }}
                  >
                    {loading ? <ButtonLoader /> : "Recover"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </Box>
      <style jsx>{`
        p {
          width: 100%;
          height: max-content;
          text-align: center;
          box-sizing: border-box;
        }

        a {
          position: absolute;
          right: 2rem;
          bottom: 2rem;
          box-sizing: border-box;
        }

        .buttonCont {
          width: max-content;
          height: max-content;
          justify-self: center;
          display: grid;
          grid-template-columns: max-content max-content;
          grid-column-gap: 1rem;
        }

        .title {
          font-size: 0.8rem;
          font-weight: 600;
        }

        .logoContainer {
          width: 100%;
          height: max-content;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }

        .forgot-password {
          padding: 0;
          padding-bottom: 1rem;
          margin: 0;
          width: max-content;
          height: max-content;
          font-size: 0.9rem;
          color: #1976d2;
          cursor: pointer;
        }

        .forgot-password:hover {
          color: #095fb3;
        }

        .logo {
          width: max-content;
          height: max-content;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 100%;
          padding: 0.5rem;
          border: solid 1px var(--border-color);
          box-sizing: border-box;
        }

        .forgot-pass-cont {
          width: 100vw;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
        }

        .rec-pass-form {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-column: 1fr;
          grid-template-rows: max-content max-content max-content;
          grid-row-gap: 1rem;
          box-sizing: border-box;
        }

        .recover-pass {
          width: max-content;
          height: max-content;
          background-color: white;
          padding: 1rem 3rem;
          border-radius: 0.4rem;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default LoginPage;
