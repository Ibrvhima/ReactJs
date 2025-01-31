import Skills from './skills';

 export default function Profile() {
  return (
    <div className="container">
      <img src='me.jpg' alt='profil'  className='img'/>
      <h1 className='name'>Ibrahima Diallo</h1>
      <p className='description'>Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.</p>
          <Skills />
      
    </div>
  );
}


