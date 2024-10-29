import { data } from '../../../data';
import styles from './index.module.scss';
import postStore from '../../../stores/postStore';
import { useNavigate } from 'react-router-dom';
import { formatString } from '../../../utils';

export const Gallery = () => {
  const navigate = useNavigate();
  const { setPost } = postStore();
  const handleSetPost = (item) => {
    setPost(item);
    navigate(`/details/${formatString(item.title)}`);
  };

  return (
    <footer className={styles.galleryFooter}>
      <div className={styles.galleryHeader}>
        <h1>Tổng hợp hoạt động đầy ý nghĩa</h1>
      </div>
      <div className={styles.galleryContainer}>
        {data.map((item, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => handleSetPost(item)}
          >
            <img
              src={item.cover[0]}
              alt={`Gallery image ${index + 1}`}
              className={styles.galleryImage}
            />
            <div className={styles.galleryCaption}>{item.title}</div>
          </div>
        ))}
      </div>
    </footer>
  );
};
