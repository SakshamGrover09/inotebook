import React from 'react'                     //rafce shortcut


const About = () => {      
                                                
  return (
    <div>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button cc " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong> What is iNotebook ?</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body cc">
      <strong>iNotebook</strong> is a <strong> MERN Stack based </strong> user-friendly website designed for storing personal notes. It enables users to perform <strong>CRUD operations —Create, Read, Update, and Delete</strong>  ensuring efficient management of their notes with a secure, personalized experience. Ideal for organizing thoughts and tasks.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed cc" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>What is MERN stack?</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body cc ">
       <strong>MERN stack</strong> is a popular web development framework comprising <strong>MongoDB, Express.js, React.js, and Node.js</strong>. It enables developers to build full-stack applications with a single language, JavaScript. MongoDB serves as the database, Express.js as the backend framework, React.js for the frontend, and Node.js for server-side execution.
      </div>
    </div>
  </div>
  
</div>
       </div>
  )
}

export default About