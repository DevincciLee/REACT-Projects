import React from 'react'
import mediaImg from '../assets/Media.jpg';


const Hero = () => {
return (
    <div className='bg-[#23272a] flex flex-col justify-around items-center h-175 max-w-[80%] mx-auto text-center rounded-xl mt-10 hover:scale-102 duration-300 ease-in-out p-10'>
            <img 
                src={mediaImg}
                alt="A person sitting at a desk working on a laptop, surrounded by notes and coffee mug. The workspace is modern and organized, with soft natural light creating a calm and focused atmosphere. The image includes the text Simplify your projects in bold letters, conveying a productive and motivational tone." 
                className='w-300 h-50 mb-5 rounded-xl'
            />
            <h1 className='text-4xl font-bold'>Simplify your projects</h1>
            <h1>Try</h1>
            <h1>Try</h1>
            <h1>Try</h1>
    </div>
)
}

export default Hero