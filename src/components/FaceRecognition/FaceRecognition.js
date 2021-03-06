import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
return (
    <div className='center ma'>
        <div className='absolute mt2'>
        <div className='bounding-box' style={{ top: box.topRow , right: box.rightCol , bottom: box.bottomRow, left: box.leftCol }} ></div>
          <img id='inputimage' alt='' width='500px' height='auto' src={imageUrl} />
        </div>
    </div>
    );
}

export default FaceRecognition;