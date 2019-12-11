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
			        <a href="index.html" class="font-weight-bold">Bread</a>
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
					  <li><a href="sign-in" class="nav-link">Log In</a></li>
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
		              <h1 class="mb-5 text-primary font-weight-bold"  data-aos="fade-up">Budgeting <div class="typed-words">Just Got Easy</div></h1>
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
		              <h2 class="heading">Add Your Monthly Income</h2>
		              <p>Start your budget by adding the income you expect to make this month.</p>

		              <p><a href="#Homepage" class="more-92913">View Our Services</a></p>
		            </div>
		          </div>
		          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
		            <div class="feature-92912 active">
		              <span class="wrap-icon flaticon-growth"></span>
		              <h2 class="heading">Plan Your Expenses</h2>
		              <p>Next, make a plan for your income. Bread provides you with a customizable template for budgeting your monthly expenses.</p>
		              <p><a href="#" class="more-92913">View Our Services</a></p>
		            </div>
		          </div>
		          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
		            <div class="feature-92912">
		              <span class="wrap-icon flaticon-business-plan"></span>
		              <h2 class="heading">Track Your Spending</h2>
		              <p>Keep track of your spending throughout the month. Each time you spend money, create a transaction and track it to your budget.</p>
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
		            <a href="#Homepage"><img src="https://www.clearpointstrategy.com/wp-content/uploads/2019/04/Budget-vs.-Actual-Dashboard-1024x561.png" alt="Image" class="img-fluid"/></a>
		            <h3><a href="#Homepage">Budgeting Dashboard</a></h3>
		          </div>
		          <div class="media-29101">
		            <a href="#Homepage"><img src="https://www.everydollar.com/images/home/hero-devices-c33a5f.png" alt="Image" class="img-fluid"/></a>
		            <h3><a href="#Homepage">Transaction Page</a></h3>
		          </div>
		          <div class="media-29101">
		            <a href="#Homepage"><img src={require("./images/Business-articles.png")} alt="Image" class="img-fluid"/></a>
		            <h3><a href="#Homepage">Financial Literacy Articles</a></h3>
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
		                <div class="image" style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRVJ67-duH65RXr5LY7UobjoTJty2YwPIiNB3rjfXC26jowNNIQ&s")`}}></div>
		                <div class="text">
		                  <blockquote>
		                    <p>&ldquo;Awesome app! Especially for millennials who don't like to do budgets or calculate. Helps me keep track and be more mindful of my spending habits.&rdquo;</p>
		                    <div class="author">&mdash; Craig Vashnul</div>

		                  </blockquote>
		                </div>
		              </div>  

		              <div class="d-md-flex testimony-29101 align-items-stretch">
		                <div class="image" style={{backgroundImage: `url("https://next.bncollege.com/wp-content/uploads/2016/10/Student-with-Textbook.jpg")`}}></div>
		                <div class="text">
		                  <blockquote>
		                    <p>&ldquo;Having the ability to manage my budget at such a granular level and be able to add entries on the fly has taken my quest to be rid of debt to a whole new level!&rdquo;</p>

		                    <div class="author">&mdash; Melissa Stephen</div>
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
		                <img src="https://www.moneycrashers.com/wp-content/uploads/2019/02/best-credit-cards-college-students-1068x713.jpg" alt="Image"
		                 class="img-fluid"/>
		              </a>
		              <div class="post-entry-1-contents">
		                
		                <h2><a href="single.html">8 Best Credit Cards for College Students</a></h2>
		                <span class="meta d-inline-block mb-3">December 1, 2019 <span class="mx-2">by</span> <a href="https://www.moneycrashers.com/best-credit-cards-college-students/" target="_blank">Brian Martucci</a></span>
		                <p>Most college students have limited experience with credit cards and other forms of credit. Accordingly, their credit histories are often thin or nonexistent.</p>
		              </div>
		            </div>
		          </div>
		          <div class="col-lg-4 col-md-6 mb-4">
		            <div class="post-entry-1 h-100">
		              <a href="single.html">
		                <img src="https://cnet3.cbsistatic.com/img/cM76O4CkKf8ig1FeS1k_7XWPsao=/1200x675/2019/11/27/798bac68-694a-48bc-9b6f-9578b0f2777d/money-cash-coins-purse-money-3719.jpg" alt="Image"
		                 class="img-fluid"/>
		              </a>
		              <div class="post-entry-1-contents">
		                
		                <h2><a href="single.html">10 Things You Need to Know About Money</a></h2>
		                <span class="meta d-inline-block mb-3">April 8, 2008 <span class="mx-2">by</span> <a href="https://www.thestreet.com/personal-finance/ten-things-you-need-to-know-about-money-10410949" target="_blank">Jeffrey Strain </a></span>
		                <p>Many adults don't understand money as well as they should - here are 10 financial basics that will impact your household finances.</p>
		              </div>
		            </div>
		          </div>

		          <div class="col-lg-4 col-md-6 mb-4">
		            <div class="post-entry-1 h-100">
		              <a href="single.html">
		                <img src="https://previews.123rf.com/images/alwih/alwih1902/alwih190200295/119837287-closeup-of-a-hundred-dollar-bill-background-of-dollar-bills-american-dollars-cash-money-benjamin-fra.jpg" alt="Image"
		                 class="img-fluid"/>
		              </a>
		              <div class="post-entry-1-contents">
		                
		                <h2><a href="single.html">How to Invest - Basic Investing Strategies</a></h2>
		                <span class="meta d-inline-block mb-3">Oct 31, 2012<span class="mx-2">by</span> <a href="https://www.thestreet.com/investing/how-to-invest-ways-to-make-your-money-grow-11748100" target="_blank">John Defeo</a></span>
		                <p>Learning how to invest is an important life lesson. Here are a few investing strategies for people who'd like to start investing money without obsessing.</p>
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
		            <h2 class="text-primary mb-5 font-weight-bold">With our web application you can be financially aware of your life and learn about personal finance!</h2>
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
		              <a href="index.html">Bread</a>
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
