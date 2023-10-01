function Title({ text }) {
  return (
    <div className="title">
      <h2>{text || "default value"}</h2>
      <div className="title-underline"></div>
    </div>
  );
}

export default Title;
