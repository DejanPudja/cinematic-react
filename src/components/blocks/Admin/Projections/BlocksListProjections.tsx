import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import ToastyNotify from '../../../../class/ToastyNotify';
import RepertoireService from '../../../../domain/repertoire/RepertoireService';
import RepertoireViewMapper from '../../../../domain/repertoire/RepertoireViewMapper';
import PartsLoadingSpinner from '../../../parts/PartsLoadingSpinner';
import BlockListProjection from './BlockListProjection';

export default function BlocksListProjections() {
  const [projections, setProjections] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjections = async () => {
    let projections = await RepertoireService.getAllProjections();
    setProjections(projections);
    setLoading(false);
  };
  const notify = () => {
    ToastyNotify.successMessage('Uspešno obrisana projekcija');
  };
  useEffect(() => {
    fetchProjections();
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
                    <th>Sala</th>
                    <th>Cena</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {projections.map((projection: any, index: number) => {
                    return (
                      <BlockListProjection
                        projection={projection}
                        key={index}
                        fetchProjections={fetchProjections}
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
