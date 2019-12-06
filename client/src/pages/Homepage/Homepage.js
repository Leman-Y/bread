import React, { Component } from 'react';
import './Homepage.css'; //Main CSS
//import "./css/bootstrap.min.css";
//import "./css/bootstrap-datepicker.css";
//import "./css/jquery.fancybox.min.css";
//import "./css/owl.carousel.min.css";
//import "./css/owl.theme.default.min.css";
//import "./css/aos.css";

import Testimony_person_1 from './images/testimony_person_1.jpg';

/*
  <head>
    <title>Arcwork &mdash; Website Template by Colorlib</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet">

    <link rel="stylesheet" href="fonts/icomoon/style.css">

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap-datepicker.css">
    <link rel="stylesheet" href="css/jquery.fancybox.min.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css">
    <link rel="stylesheet" href="css/aos.css">


  </head>
*/

//backgroundImage: url('./assets/images/img-home.jpg')
//backgroundImage: `url(${Background})`
//		<img src= {require('./img-home.jpg')} alt=''/>
//import home from './assets/images/img-home.jpg';

/*
Notes:
-backgroundImage: `url(${home})`
-Why isn't bootstrap set to 100% width? What's happening
-http://www.mashup-template.com/preview.html?template=pure

Bugs:
-Need to fix carousel issue. Unresponsive
- Menu button doesn't show for mobile view
- no CSS flashy functionality

*/
class Homepage extends Component{
	render(){
		return(
	<React.Fragment>

	  <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300" style={{width: '100%'}}>

	    
	    <div class="site-wrap" id="home-section" style={{width: '100%'}}>


			<div class="site-mobile-menu site-navbar-target">
			<div class="site-mobile-menu-header">
			  <div class="site-mobile-menu-close mt-3">
			    <span class="icon-close2 js-menu-toggle"></span>
			  </div>
			</div>
			<div class="site-mobile-menu-body"></div>
			</div>



			<header class="site-navbar site-navbar-target" role="banner" style={{width: '100%'}} >

			<div class="container">
			  <div class="row align-items-center position-relative">

			    <div class="col-3 ">
			      <div class="site-logo">
			        <a href="index.html" class="font-weight-bold">Arcwork</a>
			      </div>
			    </div>

			    <div class="col-9  text-right">
			      

			      <span class="d-inline-block d-lg-none"><a href="#Homepage" class="text-primary site-menu-toggle js-menu-toggle py-5"><span class="icon-menu h3 text-primary"></span></a></span>

			      

			      <nav class="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
			        <ul class="site-menu main-menu js-clone-nav ml-auto ">
			          <li class="active"><a href="index.html" class="nav-link">Home</a></li>
			          <li><a href="about.html" class="nav-link">About</a></li>
			          <li><a href="services.html" class="nav-link">Services</a></li>
			          <li><a href="blog.html" class="nav-link">Blog</a></li>
			          <li><a href="contact.html" class="nav-link">Contact</a></li>
			        </ul>
			      </nav>
			    </div>

			    
			  </div>
			</div>

			</header>

		    <div class="ftco-blocks-cover-1">
		      <div class="site-section-cover half-bg">
		        <div class="container">
		          <div class="row align-items-center justify-content-center">
		            <div class="col-lg-8">
		              <h1 class="mb-5 text-primary font-weight-bold"  data-aos="fade-up">Grow Up Your <span class="typed-words">Business</span>.</h1>
		              <p data-aos="fade-up" data-aos-delay="100"><a href="#Homepage" class="more-29291">View Our Services</a></p>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		    <div class="site-section">

		      <div class="container">
		        <div class="row">
		          <div class="col-md-4" data-aos="fade-up" data-aos-delay="">
		            <div class="feature-92912">
		              <span class="wrap-icon flaticon-debt"></span>
		              <h2 class="heading">Financial Analysis</h2>
		              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed!</p>

		              <p><a href="#Homepage" class="more-92913">View Our Services</a></p>
		            </div>
		          </div>
		          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
		            <div class="feature-92912 active">
		              <span class="wrap-icon flaticon-growth"></span>
		              <h2 class="heading">Marketing Plans</h2>
		              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed!</p>
		              <p><a href="#" class="more-92913">View Our Services</a></p>
		            </div>
		          </div>
		          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
		            <div class="feature-92912">
		              <span class="wrap-icon flaticon-business-plan"></span>
		              <h2 class="heading">Optimize Solutions</h2>
		              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed!</p>
		              <p><a href="#Homepage" class="more-92913">View Our Services</a></p>
		            </div>
		          </div>
		        </div>
		      </div>

		    </div>



		    <div class="site-section bg-left-half mb-5">
		      <div class="container block-13">
		        
		        <h2 class="text-primary mb-5 font-weight-bold">Our Solutions</h2>
		        

		        <div class="owl-carousel nonloop-block-13">
		          <div class="media-29101">
		            <a href="#Homepage"><img src={require("./images/img_1.jpg")} alt="Image" class="img-fluid"/></a>
		            <h3><a href="#Homepage">Consectetur Adipisicing Elit</a></h3>
		          </div>
		          <div class="media-29101">
		            <a href="#Homepage"><img src={require("./images/img_2.jpg")} alt="Image" class="img-fluid"/></a>
		            <h3><a href="#Homepage">Beatae Doloribu</a></h3>
		          </div>
		          <div class="media-29101">
		            <a href="#Homepage"><img src={require("./images/img_3.jpg")} alt="Image" class="img-fluid"/></a>
		            <h3><a href="#Homepage">Accusantium Eius Soluta</a></h3>
		          </div>
		          <div class="media-29101">
		            <a href="#Homepage"><img src={require("./images/img_1.jpg")} alt="Image" class="img-fluid"/></a>
		            <h3><a href="#Homepage">Consectetur Adipisicing Elit</a></h3>
		          </div>
		          <div class="media-29101">
		            <a href="#Homepage"><img src={require("./images/img_2.jpg")} alt="Image" class="img-fluid"/></a>
		            <h3><a href="#Homepage">Beatae Doloribu</a></h3>
		          </div>
		          <div class="media-29101">
		            <a href="#Homepage"><img src={require("./images/img_3.jpg")} alt="Image" class="img-fluid"/></a>
		            <h3><a href="#Homepage">Accusantium Eius Soluta</a></h3>
		          </div>
		        </div>

		      </div>
		    </div>


		    <div class="site-section">
		      <div class="container">

		        <div class="row justify-content-center">
		          <div class="col-md-8">
		            
		            <h2 class="text-primary mb-5 font-weight-bold">Testimonial</h2>

		            <div class="owl-carousel slide-one-item">

		              <div class="d-md-flex testimony-29101 align-items-stretch">
		                <div class="image" style={{backgroundImage: `url(${Testimony_person_1})`}}></div>
		                <div class="text">
		                  <blockquote>
		                    <p>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, at! Atque totam obcaecati veniam eius vero, similique quibusdam! Sunt sequi, nemo. Quam consequuntur ipsum suscipit repellat molestiae laboriosam, incidunt!&rdquo;</p>

		                    <div class="author">&mdash; Craig Stephen</div>
		                  </blockquote>
		                </div>
		              </div>  

		              <div class="d-md-flex testimony-29101 align-items-stretch">
		                <div class="image" style={{backgroundImage: `url(${Testimony_person_1})`}}></div>
		                <div class="text">
		                  <blockquote>
		                    <p>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, at! Atque totam obcaecati veniam eius vero, similique quibusdam! Sunt sequi, nemo. Quam consequuntur ipsum suscipit repellat molestiae laboriosam, incidunt!&rdquo;</p>

		                    <div class="author">&mdash; Craig Stephen</div>
		                  </blockquote>
		                </div>
		              </div>  

		            </div>

		            
		          </div>
		        </div>
		  
		        
		      </div>
		    </div>


		    <div class="site-section">
		      <div class="container">
		        <div class="row">
		          <div class="col">
		            <h2 class="text-primary mb-5 font-weight-bold float-left">Blog</h2>
		            <div class="float-right"><a href="#">View All</a></div>
		          </div>
		        </div>
		        <div class="row">
		          <div class="col-lg-4 col-md-6 mb-4">
		            <div class="post-entry-1 h-100">
		              <a href="single.html">
		                <img src={require("./images/img_1.jpg")} alt="Image"
		                 class="img-fluid"/>
		              </a>
		              <div class="post-entry-1-contents">
		                
		                <h2><a href="single.html">Lorem ipsum dolor sit amet</a></h2>
		                <span class="meta d-inline-block mb-3">July 17, 2019 <span class="mx-2">by</span> <a href="#">Admin</a></span>
		                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
		              </div>
		            </div>
		          </div>
		          <div class="col-lg-4 col-md-6 mb-4">
		            <div class="post-entry-1 h-100">
		              <a href="single.html">
		                <img src={require("./images/img_2.jpg")} alt="Image"
		                 class="img-fluid"/>
		              </a>
		              <div class="post-entry-1-contents">
		                
		                <h2><a href="single.html">Lorem ipsum dolor sit amet</a></h2>
		                <span class="meta d-inline-block mb-3">July 17, 2019 <span class="mx-2">by</span> <a href="#Homepage">Admin</a></span>
		                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
		              </div>
		            </div>
		          </div>

		          <div class="col-lg-4 col-md-6 mb-4">
		            <div class="post-entry-1 h-100">
		              <a href="single.html">
		                <img src={require("./images/img_3.jpg")} alt="Image"
		                 class="img-fluid"/>
		              </a>
		              <div class="post-entry-1-contents">
		                
		                <h2><a href="single.html">Lorem ipsum dolor sit amet</a></h2>
		                <span class="meta d-inline-block mb-3">July 17, 2019 <span class="mx-2">by</span> <a href="#Homepage">Admin</a></span>
		                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>

		    <div class="site-section bg-tertiary">
		      <div class="container">
		        <div class="row justify-content-center">
		          <div class="col-md-8">
		            <h2 class="text-primary mb-5 font-weight-bold">Let's work together to make your business growth dramatically.</h2>
		            <p><a href="#Homepage" class="more-29291">View Our Services</a></p>    
		          </div>
		        </div>
		      </div>
		    </div>

		    <div class="footer site-section">
		      <div class="container">
		        <div class="row">
		          <div class="col-md-3">
		            <div class="site-logo-footer">
		              <a href="index.html">ArcWork</a>
		            </div> 
		          </div>
		          <div class="col-md-8 ml-auto">
		            <div class="row">
		              <div class="col-md-4 ml-auto">
		                <ul class="list-unstyled links">
		                  <li><a href="#Homepage">Contact Us</a></li>
		                  <li><a href="#Homepage">hello@mydomain.com</a></li>
		                  <li><a href="#Homepage">+1 829 2293 382</a></li>
		                  <li><a href="#Homepage">Support</a></li>
		                </ul>
		              </div>
		              <div class="col-md-4">
		                <ul class="list-unstyled links">
		                  <li><a href="#Homepage">Home</a></li>
		                  <li><a href="#Homepage">Blog</a></li>
		                  <li><a href="#Homepage">Services</a></li>
		                  <li><a href="#Homepage">About Us</a></li>
		                </ul>
		              </div>
		              <div class="col-md-4">
		                <ul class="list-unstyled links">
		                  <li><a href="#Homepage">Home</a></li>
		                  <li><a href="#Homepage">Blog</a></li>
		                  <li><a href="#Homepage">Services</a></li>
		                  <li><a href="#Homepage">About Us</a></li>
		                </ul>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		    




	    </div>


	  </body>

    





	</React.Fragment>
		);
	}
}

export default Homepage;

/*








	    <div class="site-section">
	      <div class="container">
	        <div class="row mb-4 text-center">
	          <div class="col">
	            <a href="#"><span class="m-2 icon-facebook"></span></a>
	            <a href="#"><span class="m-2 icon-twitter"></span></a>
	            <a href="#"><span class="m-2 icon-linkedin"></span></a>
	            <a href="#"><span class="m-2 icon-instagram"></span></a>
	            <a href="#"><span class="m-2 icon-skype"></span></a>
	          </div>
	        </div>
	        <div class="row mt-5 justify-content-center">
	          <div class="col-md-7 text-center">
	            <p>
	            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
	            </p>
	          </div>
	        </div>
	      </div>
	    </div>


*/


/*



	    <script src="js/jquery-3.3.1.min.js"></script>
	    <script src="js/jquery-migrate-3.0.0.js"></script>
	    <script src="js/popper.min.js"></script>
	    <script src="js/bootstrap.min.js"></script>
	    <script src="js/owl.carousel.min.js"></script>
	    <script src="js/jquery.sticky.js"></script>
	    <script src="js/jquery.waypoints.min.js"></script>
	    <script src="js/jquery.animateNumber.min.js"></script>
	    <script src="js/jquery.fancybox.min.js"></script>
	    <script src="js/jquery.stellar.min.js"></script>
	    <script src="js/jquery.easing.1.3.js"></script>
	    <script src="js/bootstrap-datepicker.min.js"></script>
	    <script src="js/isotope.pkgd.min.js"></script>
	    <script src="js/aos.js"></script>
	  

	    <script src="js/typed.js"></script>
	            <script>
	            var typed = new Typed('.typed-words', {
	            strings: ["Business"," Startups"," Organization", " Company"],
	            typeSpeed: 80,
	            backSpeed: 80,
	            backDelay: 4000,
	            startDelay: 1000,
	            loop: true,
	            showCursor: true
	            });
	            </script>


	    <script src="js/main.js"></script>

*/
