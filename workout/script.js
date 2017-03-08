$(document).ready(function(){
$('#click').click(function() {
$('#content').slideToggle("slow", function() {
	if ($(this).is(':visible')) {
		$('#click').text('ET ON REFERME TOUT !')
	} else {
		$('#click').text('ALLEZ ON CLIQUE ICI !')
	}
})
}
);

// $('#org').click(function() {
//   $('#organisation').fadeToggle( "slow", "linear" );
// });


});