import React, { Suspense } from 'react';

const HeadingTitle = React.lazy(() => import('../components/header/Title/Title'));
const Post = React.lazy(() => import('../components/content/Post/Post'));
const Gallery = React.lazy(() => import('../components/footer/Gallery/Gallery'));

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading title...</div>}>
        <HeadingTitle />
      </Suspense>

      <Suspense fallback={<div>Loading post...</div>}>
        <Post />
      </Suspense>

      <Suspense fallback={<div>Loading gallery...</div>}>
        <Gallery />
      </Suspense>
    </>
  );
};

export default Home;
