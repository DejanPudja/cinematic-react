import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

interface ButtonType {
  filterMovie: any;
  filterParam: string;
  date: string;
}
export default function PartsButton({
  filterMovie,
  filterParam,
  date,
}: ButtonType) {
  return (
    <>
      <button
        className="link"
        onClick={() => {
          filterMovie(filterParam);
        }}
      >
        <FontAwesomeIcon icon={faCalendarAlt} />
        <span className="ml-2">{date}</span>
      </button>
    </>
  );
}
