import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

const Videobanner = () => {
  const video = "https://www.youtube.com/watch?v=Mndlkecqubo";
  return (
    <div id="services" style={{ backgroundColor: "black", padding: 20 }} >
      <Container>
        <ReactPlayer url={video} playing width={"100%"} height={400} />
      </Container>
    </div>
  );
};

export default Videobanner;
