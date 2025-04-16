import laptopImg from './src/assets/3d_laptop.png';
import logo from './src/assets/logo.png';
 function Header(){
    return(
        <div className="home" id="home">
        <div className="d-flex flex-wrap flex-row header">
            <div className="w-50" id="logo"> <img src={logo} alt="logo" srcSet=""></img> </div>
            <button className="btn btn-primary d-flex d-md-none ms-auto justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#mobileNav">
                    Menu
              </button>
              <div className="collapse d-md-none w-100 mt-2" id="mobileNav">
                <nav className="d-flex flex-column align-items-end">
                  <a className="navLink mb-2" href="#about">About Me</a>
                  <a className="navLink mb-2" href="">Contact</a>
                </nav>
              </div>
                <nav className="w-50  d-none justify-content-end mt-2  d-md-flex">
                    <span><a className="navLink" href="#about">About Me</a></span>
                    <span><a className="navLink" href="#contact">Contact</a></span>
                </nav>
        </div>
         <div className="d-flex flex-wrap flex-row-reverse align-items-center" id="mid">
            <div className="intro  text-start"><span>Hi, I am </span><span id="name">Jose Benavidez</span>
                <p>A Web developer and Designer</p>
            </div>
            <div id="mid_image"> <img src={laptopImg} alt="3d laptop" srcSet=""></img></div>
        </div>
    </div>
    );
  }

  export default Header