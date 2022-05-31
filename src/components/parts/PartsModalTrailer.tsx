import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PartsModalTrailer({ trailer }: any) {
  return (
    <div className="trailer">
      <button
        type="button"
        className="btn play-btn "
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        <span className="play-btn ">
          <FontAwesomeIcon icon={faPlay} />
        </span>
      </button>
      <div
        className="modal fade"
        id="exampleModalCenter"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <iframe
              width="100%"
              height="315"
              src={trailer}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
