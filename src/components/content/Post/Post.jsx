import { data } from '../../../data';
import './index.scss';
import Card from '../Card/Card';
import { useRef } from 'react';

const PostItem = ({ data, index }) => {
  return (
    <div key={index} className='container'>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div>
          <Card cover={data?.cover} />
        </div>

        <div className='line' />
        <div className='content'>
          <div className='header-content'>
            <div>
              <p className='title'>{data?.title}</p>
            </div>
            <div>
              <p className='sub-title'>{data?.content[0]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  data: Object,
  index: Number,
};

const Post = () => {
  const limitPosts = useRef(3);
  return (
    <>
      <header className='title-header'>
        <h1>HOẠT ĐỘNG NỔI BẬT</h1>
      </header>
      <section className='section-1'>
        {data.map((data, index) => {
          if (index >= limitPosts.current) return null;
          return <PostItem data={data} key={index} index={index} />;
        })}
      </section>
      <section className='section-2'>
        <div className='image'></div>
      </section>
    </>
  );
};

export default Post;
