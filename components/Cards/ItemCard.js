export const ItemCard = ({
  item: { item, price, custom_description, custom_image },
}) => {
  return (
    <>
      {item && (
        <div className="card-container">
          <img
            src={custom_image?.url || item?.image?.url}
            alt={custom_image?.name}
          />
          <section>
            <h2>{item?.name}</h2>
            <h3>{custom_description}</h3>
            <h4>Price: {price || item?.price}HK$</h4>
          </section>
        </div>
      )}

      <style jsx>{`
        .card-container {
          position: relative;
          display: flex;
          flex-direction: row;
          background-color: aquamarine;
          padding: 12px;
          margin: 10px 0;
          min-width: 220px;
          border-radius: 20px;
        }

        img {
          width: 100px;
          height: 100px;
          margin-right: 20px;
        }

        section {
          padding: 5px;
        }

        h2 {
          font-weight: 700;
          font-size: 32px;
        }

        h3 {
          font-size: 20px;
          margin: 5px 0;
        }

        h4 {
          position: absolute;
          right: 0;
          top: 0;
          margin: 20px;
        }
      `}</style>
    </>
  );
};
