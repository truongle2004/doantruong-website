import { data } from '../../../data';
import styles from './index.module.scss';
import Card from '../Card/Card';
import postStore from '../../../stores/postStore';
import { useNavigate } from 'react-router-dom';
import Prototypes from 'prop-types';
import { formatString } from '../../../utils';
import { motion } from 'framer-motion';

const PostItem = ({ cover, title, content }) => {
  const { setPost } = postStore();
  const navigate = useNavigate();

  const handleSetPost = (cover, title, content) => {
    setPost({ cover, title, content });
    navigate(`/details/${formatString(title)}`);
  };

  return (
    <div
      className={styles.postItem}
      onClick={() => handleSetPost(cover, title, content)}
    >
      <div className={styles.postItemContent}>
        <div>
          <Card cover={cover} />
        </div>

        <div className={styles.postItemDivider} />
        <div className={styles.postItemDetails}>
          <div className={styles.postItemHeader}>
            <div>
              <p className={styles.postItemTitle}>{title}</p>
            </div>
            <div>
              <p className={styles.postItemSubtitle}>{content[0]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  cover: Prototypes.arrayOf(Prototypes.string).isRequired,
  title: Prototypes.string.isRequired,
  content: Prototypes.arrayOf(Prototypes.string).isRequired,
};

const Post = () => {
  const handleRouteUrl = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <header className={styles.titleHeader}>
        <h1>HOẠT ĐỘNG NỔI BẬT</h1>
      </header>
      <div>
        {data.map((data, index) => (
          <div key={index}>
            <PostItem
              cover={data?.cover}
              title={data?.title}
              content={data?.content}
              index={index}
            />
          </div>
        ))}
      </div>
      <div className={styles.imageSection}>
        <motion.div
          className={styles.imageTitle}
          initial={{ opacity: 0, y: -20 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animate to this state
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          <h1>Tuổi Trẻ Tỏa Sáng</h1>
          <h2>Hành Trình Gia Nhập Đoàn của Các Đoàn Viên Mới</h2>
        </motion.div>
        <div className={styles.imageContainer}>
          <img
            src='https://giadinh.edu.vn/e-img/images/IMG_0382-2-2(1).jpg'
            alt='Image 1'
            className={styles.image}
            onClick={() =>
              handleRouteUrl(
                'https://giadinh.edu.vn/doan-truong-dai-hoc-gia-dinh-to-chuc-le-ket-nap-doan-vien-moi-ky-niem-90-nam-ngay-thanh-lap-doan-tncs-ho-chi-minh'
              )
            }
          />
          <img
            src='https://giadinh.edu.vn/upload/elfinder/Sinh%20vi%C3%AAn%20%C4%91i%20B%E1%BA%BFn%20Nh%C3%A0%20R%E1%BB%93ng/2e21383f48b287ecdea3.jpg'
            alt='Image 2'
            className={styles.image}
            onClick={() => {
              handleRouteUrl(
                'https://giadinh.edu.vn/doan-truong-dai-hoc-gia-dinh-to-chuc-le-ket-nap-doan-tai-khu-di-tich-lich-su-ben-nha-rong'
              );
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Post;
