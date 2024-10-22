import { data } from '../../../data';
import './index.scss';
import Card from '../Card/Card';

const Post = () => {
  return (
    <>
      <header className='title-header'>
        <h1>HOẠT ĐỘNG NỔI BẬT</h1>
      </header>
      <div>
        {data.map((data, index) => (
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
        ))}
      </div>
    </>
  );
};

export default Post;
