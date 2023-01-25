import './Sidebar.css';
import profilepic from '../Assets/profilepic.png';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebaritem">
        <span className="sidebartitle">About me</span>
        <img src={profilepic} alt=''/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae reiciendis enim exercitationem id deserunt laborum? Soluta illo, nobis numquam
        </p>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">Categories</span>
        <ul className="sidebarlist">
          <li className="sidebarlistitem">Life</li>
          <li className="sidebarlistitem">Music</li>
          <li className="sidebarlistitem">Style</li>
          <li className="sidebarlistitem">Sport</li>
          <li className="sidebarlistitem">Tech</li>
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">Follow us</span>
        <div className="sidebarsocial">
          <i className="sidebaricon fa-brands fa-linkedin-in"></i>
          <i className="sidebaricon fa-brands fa-twitter"></i>
          <i className="sidebaricon fa-brands fa-medium"></i>
          <i className="sidebaricon fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
