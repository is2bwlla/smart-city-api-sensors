import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg'

const Footer = () => {
    const toggleAbout = () => {
        
    }


    return (
        <footer className='flex flex-col mt-8 p-5'>
            <div className='self-center'>
                <hr className="border-t border-black mt-1 mb-6 w-[1800px]" /> 
            </div>

            <div className='flex flex-start ml-8 flex-row'>
                <img src={Logo}/>
                <div className='flex items-center'>
                    <h2 className='ml-10 cursor-pointer'>About</h2>
                    <h2 className='ml-10 cursor-pointer'>Tools</h2>
                    <h2 className='ml-10 cursor-pointer'>Teacher</h2>
                    <h2 className='ml-10 cursor-pointer'>Senai</h2>
                </div>
                
            </div>
            
        </footer>
    )
}

export default Footer;

// import React, { useState } from 'react';
// import Logo from '../assets/logo.svg';

// const Footer = () => {
//     const [showAbout, setShowAbout] = useState(false); // Estado para controlar a visibilidade do card

//     const toggleAbout = () => {
//         setShowAbout(prev => !prev); // Alterna a visibilidade do card
//     };

//     return (
//         <footer className='flex flex-col mt-8 p-5'>
//             <div className='self-center'>
//                 <hr className="border-t border-black mt-1 mb-6 w-[1800px]" />
//             </div>

//             <div className='flex flex-start ml-8 flex-row'>
//                 <img src={Logo} alt="Logo" />
//                 <div className='flex items-center'>
//                     <h2 className='ml-10 cursor-pointer' onClick={toggleAbout}>About</h2>
//                     <h2 className='ml-10 cursor-pointer'>Tools</h2>
//                     <h2 className='ml-10 cursor-pointer'>Teacher</h2>
//                     <h2 className='ml-10 cursor-pointer'>Senai</h2>
//                 </div>
//             </div>

//             {/* Card de informações sobre você */}
//             {showAbout && (
//                 <div className='mt-4 p-4 border border-gray-300 bg-white shadow-lg rounded'>
//                     <h3 className='text-lg font-bold'>Sobre Mim</h3>
//                     <p>Aqui estão algumas informações sobre mim...</p>
//                     {/* Adicione mais informações ou componentes aqui */}
//                     <button 
//                         className='mt-2 text-blue-500 hover:underline' 
//                         onClick={toggleAbout} // Fecha o card ao clicar no botão
//                     >
//                         Fechar
//                     </button>
//                 </div>
//             )}
//         </footer>
//     );
// };

// export default Footer;
