export const Form = ({ title, type, children }) => {
  return (
    <>
      <form className={type}>
        <legend>{title}</legend>
        {children}
      </form>
      <style jsx>{`
        form {
          margin-top: 30px;
        }

        form.login {
          display: flex;
          flex-direction: column;
          max-width: 50%;
          min-width: 280px;
        }

        form.editProfile {
          display: grid;
          grid-template-columns: grid.column;
          grid-template-rows: auto 30vh 1fr;
          grid-template-areas:
            "nav"
            "aside"
            "section";
        }

        form.filters {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin: 0;
        }
      `}</style>
    </>
  );
};
