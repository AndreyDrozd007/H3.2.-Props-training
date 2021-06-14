import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Task 1
const Text = ({ name, color, fontSize, underline }) => {
  return <div className='text' style={{ fontSize: fontSize, color: color, textDecoration: underline ? 'underline' : 'none' }}> {name} </div>
}
// Task 2
const Square = ({ cssClass, label }) => {
  return <div className={cssClass}> {label} </div>
}
ReactDOM.render(
  <React.StrictMode>
    {/* Task 1 */}
    <div className='text__container'>
      <Text name='Regular text' fontSize={11} color='green' />
      <Text name='Huge header' fontSize={25} color='aqua' />
      <Text name='Danger notifocation' fontSize={13} color='red' />
      <Text name='Underlined text' fontSize={16} color='grey' underline={true} />
    </div>
    {/* Task 2 */}
    <div className='square__container'>
      <Square label='Big square' cssClass='big-square' />
      <Square label='A less square' cssClass='less-square' />
      <Square label='The smallest one' cssClass='small-square' />
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);