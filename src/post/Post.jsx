import './Post.css';
import profilepic from '../Assets/profilepic.png';

function Post() {
  return (
    <div className='post'>
        <img className='postimg' src={profilepic} alt='' />
        <div className="postinfo">
            <div className="postcats">
                <span className='postcat'>Music</span>
                <span className='postcat'>Life</span>
            </div>
            <span className="posttitle">
                Lorem ipsum dolor sit amet
            </span>
            <hr/> 
            <span className='postdate'>
                1 hour ago
            </span>
        </div>
        <p className='postdescription'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi architecto inventore deleniti quasi quibusdam adipisci illum, numquam similique. Laborum adipisci facilis tempore? In recusandae velit culpa ipsum quibusdam rerum.
        </p>
    </div>
  )
}

export default Post