import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div w-full>
      <Header></Header>
      <div className="border-t border-t-[#D9DBE9]">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
