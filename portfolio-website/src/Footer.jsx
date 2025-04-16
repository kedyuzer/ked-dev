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
</div>
<div className="d-flex justify-content-center align-items-start pb-5">
<i className="fas fa-phone"> +639608610703</i>
</div>
</footer>
    );
}

export default Footer