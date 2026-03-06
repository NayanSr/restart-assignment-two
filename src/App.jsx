import "./App.css";
import Navigation from "../src/components/Navigation/Navigation";
import Footer from "./components/Navigation/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import { Suspense } from "react";
import { useState } from "react";

function App() {
  const tickets = fetch("tickets.json").then((res) => res.json());
  const[inProgress, setInProgress]= useState([]);
  const[resolved, setResolved]= useState([]);

  const handleCompleted=(item)=>{
    console.log(item)
  const newResolved= [...resolved, item];
   setResolved(newResolved);
   const restInProgress= inProgress.filter(i=>i.id!==item.id);
  setInProgress(restInProgress)
  }

  return (
    <div className="max-w-7xl mx-auto border-2 border-green-800 p-1 flex flex-col min-h-screen bg-gray-100">
      <Navigation />
      <div className="flex-1">
        <Banner inProgress={inProgress} resolved={resolved} />
        <Suspense
          fallback={
            <div className="flex items-center justify-center mt-16">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          }
        >
          <Main tickets={tickets} setInProgress={setInProgress} setResolved={setResolved} resolved={resolved} inProgress={inProgress} handleCompleted={handleCompleted} />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
