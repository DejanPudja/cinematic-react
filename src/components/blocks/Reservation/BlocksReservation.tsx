import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ReservationGateway from '../../../domain/reservation/ReservationService';
import { addReservation } from '../../../store/reservationSlice';
import { removeReservation } from '../../../store/reservationSlice';
import { RootState } from '../../../store/store';
import PartsLoadingSpinner from '../../parts/PartsLoadingSpinner';
import ToastyNotify from '../../../class/ToastyNotify';
import { ToastContainer } from 'react-toastify';

export default function BlocksReservation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [reservation, setReservation] = useState<any>([]);
  const [projection_id, setProjectionId] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  let seats = ['A', 'B', 'C', 'D', 'E', 'F'];
  let content: any = [];

  const { register, handleSubmit } = useForm();
  const reservationsPrice = useSelector(
    (state: RootState) => state.reservations.value
  );

  let totalPrice = reservationsPrice.reduce(
    (partialSum, a) => partialSum + a,
    0
  );

  const fetchReservation = () => {
    let id: any = Number(localStorage.getItem('projection_id'));
    setProjectionId(id);
    ReservationGateway.getReservationById(id).then((response) => {
      setReservation(response);
      setLoading(false);
    });
  };

  let splitSeats = reservation.map((obj: any, index: number) => {
    return obj.seats.split(',');
  });
  let newArrayOfSeats: any = [].concat.apply([], splitSeats);

  const click = (event: any) => {
    if (event.target.checked) {
      dispatch(addReservation(370));
    } else {
      dispatch(removeReservation());
    }
  };

  for (let i = 0; i < seats.length; i++) {
    for (let j = 1; j < 9; j++) {
      if (!newArrayOfSeats.includes(seats[i] + j)) {
        content.push(
          <input
            type="checkbox"
            className={'check'}
            id={seats[i] + j}
            value={seats[i] + j || ''}
            hidden
            {...register('check')}
            onClick={click}
          />
        );
        content.push(<label className="seat" htmlFor={seats[i] + j}></label>);
      } else {
        content.push(
          <input type="checkbox" className={'check'} hidden disabled />
        );
        content.push(<label className="seat " id="occupied"></label>);
      }
    }
    content.push(<br />);
  }
  const onSubmit = (data: any) => {
    if (data.check.length > 6) {
      alert('Nije moguce rezervisati vise od 6 mesta');
    } else if (data.check !== false) {
      let reservationSeats = data.check.toString();
      const reservationData = {
        user_id: localStorage.getItem('user_id'),
        projection_id: projection_id,
        seats: reservationSeats,
        total_price: totalPrice,
      };
      ReservationGateway.addReservation(reservationData)
        .then(() => {
          ToastyNotify.successMessage('Uspešno izvršena rezervacija');
          setTimeout(() => {
            localStorage.removeItem('projection_id');

            navigate('/moje-rezervacije');
          }, 1500);
        })
        .catch(() => {
          ToastyNotify.errorMessage('Došlo je do greške!');
        });
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('projection_id')) {
      alert('Niste odabrali film!');
      navigate('/moje-rezervacije');
    } else {
      fetchReservation();
    }
  }, []);

  return (
    <div className="container ">
      <ToastContainer />
      <div className="field-container mt-3 ">
        {!loading ? (
          <div className="col-lg-12">
            <h5 className="">
              Ukupno za placanje:
              {totalPrice} RSD
            </h5>
            <div className="row justify-content-center ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-5 wrapper">
                  <div className="screen"></div>
                  <div className="">{content}</div>
                </div>
                <button className="btn btn-block mb-4">Rezervisi</button>
              </form>
            </div>
            <div className="checkbox mb-3">
              <label className="seat"></label>
              <span className="m-1" style={{ color: '#fff' }}>
                Slobodno
              </span>
              <label className="seat" id="occupied"></label>
              <span className="m-1" style={{ color: '#fff' }}>
                Zauzeto
              </span>
              <label className="seat" style={{ background: '#ffff' }}></label>
              <span className="m-1" style={{ color: '#fff' }}>
                Odabrano
              </span>
            </div>
          </div>
        ) : (
          <PartsLoadingSpinner />
        )}
      </div>
    </div>
  );
}
