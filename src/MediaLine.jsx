function MediaLine(props) {
  const media = props.media;

  return <div className={`colored-line ${media}`} />;
}

export default MediaLine;
