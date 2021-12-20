const Marker = ({ text, icon, isSelected }) => {
  return (
    <>
      <img
        className={isSelected ? "selected" : null}
        tabIndex={0}
        src={icon}
        alt="marker"
      />
      <div className="wrapper">
        <p className="marker-text">{text}</p>
      </div>
      <style jsx>{`
        img {
          display: inline-block;
          position: absolute;
          top: -40px;
          left: -20px;
          width: 40px;
          height: 40px;
          cursor: pointer;
        }

        .wrapper {
          position: relative;
          width: 150px;
          margin-top: 10px;
          left: -75px;
          display: none;
        }

        .marker-text {
          width: fit-content;
          border-radius: 10px;
          max-width: 150px;
          padding: 10px;
          margin: auto;
          background: linear-gradient(90deg, #3f774b, #2a324e);
          color: white;
        }

        img:hover,
        img:focus,
        .selected {
          filter: drop-shadow(0px 0px 2px #1f0086);
        }

        img:hover ~ .wrapper,
        img:focus ~ .wrapper,
        .selected ~ .wrapper {
          display: block;
        }
      `}</style>
    </>
  );
};

export default Marker;
