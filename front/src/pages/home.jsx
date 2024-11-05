import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Umidade from "../assets/sensor-umidity.jfif" // Importa a imagem

const Home= () => {
    return (
        <>
            <Header/>
            <div className="w-full flex flex-col">
                <div className="flex w-[100%] bg-[#E4E4E5] justify-center p-4 pt-[80px]">
                    <h2 className="text-2xl mr-6">Smart-city</h2>
                </div>
                <Navbar/>

                <Footer/>
            </div>           
        </>
    )
}

export default Home;