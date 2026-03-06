


// {
//     "id": 1,
//     "title": "Login Issue",
//     "description": "User cannot login to the dashboard",
//     "customer": "Rahim Ahmed",
//     "priority": "High",
//     "status": "Open",
//     "createdAt": "2026-03-01"
//   }
const TicketCard = () => {
  return (
   <div className="border-2 border-emerald-800 p-2 rounded-lg">
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold">ticket title</h2>
                    <button className="btn">open/in-progress button</button>
                </div>
                <p>Ticket description </p>
                <div className="flex justify-between">
                    <div className="flex">
                        <p className="mr-4">#123</p>
                        <p>priority </p>
                    </div>
                    <div className="flex">
                        <p className="mr-4">name</p>
                        <p>🗓 01/05/2028</p>
                    </div>
                </div>
            </div>
  )
}

export default TicketCard