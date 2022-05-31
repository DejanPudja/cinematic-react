import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newsSchema } from '../../../../hook/FormHook';
import NewsService from '../../../../domain/news/NewsService';
import ToastyNotify from '../../../../class/ToastyNotify';
import { ToastContainer } from 'react-toastify';

interface TypeInputFields {
  title: string;
  description: string;
  image: string;
}
export default function BlocksAddNews() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TypeInputFields>({ resolver: yupResolver(newsSchema) });

  const submitForm = (data: TypeInputFields) => {
    NewsService.addNews(data)
      .then(() => {
        ToastyNotify.successMessage('Uspešno dodata vest');
        reset();
      })
      .catch(() => {
        ToastyNotify.errorMessage('Došlo je do greške');
      });
  };
  return (
    <div className="container">
      <ToastContainer />
      <div className="field-container mt-3">
        <div className="col-lg-12">
          <div className="row justify-content-center">
            <form
              className="col-lg-8 form-add-movies mt-3"
              onSubmit={handleSubmit(submitForm)}
            >
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label>Naslov vesti</label>
                  <input
                    type="text"
                    {...register('title')}
                    className={`form-control ${
                      errors.title ? 'is-invalid' : ''
                    }`}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label>Opis</label>
                  <textarea
                    {...register('description')}
                    className={`form-control description-field ${
                      errors.description ? 'is-invalid' : ''
                    }`}
                  ></textarea>
                </div>
                <div className="form-group col-md-3">
                  <label>Fotografija</label>
                  <input
                    type="text"
                    {...register('image')}
                    className={`form-control ${
                      errors.image ? 'is-invalid' : ''
                    }`}
                  />
                </div>
              </div>
              <button type="submit" className="btn col-md-12 mb-5">
                Dodaj vest
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
