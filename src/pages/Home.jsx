import Post from '../components/content/Post/Post';
import { LearnMoreFooter } from '../components/footer/LearnMore/LearnMore';
import HeadingTitle from '../components/header/Title/Title';

const Home = () => {
  return (
    <>
      <HeadingTitle />
      <Post />
      <LearnMoreFooter />
    </>
  );
};

export default Home;
