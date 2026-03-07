import { toast } from 'react-toastify';
const TicketCard = ({ st, setInProgress, inProgress, data, setData }) => {
  const { id, title, description, customer, priority, status, createdAt } = st;

  const handleCard = (clickedId, clickedTitle) => {
    toast(`Adder to in Progress, ${clickedId}`);
    const addedClicked = [
      ...inProgress,
      { id: clickedId, taskTitle: clickedTitle },
    ];

    setInProgress(addedClicked);

    const restData= data.filter(dt=>dt.id!==clickedId);
    // console.log(restData);
    setData(restData)

  };

  return (
    <div
      className="bg-white px-4 py-2 rounded-lg hover:cursor-pointer"
      onClick={() => handleCard(id, title)}
    >
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="bg-emerald-500  px-4 py-1 rounded-lg">{status}</p>
      </div>
      <p>{description} </p>
      <div className="flex justify-between">
        <div className="flex">
          <p className="mr-4">#123</p> <p>{priority} </p>
        </div>
        <div className="flex">
          <p className="mr-4">{customer}</p> <p>🗓 {createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
