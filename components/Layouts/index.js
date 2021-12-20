import { Fragment } from "react";
import Nav from "components/Nav";

const Layout = ({ pathname, children }) => {
  const pathArray = pathname.split("/");

  return (
    <Fragment>
      <Nav />
      <main className={`layout-${pathArray[1]}`}>{children}</main>
      <style jsx global>{`
        main {
          margin-top: 56px;
          height: 93vh;
        }

        .layout-profile,
        .layout-locations {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 3fr 7fr;
          grid-template-areas:
            "aside"
            "section";
        }

        @media screen and (min-width: 1023px) {
          main {
            margin-top: 7vh;
          }

          .layout-profile,
          .layout-locations {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: "section aside";
          }
        }

        main > section {
          height: 95%;
          grid-area: section;
        }

        main > aside {
          grid-area: aside;
        }
      `}</style>
    </Fragment>
  );
};

export default Layout;
