import './index.scss';
import { data } from '../../../data';
import SimpleImageSlider from 'react-simple-image-slider';

const Article = () => {
  const images = data[1].cover;
  return (
    <>
      {/* <Navbar /> */}

      <article className='article-container'>
        <h1>{data[1].title}</h1>

        <div className='article-content'>
          {data[1].content.map((text, index) => (
            <div className='content' key={index}>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className='article-images'>
          <SimpleImageSlider
            width={800}
            height={600}
            images={images}
            showBullets={true}
            autoPlay={true}
            showNavs={true}
          />
        </div>
        {/*
        <div className="article-images">
          {data[1].cover.map((image, index) => (
            <img src={image} key={index} />
          ))}
        </div>
*/}
      </article>
    </>
  );
};

export default Article;
