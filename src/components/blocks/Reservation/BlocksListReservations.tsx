import React, { useEffect, useState } from 'react';
import ReservationService from '../../../domain/reservation/ReservationService';
import PartsLoadingSpinner from '../../parts/PartsLoadingSpinner';
import BlocksListReservation from './BlocksListReservation';
import ToastyNotify from '../../../class/ToastyNotify';
import { ToastContainer } from 'react-toastify';

export default function BlocksListReservations() {
  const [userReservations, setUserReservation] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const id: number = Number(localStorage.getItem('user_id'));

  const fetchUserReservations = () => {
    ReservationService.getUserReservation(id).then((response) => {
      setUserReservation(response);
      setLoading(false);
    });
  };
  const notify = () => {
    ToastyNotify.successMessage('Uspesno ste otkazali rezervaciju!');
  };
  useEffect(() => {
    fetchUserReservations();
  }, []);

  return (
    <div className="container">
      <ToastContainer />
      <div className="field-container mt-3">
        <div className="col-lg-12">
          <div className="row justify-content-center table-responsive">
            {!loading ? (
              <table className="table table-sm table-dark table-list">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Naziv</th>
                    <th>Datum</th>
                    <th>Vreme</th>
                    <th>Sedista</th>
                    <th>Sala</th>
                    <th>Ukupna cena</th>
                    <th>Otkazi</th>
                  </tr>
                </thead>
                <tbody>
                  {userReservations.map((reservation: any, index: number) => {
                    return (
                      <BlocksListReservation
                        id={reservation.id}
                        reservation={reservation}
                        key={index}
                        fetchUserReservations={fetchUserReservations}
                        notify={notify}
                      />
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <PartsLoadingSpinner />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
