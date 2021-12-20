import { wrapper } from "store/rootStore";
import { useSelector } from "react-redux";
import useReroute from "hooks/useReroute";

import { Login, Register } from "components/Forms";
import { TabbedContainer } from "components/Containers/TabbedContainer";

const LoginPage = () => {
  useReroute("auth", "isLoggedIn", "/profile");
  const { initialRegister, isLoading, hasError, error } = useSelector(
    (state) => state.auth
  );

  // useEffect(() => {
  //   if (!hasError && !initialRegister) {
  //     router.replace("/profile");
  //   }
  // }, [hasError]);

  return (
    <>
      <section className="form-container">
        <TabbedContainer
          labels={["Login", "Register"]}
          items={[<Login />, <Register />]}
        />
      </section>
      <style jsx>{`
        .form-container {
          width: fit-content;
          height: auto;
          display: flex;
          flex-flow: row;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          padding-top: 40px;

          border: 1px solid #737373;
          margin-top: 20vh;
          box-shadow: 0px 0px 5px black;
        }
      `}</style>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const {
      auth: { isLoggedIn },
    } = store.getState();

    if (isLoggedIn) {
      return {
        redirect: {
          permanent: false,
          destination: "/profile",
        },
      };
    }

    return {};
  }
);

export default LoginPage;
