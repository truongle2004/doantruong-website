import SimpleImageSlider from 'react-simple-image-slider';
import postStore from './../../../stores/postStore';
import styles from './index.module.scss';

const Article = () => {
  const post = postStore((state) => state.post);

  if (!post) {
    return (
      <div>
        <h1>Không tìm thấy bài viết</h1>
      </div>
    );
  }

  return (
    <>
      <article className={styles.articleContainer}>
        <h1 className={styles.articleTitle}>{post?.title}</h1>

        <div className={styles.articleContent}>
          {post?.content.map((text, index) => (
            <div className={styles.content} key={index}>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className={styles.articleImages}>
          <SimpleImageSlider
            width={800}
            height={600}
            images={post?.cover}
            showBullets={true}
            autoPlay={true}
            showNavs={true}
          />
        </div>
      </article>
    </>
  );
};

export default Article;
