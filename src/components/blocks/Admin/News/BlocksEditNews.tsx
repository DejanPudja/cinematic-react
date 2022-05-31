import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newsSchema } from '../../../../hook/FormHook';
import NewsService from '../../../../domain/news/NewsService';
import { useNavigate, useParams } from 'react-router';
import PartsLoadingSpinner from '../../../parts/PartsLoadingSpinner';
import ToastyNotify from '../../../../class/ToastyNotify';

interface TypeInputFields {
  title: string;
  description: string;
  image: string;
}
export default function BlocksEditNews() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TypeInputFields>({ resolver: yupResolver(newsSchema) });
  const navigate = useNavigate();
  const param = useParams();
  const [news, setNews] = useState<any>([]);
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);

  const setStates = (response: any) => {
    setNews(response);
    setId(response.id);
    setTitle(response.title);
    setDescription(response.description);
    setImage(response.image);
    setLoading(false);
  };
  const fetchNews = () => {
    NewsService.getNewsById(param.id)
      .then((response) => {
        if (response.message) {
          navigate('/sve-vesti');
        } else {
          setStates(response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchNews();
  }, []);
  const submitForm = (data: TypeInputFields) => {
    const updatedData = Object.assign({ id: id }, data);
    NewsService.editNews(updatedData)
      .then(() => {
        ToastyNotify.successMessage('Uspešno izmenjena vest');
        setTimeout(() => {
          navigate('/sve-vesti');
        }, 1500);
      })
      .catch(() => {
        ToastyNotify.errorMessage('Došlo je do greške');
      });
  };

  return (
    <div className="container">
      <div className="field-container mt-3">
        <div className="col-lg-12">
          <div className="row justify-content-center">
            {!loading ? (
              <form
                className="col-lg-8 form-add-movies mt-3"
                onSubmit={handleSubmit(submitForm)}
              >
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Naslov vesti</label>
                    <input
                      type="text"
                      value={title || ''}
                      {...register('title')}
                      className={`form-control ${
                        errors.title ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setTitle(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Opis</label>
                    <textarea
                      value={description || ''}
                      {...register('description')}
                      className={`form-control description-field ${
                        errors.description ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLTextAreaElement>
                      ) => {
                        setDescription(event.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className="form-group col-md-8">
                    <label>Fotografija</label>
                    <input
                      type="text"
                      value={image || ''}
                      {...register('image')}
                      className={`form-control ${
                        errors.image ? 'is-invalid' : ''
                      }`}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setImage(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <button type="submit" className="btn col-md-12 mb-5">
                  Izmeni vest
                </button>
              </form>
            ) : (
              <PartsLoadingSpinner />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
