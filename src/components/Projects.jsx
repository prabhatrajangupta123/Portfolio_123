import React from 'react'
import projectImage from "../assets/projectImage.png";

const Projects = () => {

    const Projects = [
        {
            id: 1,
            image: projectImage,
            title: 'StudyNotion',
            projectdescription: "Developed a full-stack fully functional website STUDYNOTION where users can deploy a study course and alsopurchase a course. Created an intuitive user interface with also secured payment systems. It is a platform which brings in a collaboration between a learner and a professional",
            link:"https://github.com/prabhatrajangupta123/Study-Notion",
        }
    ]
  return (
    <div name="Projects" className='bg-gradient-to-b from-black to-gray-800 w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Projects</p>
            <p className='py-5'></p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-1 gap-8 text-center py-8 px-12 sm:px-0'>
            {Projects.map(({id, image, title, projectdescription, link}) => (
                <div key={id} className='flex flex-row bg-gray-800 shadow-md py-2 hover:scale-105 duration-500 rounded-lg'>
                    <img src={image} alt="" className='hidden lg:flex w-1/3'/>
                    <div className='flex flex-col'>
                        <p className='text-3xl font-semibold py-2 mb-2'> {title} </p>
                        <p className=' px-5 py-2 '> {projectdescription} </p>
                        <a href={link} target='_blank' className='py-2 inline hover:underline underline-offset-2'> View Project </a>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  )
}

export default Projects
