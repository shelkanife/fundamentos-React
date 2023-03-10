const ButtonWithSound = ({ id, track }) => {
  const handleClick = () => {
    track.play();
  };
  return <button type="button" onClick={handleClick} id={id}></button>;
};
export default ButtonWithSound;
