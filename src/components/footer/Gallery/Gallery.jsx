import { data } from "../../../data";
import "./index.scss";

export const Gallery = () => {
  return (
    <footer className='gallery-footer'>
      <div className='gallery-header'>
        <h1>Các hoạt động đầy ý nghĩa khác</h1>
      </div>
      <div className='gallery-container'>
        {data.map((item, index) => (
          <div key={index} className='gallery-item'>
            <img
              src={item.cover[0]}
              alt={`Gallery image ${index + 1}`}
              className='gallery-image'
            />
            <div className='gallery-caption'>truong dep trai</div>
          </div>
        ))}
      </div>
    </footer>
  );
};
