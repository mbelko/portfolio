jQuery(window).load(function(){ 
 jQuery('.container .tab-content:first').fadeIn();
 jQuery('.navigation li:first').addClass('active');  
 jQuery('.navigation li a').click(function(){
  jQuery('.navigation li').removeClass('active');
  jQuery(this).parent().addClass('active');
  var currentTab = jQuery(this).attr('href');
  jQuery('.container .tab-content').hide();
  jQuery(currentTab).fadeIn();     
  return false;
 });
}); 

jQuery(window).load(function(){ 
 jQuery('.right_col .gal_content:first').fadeIn();
 jQuery('.left_col li:first').addClass('selected');  
 jQuery('.left_col li a').click(function(){
  jQuery('.left_col li').removeClass('selected');
  jQuery(this).parent().addClass('selected');
  var selectedTab = jQuery(this).attr('href');
  jQuery('.right_col .gal_content').hide();
  jQuery(selectedTab).fadeIn();     
  return false;
 });
});