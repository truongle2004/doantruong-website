import React from "react";
import styles from "./index.module.scss";
import SimpleImageSlider from "react-simple-image-slider";
import postStore from "./../../../stores/postStore";

const Article = () => {
  const post = postStore((state) => state.post);

  console.log(post.title)
  console.log(post.content[0])
  console.log('post', post)

  if(!post) {
    return (
      <div>
        <p>Không tìm thấy bài viết</p>
      </div>
    )
  }

  return (
    <>
      <article className={styles.articleContainer}>
        <h1>{post?.title}</h1>

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
