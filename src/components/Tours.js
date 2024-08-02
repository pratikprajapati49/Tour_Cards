import Card from "./Card";

function Tours({ tours, remove }) {
  return (
    <div className="container">
      <div className="title">
        <h2>Plan With Pratik</h2>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} remove={remove} />;
        })}
      </div>
    </div>
  );
}

export default Tours;
