const Cell = ({ num, cells, handleClick }) => {
  return (
    <div
      className="cell w-1/3 h-36 text-center border text-3xl flex justify-center items-center cursor-pointer"
      onClick={() => handleClick(num)}
    >
      {cells[num]}
    </div>
  );
};

export default Cell;
