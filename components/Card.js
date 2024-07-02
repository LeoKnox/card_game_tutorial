export const Card = ({ item, id, handleClick }) => {
  const itemClass = item.stat ? " active " + item.stat : "";
  return (
    <div className={"card" + itemClass} onClick={() => handleClick(id)}>
      <label className="singleCard">{item.name}</label>
    </div>
  );
};
