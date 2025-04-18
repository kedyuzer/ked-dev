function Footer(){
    return(

        <footer className="text-center text-lg-start" style={{backgroundColor: '#000000'}}>
<div id="contact"className="text-center text-white p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', fontSize:'20px'}}>
    Contact me @
  </div>
<div className="container d-flex justify-content-center pb-4">
<a href="https://www.facebook.com/howsiii" target="_blank">
<button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor:'#2358e8'}}>
    <i className='fab fa-facebook'></i>
</button>
</a>
<a href="https://www.instagram.com/hooowwwseee/" target="_blank">
<button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: '#2358e8'}}>
  <i className="fab fa-instagram"></i>
</button>
</a>
<a href="https://github.com/kedyuzer" target="_blank">
<button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: '#2358e8'}}>
<i className="devicon-github-original"></i>
</button>
</a>
</div>
<div className="d-flex justify-content-center align-items-start pb-5">
<i class="devicon-google-plain">  <span style={{fontStyle:'normal', fontFamily:'system-ui', fontSize:'18px'}}> : josebenavidez171@gmail.com</span></i>
</div>
<div className="d-flex justify-content-center align-items-start pb-5">
      Copyright 2025 | All Rights Reserved.
</div>
</footer>
    );
}

export default Footer