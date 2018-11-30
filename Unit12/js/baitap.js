function validateEmail(email) {
		    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    return re.test(String(email).toLowerCase());
		}


%(function () {
	$('.next').on('click',function(){
		switch (index){
			if (checkTab1()) {
				Nexttab(1)
			}
			break;
		case 2:
			if (checkTab2()) {
				if ($('#age').val() > 18) {
					$('#ib2').css('display','none');
					Nexttab(3)
				}
				else{
					Nexttab(2)
				}
			}
			break;
		}
	})
	$('.previous').on('click',function(){
		switch (index){
			case 1:
			break;
			case 2:
			previousTab(2);
			case 3:
			previousTab(3);
			break;
			case 4:
			previousTab(4);
			break;
		}
	})
})
function checkTab1(){
	var name = $('#nameTab1').val().trim();
	var password = $('#passwordTab1').val().trim();
	var rePassWord = $('#rePassWordTab1').val().trim();
	var errName = false;
	var errPassWord = false;
	var errRePassWord = false;



	if (name == '') {
		$('errorNameTab1').html('Vui Lòng nhập tên')
	}
	else(){
		$('errorNameTab1').html('')
	}
	if (password =='') {
		$('errorPasswordTab1').html('Vui Lòng nhập mật khẩu')
	}
	else(){
		$('errorPasswordTab1').html('')
	}
	if (rePassword =='') {
		$('errorRePasswordTab1').html('Vui Lòng xác nhận mật khẩu')
	}
	else(){
		$('errorRePasswordTab1').html('')
	}
	if (password != rePassword) {
		$('errorRePasswordTab1').html('Vui Lòng xác nhận mật khẩu')
		errPassWord = true;
		errRePassWord = true;
	}
	if (errName == true && errPassWord == true &&errPassWord  == true ) {
		alert('ok')
		Nexttab();
	}

}

