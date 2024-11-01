import Header from "../components/header";
import React, { useEffect, useState } from "react";
import axios from 'axios';

const Luminosity = () => {
    const [luminosityData, setLuminosityData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => () => {
        const fetchLuminosity = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/luminosidade/");
                console.log(response.data);
                setLuminosityData(response.data);
            } catch (error) {
                console.error('Error ao buscar os dados de temperatura: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLuminosity();
        
    }, []);

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <Header/>

            <div className="flex justify-center p-4">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                    <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <tr>
                            <th className="py-3 px-6 text-left">ID</th>
                            <th className="py-3 px-6 text-left">Valor</th>
                            <th className="py-3 px-6 text-left">Sensor ID</th>
                            <th className="py-3 px-6 text-left">Timestamp</th>
                        </tr>
                    </thead>

                    <tbody className="text-gray-600 text-sm font-light">
                        {luminosityData.map(data => (
                            <tr key={data.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">{data.id}</td>
                                <td className="py-3 px-6">{data.valor}</td>
                                <td className="py-3 px-6">{data.sensor_id}</td>
                                <td className="py-3 px-6">{new Date(data.timestamp).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </>
    );
};

export default Luminosity;