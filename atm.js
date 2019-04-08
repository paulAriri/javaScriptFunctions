 var balance = 100.0; //set initial balance.
	function get_balance() {
		alert('Your current balance is: '+balance);
		atm();
	}
	function make_deposit() {
		var deposit = parseFloat(prompt('How much would you like to deposit?'));
		if (isNaN(deposit) || deposit === '') {
			alert('Error: please enter a number!');
			make_deposit();
		} else {
			balance += deposit;
			get_balance();
		}
	}
	function make_withdrawal() {
		var withdrawal = parseFloat(prompt('How much would you like to withdrawal?'));
		if (isNaN(withdrawal) || withdrawal === '') {
			alert('Error: please enter a number!');
			make_withdrawal();
		} else {
			balance -= withdrawal;
			get_balance();
		}
	}
	function error() {
		alert('Error: accepted numbers are 1 through 4.');
		atm();
	}
	function exit() {
		var confirm_leave = confirm('You have selected exit.');
		if (confirm_leave) {
			window.close();
		} else {
			atm();
		}
	}
	function atm() {
		var choice = parseInt(prompt('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit')); //prompt user for choice.
		if (choice === 1) {
			get_balance();
		} else if (choice === 2) {
			make_deposit();
		} else if (choice === 3) {
			make_withdrawal();
		} else if (choice === 4) {
			exit();
		} else {
			error();
		}
	}
	atm();
