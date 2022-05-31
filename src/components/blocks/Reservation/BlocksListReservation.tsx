import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import ReservationService from '../../../domain/reservation/ReservationService';

interface Type {
  id: number;
  fetchUserReservations: any;
  reservation: any;
  notify: any;
}
export default function BlocksListReservation({
  reservation,
  fetchUserReservations,
  id,
  notify,
}: Type) {
  const deleteReservation = () => {
    ReservationService.deleteReservation(id).then((response) => {
      notify();
      fetchUserReservations();
    });
  };
  return (
    <tr>
      <th>{id}</th>
      <td>{reservation.title}</td>
      <td>{reservation.date}</td>
      <td>{reservation.time.slice(0, 5)}</td>
      <th>{reservation.seats}</th>
      <th>{reservation.hall}</th>
      <th>{reservation.total_price} Dinara</th>
      <th>
        <FontAwesomeIcon
          icon={faEdit}
          className="icon-edit"
          onClick={deleteReservation}
        />
      </th>
    </tr>
  );
}
