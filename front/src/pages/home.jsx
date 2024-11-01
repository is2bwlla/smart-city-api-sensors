import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";

const Home= () => {
    return (
        <>
            <Header/>
            <div className="bg-slate-300 w-[100%] flex flex-col">
                <div className="flex w-[100%] justify-center p-4">
                    <h2 className="text-xl mr-6">Sensores</h2>
                </div>
                <Navbar/>
            </div>
        </>
    )
}

export default Home;