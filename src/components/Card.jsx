import React from 'react';
import { Link } from 'react-router-dom';

function Card({img,appName,languages,siteUrl,codeUrl}) {
  const [buttonDisplay, setButtonDisplay] = React.useState(false);

  function display() {
    setButtonDisplay(true);
  }

  function hide() {
    setButtonDisplay(false);
  }

  return (
    <div className='bg-black  mb-10'>
      <div
        className=' w-[345px] flex justify-center h-[253px] md:w-[540px] md:h-[400px] sm:w-[346px] sm:h-[253px]'
        style={{
          backgroundImage: (`url(${img}`),
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          filter: buttonDisplay ? 'brightness(50%)' : 'none',
        }}
        onMouseEnter={display}
        onMouseLeave={hide}
      >
        <div className='flex flex-col justify-center items-center w-[300px] '>
          {buttonDisplay && (
            <>
              <Link to={siteUrl} target='_blank'>
              <button  className='w-[200px] mb-3 hover:text-green-500 font-test border-b border-b-green-500 border-b-4 text-white'>
                VIEW PROJECT
              </button>
              </Link>
              <Link to={codeUrl} target='_blank'>
              <button  className='w-[200px] hover:text-green-500 font-test border-b border-b-green-500 border-b-4 text-white'>
                VIEW CODE
              </button>
              </Link>
            </>
          )}
        </div>
      </div>
      <h1 className='font-test text-white'>{appName}</h1>
      <p className='font-test text-white'>{languages}</p>
    </div>
  );
}

export default Card;
