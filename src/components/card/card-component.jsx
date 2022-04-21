import "./../../card.styles.css";

const Card = ({ monster }) => {
  {/**If you try to deconstruct the three objects below within the function parameter
  it does not function correctly... All the images are the sam and there is no information */}
  const { name, email, id } = monster
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
