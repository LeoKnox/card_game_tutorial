export const Card = ({ item, id, handleClick }) => {
  return (
    <div className="card" onClick={() => handleClick(id)}>
      <label className="singleCard">{item.name}</label>
    </div>
  );
};
