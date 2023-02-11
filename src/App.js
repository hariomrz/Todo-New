import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Component/Add";
import Read from "./Component/Read";
import Update from "./Component/Update";

function App() {
 return (
   <div>
       <BrowserRouter>
         <Routes>
           <Route exact path="/" element={<Read />} />
           <Route path="/add" element={<Add />}/>
           <Route path="/update/:id" element={<Update />} />
         </Routes>
       </BrowserRouter>
   </div>
 );
}

export default App;