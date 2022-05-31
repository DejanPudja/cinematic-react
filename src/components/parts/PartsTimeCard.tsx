export default function PartsTimeCard({ projections }: any) {
  return (
    <div className="projections">
      <div>
        <span className="h5 yellow">{projections.time.slice(0, 5)}</span>
        <br />
        <small>{projections.price} Rsd</small>
        <br />
        <small>Sala: {projections.hall}</small>
      </div>
    </div>
  );
}
