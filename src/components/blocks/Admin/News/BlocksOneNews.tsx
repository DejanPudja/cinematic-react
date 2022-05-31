import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router';
import NewsService from '../../../../domain/news/NewsService';

export default function BlocksOneNews({ news, fetchNews, notify }: any) {
  const navigate = useNavigate();
  const deleteNews = () => {
    NewsService.deleteNews(news.id).then(() => {
      fetchNews();
      notify();
    });
  };
  return (
    <tr>
      <th>{news.id}</th>
      <td>{news.title}</td>
      <td>{news.date}</td>
      <th>
        <FontAwesomeIcon
          icon={faTrash}
          className="icon-delete"
          onClick={deleteNews}
        />
        <FontAwesomeIcon
          icon={faEdit}
          className="icon-edit"
          onClick={() => {
            navigate(`/izmeni-vest/${news.id}`);
          }}
        />
      </th>
    </tr>
  );
}
