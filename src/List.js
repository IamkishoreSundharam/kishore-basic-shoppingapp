const Listdata = ({ list }) => {
  return (
    <>
      <main className="box">
        <div className="card-holder">
          {list.map((item, index) => {
            if (item.price >= 100) {
              const { title, description, price, thumbnail } = item;
              return (
                <article key={index} className="cards">
                  <p id="title">{title}</p>
                  <div className="desc-img">
                    <p>{description}</p>
                  </div>
                  <div className="img-div">
                    <img className="img" src={thumbnail} alt={title} />
                  </div>
                  <p>{`$ ${price}`}</p>
                </article>
              );
            }
          })}
        </div>
      </main>
    </>
  );
};

export default Listdata;
