import { HeadContent } from "@/components/Particles/HeaderContent";
import { InputText } from "@/components/Particles/forms/TextInput";
import { validateJWTFormat } from "@/utils/validateJWTFormat";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { ButtonLoader } from "@/components/Particles/forms/ButtonLoader";
import { resetPassword } from "@/services/user/resetPassword";
import { useRouter } from "next/router";

export default function RecoverPassword({ token }: any) {
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [errors, setErrors] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  function changePassword(event: any) {
    setPassword(event?.target?.value);
    setErrors([]);
  }

  function changeRepeatPassword(event: any) {
    setRepeatPassword(event?.target?.value);
    setErrors([]);
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    if (!password) {
      setErrors(["Invalid password"]);
    } else if (password && password.length < 6) {
      setErrors(["Invalid password"]);
    } else if (password !== repeatPassword) {
      setErrors(["Passwords don't match"]);
    } else {
      setLoading(true);
      resetPassword({ password }, token)
        .then((resp: any) => {
          router.push("/login");
        })
        .catch((err) => {
          setErrors(["Invalid password"]);
        })
        .finally(() => {
          setLoading(false);
        });
      setErrors([]);
    }
  }

  return (
    <>
      <HeadContent title="Recover Password" />
      <main>
        <h1>Enter your new password</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ width: "400px", maxWidth: "90vw" }}>
            <InputText
              label="Password"
              type="text"
              validation={() => true}
              required={true}
              name="sessionname"
              defaultValue=""
              clearError={() => {}}
              changeHandler={changePassword}
              value={password}
            />
          </div>
          <div style={{ width: "400px", maxWidth: "90vw" }}>
            <InputText
              label="Repeat Password"
              type="text"
              validation={() => true}
              required={true}
              name="sessionname"
              defaultValue=""
              clearError={() => {}}
              changeHandler={changeRepeatPassword}
              value={repeatPassword}
            />
          </div>
          {errors?.length > 0 && (
            <div className="errors-container">
              <p>Errors: </p>
              {errors?.map((error: any) => {
                return <p key={error}>- {error}</p>;
              })}
            </div>
          )}
          <div className="buttonCont">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                fontSize: 13,
                height: "3rem",
                fontWeight: "bold",
                borderRadius: "1.5rem",
                overflow: "hidden",
              }}
            >
              {loading ? <ButtonLoader /> : "UPDATE PASSWORD"}
            </Button>
          </div>
        </form>
      </main>
      <style jsx>{`
        main {
          width: 100vw;
          height: max-content;
          display: grid;
          grid-row-gap: 1rem;
          justify-content: center;
          padding: 3rem 1rem;
          box-sizing: border-box;
        }

        h1 {
          font-size: 1.2rem;
          text-align: center;
        }

        form {
          width: 100vw;
          height: max-content;
          display: grid;
          grid-row-gap: 1rem;
          justify-content: center;
          box-sizing: border-box;
        }

        .buttonCont {
          width: max-content;
          height: max-content;
          justify-self: center;
        }

        .errors-container {
          width: max-content;
          height: max-content;
          padding: 1rem;
          background-color: tomato;
          font-size: 0.8rem;
          color: white;
          display: grid;
          grid-template-columns: max-content;
          grid-auto-rows: max-content;
          grid-column-gap: 1.5rem;
          justify-self: center;
          border-radius: 1rem;
          box-sizing: border-box;
        }

        .errors-container p {
          margin: 0.5rem;
        }
      `}</style>
    </>
  );
}

export const getServerSideProps: any = async (context: any) => {
  const { params } = context;
  const token = params?.token || "";

  const isValid = token?.length ? validateJWTFormat(token) : false;

  if (!isValid) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { token } };
};
