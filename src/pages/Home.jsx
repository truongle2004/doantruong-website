import Post from '../components/content/Post/Post';
import { Gallery } from '../components/footer/Gallery/Gallery';
import HeadingTitle from '../components/header/Title/Title';

const Home = () => {
  return (
    <>
      <HeadingTitle />
      <Post />
      <Gallery />
    </>
  );
};

export default Home;
