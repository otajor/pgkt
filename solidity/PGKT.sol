pragma solidity ^0.4.11;

contract pgkt01 { 

	
	// account addresses		
	address public treasurer;
	
					
	// Public variables of the coinToken
	string public standard = 'Token 0.1';
	string public name;
	string public symbol;
	uint8 public decimals;
	uint256 public totalPgkt;
	uint256 public totalPgktInCirculation;




		
	// The BGKT Ledger 
	mapping (address => uint256) public balanceOf;
	
    //Struct for Account List -
	struct accountDetail {
		uint256 telephoneNumber;
		bool isTelephoneAccount; 		// This set to true when record created
		bool live;						// Live Account
		uint256	authenticationToken; 	// Token indictating that account holder is verified

	}
	// mapping for accountDetail to 
	mapping (address => accountDetail) public accountList;


	mapping (address => mapping (address => uint256)) public allowance;




	// This generates a public event on the blockchain that will notify clients 

	event AccountCreated(address accountNumber, uint256 accountTelephoneNumber);
	event FundsSent(address senderAccount, uint256 senderTel, address recipientAddress, uint256 recipientTel, uint256 valueCents );
	event FundsBought(address recipientAddress, uint256 recipientTel, uint256 valueCents );
	event FundsBurnt(address senderAccount, uint256 senderTel, uint256 valueCents);


	

	

    // constructor
	
	function pgkt01(
			  uint256 initialSupply,
			  string coinTokenName,
			  uint8 decimalUnits,
			  string coinTokenSymbol
			  
			  ) 
		{

		treasurer = msg.sender;

		// set up token parameters

		name = coinTokenName;                               // Set the name for display purposes
		symbol = coinTokenSymbol;                           // Set the symbol for display purposes
		decimals = decimalUnits;                            // Amount of decimals for display purposes


		
		// Distribute coins to initial holding accounts
		balanceOf[treasurer] = initialSupply;
		
		// Set  total supply

		totalPgkt = initialSupply;                        // Update total supply		
		
	}
/*
 * Request Account
 */

function requestAccount(uint256 _telNumber) {
	balanceOf[msg.sender] = 500;					// Put a starter balance in account cents
	balanceOf[treasurer] -= 500;					// deduct money from treasurer account
	accountList[msg.sender].telephoneNumber = _telNumber;
	accountList[msg.sender].live = true;
	AccountCreated(msg.sender, _telNumber);
}

function pay(address recipientAcc, uint256 amount) {
	// check enough funds
	if ( balanceOf[msg.sender] < amount) {
		revert();
	}
	// check recipient exists
	if (accountList[recipientAcc].live) {
		balanceOf[msg.sender] -= amount;
		balanceOf[recipientAcc] += amount;
		FundsSent(msg.sender, accountList[msg.sender].telephoneNumber,recipientAcc, accountList[recipientAcc].telephoneNumber,  amount );
	} else {
		revert();
	}
	
	
}


function buyKT( uint256 amount) {
	balanceOf[msg.sender] += amount;
	FundsBought(msg.sender, accountList[msg.sender].telephoneNumber, amount );
	totalPgkt +=	amount;
}

function sellKT( uint256 amount) {
	if ( balanceOf[msg.sender] < amount) {
		revert();
	}
	balanceOf[msg.sender] -= amount;
	totalPgkt -=	amount;
	FundsBurnt(msg.sender, accountList[msg.sender].telephoneNumber, amount);
}



// ERC20




function () {
	revert();
}

} // end contract 
