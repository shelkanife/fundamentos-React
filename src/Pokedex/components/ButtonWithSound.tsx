const ButtonWithSound: React.FC<{
  // type: string;
  id: string;
  track: HTMLAudioElement;
}> = ({ id, track }) => {
  const handleClick = () => {
    track.play();
  };
  return <button type="button" onClick={handleClick} id={id}></button>;
};
export default ButtonWithSound;
