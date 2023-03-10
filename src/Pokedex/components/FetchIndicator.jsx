const FetchIndicator = ({ fetching }) => {
  return (
    <>
      <span className="circle" id="blue">
        <span className={`${fetching ? "fetching" : null}`} />
      </span>
      <span className="circle red"></span>
      <span className="circle yellow"></span>
      <span className="circle green"></span>
    </>
  );
};

export default FetchIndicator;
