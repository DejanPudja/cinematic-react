import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import RepertoireService from '../../../../domain/repertoire/RepertoireService';
import { useNavigate } from 'react-router';

export default function BlockListProjection({
  projection,
  fetchProjections,
  notify,
}: any) {
  const navigate = useNavigate();
  const deleteProjection = () => {
    RepertoireService.deleteProjection(projection.id).then(() => {
      fetchProjections();
      notify();
    });
  };
  return (
    <tr>
      <th>{projection.id}</th>
      <td>{projection.title}</td>
      <td>{projection.date}</td>
      <td>{projection.time.slice(0, 5)}</td>
      <th>{projection.hall}</th>
      <th>{projection.price} dinara</th>
      <th>
        <FontAwesomeIcon
          icon={faTrash}
          className="icon-delete"
          onClick={deleteProjection}
        />
        <FontAwesomeIcon
          icon={faEdit}
          className="icon-edit"
          onClick={() => {
            navigate(`/izmeni-projekciju/${projection.id}`);
          }}
        />
      </th>
    </tr>
  );
}
