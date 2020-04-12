




$(window).on('scroll',function()
{


	



	if($(window).scrollTop()>0)
	{
		$('.naveber').addClass('shrink');
		$('.naveber .navbar-nav>li>a').addClass('shrink2');
		

	}

	else
	{

		$('.naveber').removeClass('shrink');
		$('.navbar-nav>li>a').removeClass('shrink2');
	
	}

	// $(document).on('click','.naveber .collapse .navbar-nav li ', function(){

	// 	$(this).addClass('active3').siblings().removeClass('active3')
	// });

	if($(window).scrollTop()>300)
	{
		$('.top-zero').addClass('shrink4');

	}
	else{
		$('.top-zero').removeClass('shrink4');
	}

	



	if($(window).scrollTop() > 100)
	{

		$('.scroll').addClass('scroll2');


	}
	else
	{
		$('.scroll').removeClass('scroll2');

	}




});


$(function(){

	$(document).on('scroll',function(){

		var scrollTop = $(document).scrollTop();

		var welcome_sectiontop = $('#welcome_section').offset().top;
		var about_sectiontop = $('#about_section').offset().top;
		var services_sectiontop = $('#services_section').offset().top;
		var portfolio_sectiontop = $('#portfolio_section').offset().top;
		var map_contact_sectiontop = $('#map_contact_section').offset().top;

		if(scrollTop > welcome_sectiontop-100)
		{
			$('.navbar-nav>li:nth-child(1)').addClass('active2');

		}

		if(scrollTop > about_sectiontop-100)

		{
			$('.navbar-nav>li:nth-child(2)').addClass('active2');
			$('.navbar-nav>li:nth-child(1)').removeClass('active2');
			$('.navbar-nav>li:nth-child(3)').removeClass('active2');
			$('.navbar-nav>li:nth-child(4)').removeClass('active2');
			$('.navbar-nav>li:nth-child(5)').removeClass('active2');
		}
		else
		{
			$('.navbar-nav>li:nth-child(2)').removeClass('active2');
		}

		if(scrollTop > services_sectiontop-100)
		{
			$('.navbar-nav>li:nth-child(3)').addClass('active2');
			$('.navbar-nav>li:nth-child(1)').removeClass('active2');
			$('.navbar-nav>li:nth-child(2)').removeClass('active2');
			$('.navbar-nav>li:nth-child(4)').removeClass('active2');
			$('.navbar-nav>li:nth-child(5)').removeClass('active2');

		}
		else
		{
			$('.navbar-nav>li:nth-child(3)').removeClass('active2');

		}
		if(scrollTop > portfolio_sectiontop-100)
		{
			$('.navbar-nav>li:nth-child(4)').addClass('active2');
			$('.navbar-nav>li:nth-child(1)').removeClass('active2');
			$('.navbar-nav>li:nth-child(2)').removeClass('active2');
			$('.navbar-nav>li:nth-child(3)').removeClass('active2');
			$('.navbar-nav>li:nth-child(5)').removeClass('active2');

		}
		else
		{
			$('.navbar-nav>li:nth-child(4)').removeClass('active2');

		}
		if(scrollTop >= map_contact_sectiontop-200)
		{

			$('.navbar-nav>li:nth-child(5)').addClass('active2');
			$('.navbar-nav>li:nth-child(1)').removeClass('active2');
			$('.navbar-nav>li:nth-child(2)').removeClass('active2');
			$('.navbar-nav>li:nth-child(3)').removeClass('active2');
			$('.navbar-nav>li:nth-child(4)').removeClass('active2');
		}
		else
		{
			$('.navbar-nav>li:nth-child(5)').removeClass('active2');

		}






		var boxtop = $('.imagescale').offset().top;
		// var scroll2top = $('.scroll2').offset().top;





		if(scrollTop > boxtop)
		{

			$('.box').addClass('box2');


		}
		else
		{

			
			$('.box').removeClass('box2');	
			
		}


	});













});


$(document).ready(function()
{


	var scrollTop = $(document).scrollTop();

	var navebertop = $('.naveber').offset().top;
	var welcome_sectiontop = $('#welcome_section').offset().top;
	var about_sectiontop = $('#about_section').offset().top;
	var services_sectiontop = $('#services_section').offset().top;
	var portfolio_sectiontop = $('#portfolio_section').offset().top;
	var map_contact_sectiontop = $('#map_contact_section').offset().top;

	

	if(scrollTop > welcome_sectiontop-100)
	{
		$('.navbar-nav>li:nth-child(1)').addClass('active2');
		$('.navbar-nav>li:nth-child(2)').removeClass('active2');
		$('.navbar-nav>li:nth-child(3)').removeClass('active2');
		$('.navbar-nav>li:nth-child(4)').removeClass('active2');
		$('.navbar-nav>li:nth-child(5)').removeClass('active2');
	}

	if(scrollTop > about_sectiontop-100)
	{
		$('.navbar-nav>li:nth-child(2)').addClass('active2');

		$('.navbar-nav>li:nth-child(1)').removeClass('active2');
		$('.navbar-nav>li:nth-child(3)').removeClass('active2');
		$('.navbar-nav>li:nth-child(4)').removeClass('active2');
		$('.navbar-nav>li:nth-child(5)').removeClass('active2');
	}

	if(scrollTop > services_sectiontop-100)
	{
		$('.navbar-nav>li:nth-child(3)').addClass('active2');

		$('.navbar-nav>li:nth-child(2)').removeClass('active2');
		$('.navbar-nav>li:nth-child(1)').removeClass('active2');
		$('.navbar-nav>li:nth-child(4)').removeClass('active2');
		$('.navbar-nav>li:nth-child(5)').removeClass('active2');
	}

	if(scrollTop > portfolio_sectiontop-100)
	{

		$('.navbar-nav>li:nth-child(4)').addClass('active2');
		$('.navbar-nav>li:nth-child(2)').removeClass('active2');
		$('.navbar-nav>li:nth-child(3)').removeClass('active2');
		$('.navbar-nav>li:nth-child(1)').removeClass('active2');
		$('.navbar-nav>li:nth-child(5)').removeClass('active2');
	}

	if(scrollTop >= map_contact_sectiontop-200)
	{

		$('.navbar-nav>li:nth-child(5)').addClass('active2');
		$('.navbar-nav>li:nth-child(2)').removeClass('active2');
		$('.navbar-nav>li:nth-child(3)').removeClass('active2');
		$('.navbar-nav>li:nth-child(4)').removeClass('active2');
		$('.navbar-nav>li:nth-child(1)').removeClass('active2');
	}




	if(scrollTop > 0)
	{

		$('.naveber').addClass('shrink');
		$('.naveber .navbar-nav>li>a').addClass('shrink2');

	}
	else
	{
		$('.naveber').removeClass('shrink');
		$('.naveber .navbar-nav>li>a').removeClass('shrink2');

	}

	$('.box').addClass('box2');

	

	






});


var typed = new Typed('.type',     {
	strings: ["I'm Baijid", " Full stack web developer"," UI Designer"],
	typeSpeed:50,
	backSpeed:10,
	loop:true

}
); 



// window.scroll({
// 	top : pos,
// 	left : 0,
// 	behavior : 'smooth'
// })
