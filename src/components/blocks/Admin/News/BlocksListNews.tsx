import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import ToastyNotify from '../../../../class/ToastyNotify';
import NewsService from '../../../../domain/news/NewsService';
import NewsViewMapper from '../../../../domain/news/NewsViewMapped';
import PartsLoadingSpinner from '../../../parts/PartsLoadingSpinner';
import BlocksOneNews from './BlocksOneNews';

export default function BlocksListNews() {
  const [news, setNews] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    let news = await NewsService.getAllNews(100);
    let mappedNews = NewsViewMapper.map(news?.allNews);
    setNews(mappedNews);
    setLoading(false);
  };
  const notify = () => {
    ToastyNotify.successMessage('Uspesno obrisana vest');
  };

  useEffect(() => {
    fetchNews();
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
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {news.map((news: any, index: number) => {
                    return (
                      <BlocksOneNews
                        news={news}
                        key={index}
                        fetchNews={fetchNews}
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
