import './Topbar.css';
import profilepic from '../Assets/profilepic.png';

function Topbar() {
  return (
    <div className='topbar'>
      <div className="topicon topbarleft">
        <i className="topicon fa-brands fa-linkedin-in"></i>
        <i className="topicon fa-brands fa-twitter"></i>
        <i className="topicon fa-brands fa-medium"></i>
        <i className="topicon fa-brands fa-github"></i>
      </div>
      <div className="topbarcenter">
        <ul className="toplist">
            <li className="toplistitem">Home</li>
            <li className="toplistitem">About</li>
            <li className="toplistitem">Write</li>
            <li className="toplistitem">Logout</li>
        </ul>
      </div>
      <div className="topbarright">
        <img className='topimage' src={profilepic} alt='ifeanyipic' />
        <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Topbar
