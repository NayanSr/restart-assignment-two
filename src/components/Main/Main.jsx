import { use } from "react"
import TicketCard from "../TicketCard/TicketCard"

const Main = ({tickets}) => {
const allTickets= use(tickets)

console.log(allTickets)


  return (
    <div className="grid grid-cols-4">
        <section className="col-span-3 bg-emerald-400 mr-4 px-2 py-1">
            <h2 className="text-3xl font-semibold">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {
                allTickets.map(st=><TicketCard key={st.id} st={st}/>)
            }
            </div>









        </section>
        <section className="col-span-1 bg-emerald-400  p-2 ">
            <div>
                <h3 className="text-2xl font-semibold">Task Status</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="mt-4">
                <h3 className="text-2xl font-semibold">Resolved Task</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </section>
    </div>
  )
}

export default Main