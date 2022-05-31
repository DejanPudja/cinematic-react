import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-solid-svg-icons';

export default function BlocksHomeNews({ news }: any) {
  return (
    <div className="col-lg-4 col-md-5 col-sm-6 news-card">
      <img src={news.image} alt="movie" className="news-img mt-2" />
      <div className="news-title mt-3">
        <a href="">{news.title}</a>
      </div>
      <div className="date mt-3">
        <FontAwesomeIcon icon={faClock} />
        <span className="ml-2">{news.date}</span>
      </div>
      <hr />
      <div className="news-description">
        <p>{news.description}</p>
      </div>
      <button className="card-btn btn-detail">Procitaj celu vest</button>
    </div>
  );
}
