const Screen = ({ src }) => {
  return (
    <div className="screen">
      <div style={{ padding: ".2rem 0" }}>
        <div className="circle indicator"></div>
        <div className="circle indicator"></div>
      </div>
      <img src={src} />
      <div className="sub-container">
        <span className="circle indicator" style={{ marginRight: "auto" }} />
        <span className="line" />
      </div>
    </div>
  );
};
export default Screen;
