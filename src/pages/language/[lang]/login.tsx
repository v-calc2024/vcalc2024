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

const LoginPage = ({ lang }: any) => {
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

  let title = "Sign in to access your account";
  let email_input = "Email";
  let password_input = "Password";
  let forgot_pass_input = "I forgot my password";
  let loading_input = "Loading";
  let sing_in_input = "Sign In";
  let recover_title = "Recover Password";
  let email_address_input = "Email Address";
  let cancel_input = "Cancel";
  let recover_input = "Recover";
  let invalid_credentials = "Invalid Credentials";

  switch (lang) {
    case "es":
      title = "Inicia sesión para acceder a tu cuenta";
      email_input = "Email";
      password_input = "Password";
      forgot_pass_input = "Olvidé mi contraseña";
      loading_input = "Cargando";
      sing_in_input = "Iniciar sesión";
      recover_title = "Recuperar contraseña";
      email_address_input = "Dirección de Email";
      cancel_input = "Cancelar";
      recover_input = "Recuperar";
      invalid_credentials = "Credenciales no válidas";
      break;
    case "fr":
      title = "Enregistrez-vous pour accéder à votre compte";
      email_input = "E-mail";
      password_input = "Mot de passe";
      forgot_pass_input = "j'ai oublié mon mot de passe";
      loading_input = "Chargement";
      sing_in_input = "Se connecter";
      recover_title = "Récupérer mot de passe";
      email_address_input = "Adresse e-mail";
      cancel_input = "Annuler";
      recover_input = "Récupérer";
      invalid_credentials = "Les informations d'identification invalides";
      break;
    case "hr":
      title = "Prijavite se za pristup svom računu";
      email_input = "Elektronička pošta";
      password_input = "Lozinka";
      forgot_pass_input = "Zaboravio sam lozinku";
      loading_input = "Učitavam";
      sing_in_input = "Prijaviti se";
      recover_title = "Obnovi lozinku";
      email_address_input = "Email adresa";
      cancel_input = "Odustani";
      recover_input = "Oporavi";
      invalid_credentials = "Nevažeće vjerodajnice";
      break;
    case "sq":
      title = "Identifikohu për të hyrë në llogarinë tënde";
      email_input = "Email";
      password_input = "Fjalëkalimin";
      forgot_pass_input = "Kam harruar fjalëkalimin tim";
      loading_input = "Po ngarkohet";
      sing_in_input = "Hyni";
      recover_title = "Rikuperoni fjalëkalimin";
      email_address_input = "Adresa e emailit";
      cancel_input = "Anulo";
      recover_input = "Rikuem";
      invalid_credentials = "Kredencialet e pavlefshme";
      break;
    default:
      title = "Sign in to access your account";
      email_input = "Email";
      password_input = "Password";
      forgot_pass_input = "I forgot my password";
      loading_input = "Loading";
      sing_in_input = "Sign In";
      recover_title = "Recover Password";
      email_address_input = "Email Address";
      cancel_input = "Cancel";
      recover_input = "Recover";
      invalid_credentials = "Invalid Credentials";
      break;
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  function changeEmailPass(value: any) {
    setEmailPass(value?.target?.value);
  }

  function redirectHome() {
    router.push(`/language/${router.query.lang}`);
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
        window.location.href = `/language/${router.query.lang}`;
      })
      .catch((err: any) => {
        setError(invalid_credentials);
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
            {title}
          </Typography>
          <Box maxWidth="300px">
            <form onSubmit={handleLogin}>
              <TextField
                label={email_input}
                value={email}
                onChange={changeEmail}
                fullWidth
                margin="normal"
                required
                sx={{ width: "100%" }}
              />
              <TextField
                label={password_input}
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
                  {forgot_pass_input}
                </p>
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  fullWidth
                >
                  {loading ? loading_input : sing_in_input}
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
                <p className="title">{recover_title}</p>
                <InputText
                  label={email_address_input}
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
                    {cancel_input}
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
                    {loading ? <ButtonLoader /> : recover_input}
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

export const getServerSideProps: any = async (context: any) => {
  return { props: { lang: context.query.lang } };
};
