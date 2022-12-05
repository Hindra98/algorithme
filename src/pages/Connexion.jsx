import { useState } from 'react';
import kaneki from '../icons/kaneki.jpeg';

export default function Connexion() {

  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;

  function onchangeEmail(e) {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    
  }

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Connexion à IFPIA</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src={kaneki} alt="GaucheImage" className='w-full rounded-2xl' />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form action="">
            <input type="email" name="" id="email" value={email} className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' placeholder='Adresse email' onChange={onchangeEmail} />
            <div className='relative mb-6'><input type={showPassword? "text" : "password"} name="" id="password" value={password} className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' placeholder='Mot de passe' onChange={onchangeEmail} />
          </div></form>
        </div>
      </div>
    </section>
  )
}
