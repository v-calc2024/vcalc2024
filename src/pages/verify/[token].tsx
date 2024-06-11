import { HeadContent } from "@/components/Particles/HeaderContent";
import { validateOng } from "@/services/ong/validateOng";
import { validateVol } from "@/services/volunteer/validateVol";
import { getObjectHash } from "@/utils/getObjectHash";
import { validateJWTFormat } from "@/utils/validateJWTFormat";
import { setCookie } from "nookies";
import { useEffect } from "react";

export default function Home({ token }: any) {
  useEffect(() => {
    setCookie(null, "token", token, {
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    localStorage.setItem("token", token);
    window.location.href = "/";
  }, [token]);

  return (
    <>
      <HeadContent title="Home" />
      <main></main>
      <style jsx>{`
        main {
          width: 100vw;
          height: max-content;
          display: grid;
          justify-content: center;
          box-sizing: border-box;
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

  const decoded = await getObjectHash({ tokenValue: token });

  const resp: any =
    decoded?.type === "VOLUNTEER"
      ? await validateVol(token).catch((err: any) => {
          return {
            redirect: {
              destination: "/",
              permanent: false,
            },
          };
        })
      : await validateOng(token).catch((err: any) => {
          return {
            redirect: {
              destination: "/",
              permanent: false,
            },
          };
        });

  const isValidToken = resp?.data?.token?.length
    ? validateJWTFormat(token)
    : false;

  if (!isValidToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { token: resp?.data?.token } };
};
