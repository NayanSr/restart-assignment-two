// {
//     "id": 1,
//     "title": "Login Issue",
//     "description": "User cannot login to the dashboard",
//     "customer": "Rahim Ahmed",
//     "priority": "High",
//     "status": "Open",
//     "createdAt": "2026-03-01"
//   }
const TicketCard = ({ st, setResolved, setInProgress, resolved, inProgress }) => {
  const { id, title, description, customer, priority, status, createdAt } = st;

  const handleCard = (clickedId, clickedTitle) => {
    alert(`card clicked, ${clickedId}`);
    console.log("clicked on", clickedId);
    const addedClicked= [...inProgress,{id:clickedId, taskTitle: clickedTitle}];
   
    console.log("addedClicked", addedClicked);
    setInProgress(addedClicked);
    setResolved(3)
  };

  return (
    
      <div className="border-2 border-emerald-800 p-2 rounded-lg hover:cursor-pointer" onClick={()=>handleCard(id,title)}>
     
        <div className="flex justify-between">
        
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="bg-orange-500 px-2 rounded-lg">open/in-progress button</p>
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
