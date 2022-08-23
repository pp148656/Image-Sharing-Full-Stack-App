import React from 'react';
import GoogleLogin from 'react-google-login';
// import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../img_vid/backgrnd_video.mp4';
import logo from '../img_vid/Share_It.png';
import { client } from '../client';
import { useNavigate } from 'react-router-dom';
import { gapi } from "gapi-script";


const Login = () => {
  const navigate = useNavigate();


  const responseGoogle =(response) => {
  //  console.log(response);
    localStorage.setItem('user', JSON.stringify(response.profileObj));
    const{ name, googleId, imageUrl} = response.profileObj;
    const doc = {
      //well _id and _type properties are helping sanity to know which doc are we creating
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    }
    client.createIfNotExists(doc).then(() => {
      navigate('/',{replace: true})
    })
  }
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative h-full w-full">
        <video
          src={shareVideo}
          type="video/mp4"
          
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0  bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="140px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
            
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              // google login has property onclick coming from render props
              render={(renderProps) => (
                <button type="button" className='bg-mainColor flex justify-center cursor-pointer items-center p-2.5 rounded-lg outline-none' 
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                >
                  
                  <FcGoogle className="mr-4" />Sign in with Google
                </button>

              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"

            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login;