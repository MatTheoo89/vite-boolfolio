<script>

import axios from 'axios'

export default {
    name: 'contacts',
    data(){
        return{
            baseUrl: 'http://127.0.0.1:8000/api',
            name: '',
            mail: '',
            oogetto: '',
            message: '',
            errors: {},

        }
    },
    methods:{
        sendForm(){
            const formData = {
                name: this.name,
                mail: this.mail,
                object: this.oogetto,
                message: this.message,
            }
            // console.log(formData);

            axios.post(this.baseUrl + '/contacts', formData)
            .then(r =>{
                console.log(formData);

                if(!r.data.success){
                        this.errors = r.data.errors;
                    }else{
                        // ripulisco il form
                        // console.log('sto cazzo');
                        this.name = '';
                        this.mail = '';
                        this.message = '';
                        this.oogetto = '';
                        this.errors = {};
                    }
            })
        },

    }

}
</script>


<template>

	<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Contact Form</h2>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-10">
					<div class="wrapper">
						<div class="row no-gutters">
							<div class="col-md-6">
								<div class="contact-wrap w-100 p-lg-5 p-4">
									<h3 class="mb-4">Send us a message</h3>
									<div id="form-message-warning" class="mb-4"></div> 
				      		<div id="form-message-success" class="mb-4">
				            Your message was sent, thank you!
				      		</div>
									<form @submit.prevent="sendForm()" class="contactForm">
                                        <!-- method="POST" id="contactForm" name="contactForm" class="contactForm" -->
										<div class="row">
											<div class="col-md-12">
												<div class="form-group">
													<input :class="{'is-invalid': errors.name}" type="text" class="form-control" v-model.trim="name" name="name" id="name" placeholder="Name">
                                                    <p v-for="(error, index) in errors.name" :key="'name'+index" :class="{'is-invalid': errors.name}">{{error}}</p>
												</div>
											</div>
											<div class="col-md-12"> 
												<div class="form-group">
													<input :class="{'is-invalid': errors.mail}" type="mail" class="form-control" v-model.trim="mail"  name="mail" id="email" placeholder="Email">
                                                    <p v-for="(error, index) in errors.mail" :key="'mail'+index" :class="{'is-invalid': errors.name}">{{error}}</p>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input :class="{'is-invalid': errors.oogetto}" type="text" class="form-control" v-model.trim="oogetto"  name="oogetto" id="object" placeholder="object">
                                                    <p v-for="(error, index) in errors.object" :key="'object'+index" :class="{'is-invalid': errors.name}">{{error}}</p>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<textarea :class="{'is-invalid': errors.message}" v-model.trim="message"  name="message" class="form-control" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                                    <p v-for="(error, index) in errors.message" :key="'message'+index" :class="{'is-invalid': errors.name}">{{error}}</p>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="submit" value="Invia" class="btn btn-primary">
													<div class="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="col-md-6 d-flex align-items-stretch bg-custom">
								<div class="info-wrap w-100 p-lg-5 p-4 img">
									<h3>Contact us</h3>
									<p class="mb-4">We're open for any suggestion or just to have a chat</p>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-map-marker"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-phone"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-paper-plane"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-globe"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Website</span> <a href="#">yoursite.com</a></p>
					          </div>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- <script src="js/jquery.min.js"></script>
  <script src="js/popper.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/jquery.validate.min.js"></script>
  <script src="js/main.js"></script> -->



</template>


<style lang="scss" scoped>
$font-primary: 'Poppins',Arial, sans-serif;
$primary: #d62196;


@mixin gradient-background(){
	background: rgba(127,39,156,1);
	background: -moz-linear-gradient(-45deg, rgba(127,39,156,1) 0%, rgba(46,39,157,1) 100%);
	background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(127,39,156,1)), color-stop(100%, rgba(46,39,157,1)));
	background: -webkit-linear-gradient(-45deg, rgba(127,39,156,1) 0%, rgba(46,39,157,1) 100%);
	background: -o-linear-gradient(-45deg, rgba(127,39,156,1) 0%, rgba(46,39,157,1) 100%);
	background: -ms-linear-gradient(-45deg, rgba(127,39,156,1) 0%, rgba(46,39,157,1) 100%);
	background: linear-gradient(135deg, rgba(127,39,156,1) 0%, rgba(46,39,157,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7f279c', endColorstr='#2e279d', GradientType=1 );
}

body{
	font-family: $font-primary;
	font-size: 16px;
	line-height: 1.8;
	font-weight: normal;
	background: #fafafa;
	color: black;
}
a {
	transition: .3s all ease;
	color: $primary;
	&:hover, &:focus {
		text-decoration: none !important;
		outline: none !important;
		box-shadow: none;
	}
}
h1, h2, h3, h4, h5,
.h1, .h2, .h3, .h4, .h5 {
	line-height: 1.5;
	font-weight: 400;
	font-family: $font-primary;
	color: black;
}

.bg-primary{
	background: $primary !important;
}

.ftco-section{
	padding: 7em 0;
}

.ftco-no-pt{
	padding-top: 0;
}
.ftco-no-pb{
	padding-bottom: 0;
}
//HEADING SECTION
.heading-section{
	font-size: 28px;
	color: black;
}

//COVER BG
.img{
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
}

.form-control {
	height: 52px;
	background: transparent;
	color: rgba(255,255,255,.8) !important;
	font-size: 14px;
	border-radius: 0px;
	box-shadow: none !important;
	border: 1px solid rgba(255,255,255,.2);
	&::-webkit-input-placeholder { /* Chrome/Opera/Safari */
	  color: rgba(255,255,255,.5) !important;
	}
	&::-moz-placeholder { /* Firefox 19+ */
	  color: rgba(255,255,255,.5) !important;
	}
	&:-ms-input-placeholder { /* IE 0+ */
	  color: rgba(255,255,255,.5) !important;
	}
	&:-moz-placeholder { /* Firefox 18- */
	  color: rgba(255,255,255,.5) !important;
	}
	&:focus, &:active {
		background: transparent;
		border-color: rgba(255,255,255,.5) !important;
	}
}
textarea.form-control {
	height: inherit!important;
    margin-bottom: 20px;
}


.wrapper{
	width: 100%;
	-webkit-box-shadow: 0px 21px 41px -13px rgba(0,0,0,0.18);
	-moz-box-shadow: 0px 21px 41px -13px rgba(0,0,0,0.18);
	box-shadow: 0px 21px 41px -13px rgba(0,0,0,0.18);
}
.contact-wrap{
	@include gradient-background();
	h3{
		color: white;
	}
}


.info-wrap{
	h3{
		color: black;
		position: relative;
		&:after{
			position: absolute;
			bottom: 0;
			left: 0;
			width: 60px;
			height: 3px;
			background: #fff;
			content: '';
		}
	}
	.dbox{
		width: 100%;
		// color: rgba(255,255,255,.8);
		margin-bottom: 25px;
		&:last-child(){
			margin-bottom: 0;
		}
		p{
			margin-bottom: 0;
			span{
				font-weight: 400;
				color: black;
			}
			a{
				color: rgba(0,0,0,.3);
			}
		}
		.icon{
			width: 50px;
			height: 50px;
			border-radius: 50%;
			border: 1px solid rgba(0,0,0,.05);
            background-color: #fff;
            margin-right: 10px;
			span{
				font-size: 20px;
				color: black;
			}
		}
		.text{
			width: calc(100% - 50px);
		}
	}
}


.btn {
	padding: 12px 16px;
	cursor: pointer;
	border-width: 1px;
	border-radius: 5px;
	font-size: 14px;
	font-weight: 400;
	-webkit-box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.12);
	-moz-box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.12);
	box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.12);
	position: relative;
	margin-bottom: 20px;
	// @include transition(.3s);
	&:hover, &:active, &:focus {
		outline: none !important;
		-webkit-box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.22) !important;
		-moz-box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.22) !important;
		box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.22) !important;
	}
	&.btn-primary {
		background: $primary !important;
		border-color: $primary !important;
		color: white;
		&:hover,&:focus{
			border-color: darken($primary,10%) !important;
			background: darken($primary,10%) !important;
		}
	}
}

.contactForm{
	.form-control{
		border: none;
		border-bottom: 1px solid rgba(255,255,255,.2);
		padding: 0;
	}
}
//Forms style
#contactForm {
	.error {
		color: #f65c78;
		font-size: 12px;
	}
	.form-control {
		font-size: 16px;
	}
}
#message {
	resize: vertical;
}
#form-message-warning, #form-message-success {
	display: none;
}
#form-message-warning {
	color: #f65c78;
}
#form-message-success {
	color: success;
	font-size: 18px;
	font-weight: 500;
}
.submitting {
	float: left;
	width: 100%;
	padding: 10px 0;
	display: none;
	font-size: 16px;
	font-weight: 500;
	color: success;
}

.bg-custom{
    background-color: rgb(211, 211, 211);
}

input.is-invalid{
    border: 1px solid red !important;
}
p.is-invalid{
    color: red !important;
}

</style>