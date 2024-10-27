import { data } from "../../../data";
import styles from "./index.module.scss";
import Card from "../Card/Card";

// eslint-disable-next-line react/prop-types
const PostItem = ({ cover, title, content }) => {
  return (
    <div className={styles["post-item"]}>
      <div className={styles["post-item__content"]}>
        <div>
          <Card cover={cover} />
        </div>

        <div className={styles["post-item__divider"]} />
        <div className={styles["post-item__details"]}>
          <div className={styles["post-item__header"]}>
            <div>
              <p className={styles["post-item__title"]}>{title}</p>
            </div>
            <div>
              <p className={styles["post-item__subtitle"]}>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Post = () => {
  return (
    <>
      <header className={styles["title-header"]}>
        <h1>HOẠT ĐỘNG NỔI BẬT</h1>
      </header>
      <div>
        {data.map((data, index) => (
          <div key={index}>
            <PostItem
              cover={data?.cover}
              title={data?.title}
              content={data?.content[0]}
              index={index}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          margin: "100px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/652/confectionary.png)",
          padding: "20px",
        }}
      >
        <div>
          <img
            src="https://giadinh.edu.vn/e-img/images/IMG_0382-2-2(1).jpg"
            width={500}
            height={500}
            style={{
              objectFit: "cover",
              marginRight: "20px",
            }}
          />

          <img
            src="https://giadinh.edu.vn/upload/elfinder/Sinh%20vi%C3%AAn%20%C4%91i%20B%E1%BA%BFn%20Nh%C3%A0%20R%E1%BB%93ng/2e21383f48b287ecdea3.jpg"
            width={600}
            height={500}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Post;
