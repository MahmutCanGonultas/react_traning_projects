function Person({ name, age, image }) {
  return (
    <article className="person">
      <img src={image} className="img" alt="" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
}

export default Person;
