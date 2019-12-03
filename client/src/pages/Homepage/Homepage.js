import React, { Component } from 'react';
import './Homepage.css'

//backgroundImage: url('./assets/images/img-home.jpg')
//backgroundImage: `url(${Background})`
//		<img src= {require('./img-home.jpg')} alt=''/>
//import home from './assets/images/img-home.jpg';

/*
Notes:
-backgroundImage: `url(${home})`
-Why isn't bootstrap set to 100% width? What's happening

Bugs:
-Need to fix carousel issue. Unresponsive
*/
class Homepage extends Component{
	render(){
		return(
	<React.Fragment>
		<div class="white-text-container background-image-container" style={{backgroundImage: `url('http://wisedime.com/wp-content/uploads/2019/07/collegebank.jpg')`, width: `100%` }}>
		    <div class="opacity"></div>
		    <div class="container">
		        <div class="row">		           
		            <div class="col-md-6">
		                <h1>Budgeting Just Got Easy</h1>
		                <p>Bread helps you create a monthly budget so you can achieve your money goals. Say goodbye to money stress and hello to confidence in your financial future. Create your first budget in less than 10 minutes.</p>
		                 <a href="./download.html" title="" class="btn btn-lg btn-primary">Create Account</a>
		            </div>

		        </div>
		    </div>
		</div>		

		<div class="section-container border-section-container">
		    <div class="container">
		            <div class="row">
		                <div class="col-md-12 section-container-spacer">
		                    <div class="text-center">
		                        <h2>Vivamus laoreet</h2>
		                        <p> Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing.<br /> Porta non
		                            pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. </p>
		                    </div>
		                </div>

		                <div class="col-md-4">
		                    <div class="fa-container">
		                        <i class="fa fa-comment-o fa-3x" aria-hidden="true"></i>
		                    </div>
		                    <div class="text-center">
		                        <h3>Add Your Monthly Income</h3>
		                    </div>
		                    <div>
		                        <p>Start your budget by adding the income you expect to make this month.</p>
		                    </div>
		                </div>
		                <div class="col-md-4">
		                    <div class="fa-container">
		                        <i class="fa fa-heart-o fa-3x" aria-hidden="true"></i>
		                    </div>
		                    <div class="text-center">
		                        <h3>Plan Your Expenses</h3>
		                    </div>
		                    <div>
		                        <p>Next, make a plan for your income. Bread provides you with a customizable template for budgeting your monthly expenses.</p>
		                    </div>
		                </div>
		                <div class="col-md-4">
		                    <div class="fa-container">
		                        <i class="fa fa-bell-o fa-3x" aria-hidden="true"></i>
		                    </div>
		                    <div class="text-center">
		                        <h3>Track Your Spending</h3>
		                    </div>
		                    <div>
		                        <p>Follow your plan by keeping track of your spending throughout the month. Each time you spend money, create a transaction and track it to your budget.</p>
		                    </div>
		                </div>

		            </div>
		    </div>
		</div>


	<div class="section-container" style={{width: `100%`}}>
	    <div class="container">
	            <div class="row">
	                <div class="col-xs-12">
	                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
	                        
	                        <div class="carousel-inner" role="listbox">
	                            <div class="item active">
	                                <img class="img-responsive" src="https://i.vimeocdn.com/video/595198868_505x160.jpg" alt="First slide"/>
	                            </div>
	                            <div class="item">
	                                <img class="img-responsive" src="https://i.vimeocdn.com/video/589972810_530x315.jpg" alt="Second slide"/>
	                            </div>
	                            <div class="item">
	                                <img class="img-responsive" src="https://i.vimeocdn.com/video/590587169_530x315.jpg" alt="Third slide"/>
	                            </div>
	                        </div>
	                        <ol class="carousel-indicators">
	                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
	                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
	                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	                        </ol>
	                    </div>
	                </div>
	            </div>
	    </div>
	</div>

	<div class="section-container background-color-container white-text-container" style={{width: '100%'}} >
	    <div class="container">
	        <div class="row">
	            <div class="col-xs-12">
	                <div class="text-center">
	                    <h2>Vivamus laoreet</h2>
	                    <p> Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porta non
	                        pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat lacus. Turpis
	                        egestas pretium aenean pharetra magna ac. Id cursus metus aliquam eleifend mi. </p>
	                    <a href="./download.html" title="" class="btn btn-primary btn-lg">Download</a>
	                </div>
	            </div>
	        </div>
	     </div>
	 </div>




	</React.Fragment>
		);
	}
}

export default Homepage;


/*
Unresponsive carousel

	<div class="alert alert-primary" role="alert" style={{width: `100%`}}>
	  A simple primary alert—check it out!
	</div>


	<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
	  <ol class="carousel-indicators">
	    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
	    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
	    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	  </ol>
	  <div class="carousel-inner">
	    <div class="carousel-item active">
	      <img src="https://i.vimeocdn.com/video/590587169_530x315.jpg" class="d-block w-100" alt="..."/>
	    </div>
	    <div class="carousel-item">
	      <img src="http://wisedime.com/wp-content/uploads/2019/07/collegebank.jpg" class="d-block w-100" alt="..."/>
	    </div>
	    <div class="carousel-item">
	      <img src="https://i.vimeocdn.com/video/590587169_530x315.jpg" class="d-block w-100" alt="..."/>
	    </div>
	  </div>
	  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
	    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
	    <span class="sr-only">Previous</span>
	  </a>
	  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
	    <span class="carousel-control-next-icon" aria-hidden="true"></span>
	    <span class="sr-only">Next</span>
	  </a>
	</div>

*/