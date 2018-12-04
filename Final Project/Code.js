function disabled(){
	swal(
	  'Sorry!',
	  'This feature isnt completely functional so come back later! :D',
	  'info'
	);
}

function contact(){
	const {value: text} = swal({
		title: 'Need to Contact Us?',
		type: 'question',
		input: 'textarea',
		inputPlaceholder: 'Type your message here...',
		showCancelButton: true
	}).then((result) => {
  		if (result.value) {
		    swal(
		      'Submitted!',
		      'Your Request has been Submitted!',
		      'success'
		    )
  		}
  		else{
  			swal(
		      'Denied!',
		      'You gotta enter some text my guy!',
		      'error'
		    )
  		}
	}
	)
}


function emptycart(){
	swal(
	  'Empty!',
	  'Cart is full of anything....Get Shopping!',
	  'info'
	);
}
function fav(){
	swal(
	  'Not Available!',
	  'Cant Use this yet... OOF',
	  'info'
	);
}

function Leaving(link){
	swal({
	  title: 'Are you sure?',
	  text: "You'll be leaving the site!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, Leave!'
	}).then((result) => {
	  if (result.value) {
	    window.open(link, "_self");
	  }
	})
}

