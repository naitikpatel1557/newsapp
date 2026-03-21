import React, { Component } from 'react'
import loading from './loading.gif';

export class Spinner extends Component {            //Class Based Component
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" style={{ width: '50px' }} />
      </div>
    )
  }
}

// const Spinner = () => {            //Function Based Component
//   return (
//     <div className='text-center'>
//       <img src={loading} alt="loading" style={{ width: '50px' }} />
//     </div>
//   )
// }

export default Spinner