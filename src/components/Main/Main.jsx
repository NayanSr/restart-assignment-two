import { use } from "react"
import TicketCard from "../TicketCard/TicketCard"

const Main = ({tickets,setResolved,setInProgress, inProgress, resolved, handleCompleted }) => {
const allTickets= use(tickets);

// console.log(allTickets)

const clickedButton=(item)=>{
    handleCompleted(item)
}


  return (
    <div className="grid grid-cols-4 mb-8 ">
        <section className="col-span-3  mr-4 px-2 py-4">
            <h2 className="text-3xl font-semibold mb-4">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {
                allTickets.map(st=><TicketCard key={st.id} st={st} setInProgress={setInProgress} setResolved={setResolved} inProgress={inProgress} resolved={resolved}/>)
            }
            </div>
        </section>



        <section className="col-span-1  p-2 ">
            <div>
                <h3 className="text-2xl font-semibold">Task Status</h3>
                {inProgress.map(item=><div key={item.id} className="bg-white  px-4 rounded-md mb-4]">
                    <h4 className="text-[16px] font-semibold my-2">{item.taskTitle}</h4>
                    <button className="btn bg-[#02A53B] w-full mb-4 rounded-md " onClick={()=>clickedButton(item)}>Completed</button>
                </div>)}
            </div>
            <div className="mt-4">
                <h3 className="text-2xl font-semibold mb-2">Resolved Task</h3>
                {resolved.map((rs,index)=><p key={index} className="text-lg font-semibold bg-[#E0E7FF] mb-4 px-2 py-4 rounded-lg">{rs.taskTitle
}</p>)}
            </div>
        </section>
    </div>
  )
}

export default Main