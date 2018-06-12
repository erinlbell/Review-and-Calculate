
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { NavController} from 'ionic-angular';

	@Component({
	  selector: 'page-calculate',
	  templateUrl: 'calculate.html'
	})
	
	export class CalculatePage { 
	
	public _solution : any;
	public _solution2 : any;
	public _firstNumber : any;
	public _secondNumber : any;

	constructor(public viewCtrl: ViewController, public nav : NavController) { } 

	
	
	// Private Functions
	private CallAddition (first, second) : number {
		let first    = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let second   = this._secondNumber ? parseFloat(this._secondNumber) : 0;
		let solution = first + second;
		return solution ;
	}
	
	private CallSubtraction (first, second) : number {
		let first    = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let second   = this._secondNumber ? parseFloat(this._secondNumber) : 0;
		let solution = first - second;
		return solution ;
	}
	
	private CallMultiplication (first, second) : number {
		let first    = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let second   = this._secondNumber ? parseFloat(this._secondNumber) : 0;
		let solution = first * second;
		return solution ;
	}
	
	private CallDivision (first, second) : number {
		let first    = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let second   = this._secondNumber ? parseFloat(this._secondNumber) : 0;
		let solution = first / second;
		return solution ;
	}
	
	private CallAbsoluteValue (first) : number {
		let first    = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;	
		let solution = Math.abs(first);
		return solution ;
	}
	
	private CallAbsoluteValue2 (second) : number {
		let second   = this._secondNumber ? parseFloat(this._secondNumber) : 0 ;	
		let solution = Math.abs(second);
		return solution ;
	}
	
	private CallSquare (first) : number {
		let first    = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;	
		let solution = first * first;
		return solution ;
	}
	
	
	
	// Worker Functions
	AdditionFunction () {
		let  first        = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  second       = this._secondNumber ? parseFloat(this._secondNumber) : 0;
		this._solution    = this.CallAddition(first, second) ;
	}
	
	SubtractionFunction () {
		let  first        = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  second       = this._secondNumber ? parseFloat(this._secondNumber) : 0;
		this._solution    = this.CallSubtraction(first, second) ;
	}

	MultiplicationFunction () {
		let  first       = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  second      = this._secondNumber ? parseFloat(this._secondNumber) : 0;
		this._solution   = this.CallMultiplication(first,second) ;
	}

	DivisionFunction () {
		let  first      = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  second     = this._secondNumber ? parseFloat(this._secondNumber) : 0;
		this._solution  = this.CallDivision(first,second) ;
	}

	AbsoluteValueFunction() {
		let  value     = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		this._solution = this.CallAbsoluteValue(value);
	}

	AbsoluteValue2Function() {
		let  value      = this._secondNumber ? parseFloat(this._secondNumber) : 0 ;
		this._solution2 = this.CallAbsoluteValue2(value);
	}
	
	TripleAbsFunction(){
		let  first     = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  second    = this._secondNumber ? parseFloat(this._secondNumber) : 0;
		let  minus     = this.CallSubtraction(first,second);
		let  doubleNum = 3 * minus;
		this._solution = doubleNum;
	}
	
	TripleSumFunction () {	
		let  first     = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  second    = this._secondNumber ? parseFloat(this._secondNumber) : 0;
		let  sum       = this.CallAddition(first, second);
		let  mult      =  3 * sum;
		this._solution = mult;
	}

	SumOfDigitsFunction() {
		
		
		console.log( "this._firstNumber = " + this._firstNumber);
		
		
		let  solution = 0;
		let  first    = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  isNegative = (first < 0 ) ? true : false;
		
		console.log();
		let i = 0;
		while(first != 0) {
			solution += first % 10;
			first = Math.floor(first / 10);
			
			
			console.log('first = ' + first);
			console.log('solution= ' + solution);
			console.log();
			
			
			i++;
			
			if (i > 5){
				break;
			}
			
		}	
		this._solution=solution;

		/**
		let  solution = 0;
		let  wholeNumber    = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  isNegative = (wholeNumber < 0 ) ? true : false;
		
		while(wholeNumber != 0)
		{
			
		}
		
		
			let currentDigit = 
			
			*/
			
	}

	SumOfDigits2Function() {
		let  solution = 0;
		let  second   = this._secondNumber ? parseFloat(this._secondNumber) : 0 ;

		while(second > 0) {
			solution += second % 10;
			second = Math.floor(second / 10);
		}	
		this._solution2=solution;
	}

	

	SquareFunction() {
		let  value     = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		this._solution = this.CallSquare(value);	
	}

	Square2Function() {
		let  value = this._secondNumber ? parseFloat(this._secondNumber) : 0 ;
		let  total = value * value;
		this._solution2 = total;	
	}


	
	
	// Instant Functions
	GetInstantAddition() {
		let  firstNumber  = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  secondNumber = this._secondNumber ? parseFloat(this._secondNumber) : 0;
		return firstNumber + secondNumber ;
	}

	GetInstantSubtraction() {
		let  firstNumber  = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  secondNumber = this._secondNumber ? parseFloat(this._secondNumber) : 0;
		return firstNumber - secondNumber ;
	}

	GetInstantMultiplication() {
		let  firstNumber  = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  secondNumber = this._secondNumber ? parseFloat(this._secondNumber) : 0;
		return firstNumber * secondNumber ;
	}

	GetInstantDivision() {
		let  firstNumber  = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  secondNumber = this._secondNumber ? parseFloat(this._secondNumber) : 0;
		return firstNumber / secondNumber ;
	}
	/**
	GetInstantSumOfDigits1() {
		let  solution = this._solution ? parseFloat(this._solution) : 0;
		let  first    = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;

		while(first > 0) {
			solution += first % 10;
			first = Math.floor(first / 10);
		}
	return solution;	
	}

	GetInstantSumOfDigits2() {
		let  solution = this._solution ? parseFloat(this._solution) : 0;
		let  second   = this._secondNumber ? parseFloat(this._secondNumber) : 0;
		
		while(second > 0) {
			solution += second % 10;
			second = Math.floor(second / 10);
			
		}
		return solution;
	}
	*/
	GetInstantAbsoluteValue1() {
		let  value = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  total = Math.abs(value);
		return total;	
	}

	GetInstantAbsoluteValue2() {
		let  value = this._secondNumber ? parseFloat(this._secondNumber) : 0 ;
		let  total = Math.abs(value);
		return total;		
	}

	GetInstantTripleAbs(){
		let  total  : number = 0;
		let  first  = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  second = this._secondNumber ? parseFloat(this._secondNumber) : 0;
		
		total = 3 * Math.abs(first-second);
		return total;
	}

	GetInstantSquare1() {
		let  value = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  total = value * value;
		return total;	
	}

	GetInstantSquare2() {
		let  value = this._secondNumber ? parseFloat(this._secondNumber) : 0 ;
		let  total = value * value;
		return total;	
	}

	close(){
		this.viewCtrl.dismiss();
	}	  
}
