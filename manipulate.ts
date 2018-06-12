
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { NavController} from 'ionic-angular';

	@Component({
	  selector: 'page-manipulate',
	  templateUrl: 'manipulate.html'
	})
	
	export class ManipulatePage { 
	
	public _manipulation :  any;
	public _manipulation2 : any;
	public _firstString : any;
	public _secondString : any;

	constructor(public viewCtrl: ViewController, public nav : NavController) { } 

	ConcatenationFunction() {
		let  firstString   = this._firstString ? this._firstString : "" ;
		let  secondString  = this._secondString ? this._secondString : "";
		let  finalString   = firstString + " " + secondString
		this._manipulation = finalString;
	}
	
	UppercaseFunction() {
		let  firstString   = this._firstString ? this._firstString : "" ;
		let  secondString  = this._secondString ? this._secondString : "";
		let  finalString   = firstString.toUpperCase() + " " + secondString.toUpperCase()
		this._manipulation = finalString;
	}
	
	LowercaseFunction() {
		let  firstString   = this._firstString ? this._firstString : "" ;
		let  secondString  = this._secondString ? this._secondString : "";
		let  finalString   = firstString.toLowerCase() + " " + secondString.toLowerCase()
		this._manipulation = finalString;
	}

	SwapFirstLastCharsFunction() {
		
		let  inputString    = this._firstString ? this._firstString : "" ;
		let  lengthOfString = inputString.length;	
		let  firstChar      = inputString.substring(0,1);
		let  middleChar     = inputString.substring(1, lengthOfString-1)
		let  lastChar       = inputString.substring(lengthOfString-1);
		let  finalString    = lastChar + middleChar + firstChar ;
		if(lengthOfString < 2){
			this._manipulation = inputString;
		}
		this._manipulation = finalString ;
	}

	LongestWordFunction() {
		let  firstString = this._firstString ? this._firstString : "" ;
		let  words       = firstString.split(' '); // Split array separated by a space.
		let  longestWord : string = "" ;
		let maxLength    : number = 0;
		
		for( var i=0; i< words.length;i++){ // Loop through each word in array
			if(maxLength < words[i].length){ // Loop runs if there is a non empty word
			   longestWord= words[i]; // Set longest equal to the string
			   maxLength=words[i].length; //Add the count to the next word
			}
			else{
				continue;
			}
		}
		this._manipulation = longestWord;
	}

	MakeListFunction() {
		let  firstString = this._firstString ? this._firstString : "" ;
		let  words       = firstString.split(' '); // Split array separated by a space.
		let  longestWord : string = "" ;
		let maxLength    : number = 0;
		
		for( var i=0; i< words.length;i++){ // Loop through each word in array
			if(maxLength < words[i].length){ // Loop runs if there is a non empty word
			   longestWord= words[i]; // Set longest equal to the string
			   maxLength=words[i].length; //Add the count to the next word
			}
			else{
				continue;
			}
		}
		this._manipulation = words;		
	}
	
	CheckEqualsFunction() {
		let  first     = this._firstString ? this._firstString : "" ;
		let  second    = this._secondString ? this._secondString : "";
		
		if(first === second){
			this._manipulation = "Equal:  " + true;
		}
		else{
			this._manipulation = false;
		}
	}

	GetInstantConcatenation() {
		let  firstString   = this._firstString ? this._firstString : "" ;
		let  secondString  = this._secondString ? this._secondString : "";
		let  finalString   = firstString + " " + secondString
		return finalString;
	}
	
	GetInstantUppercase() {
		let  firstString  = this._firstString ? this._firstString : "" ;
		let  secondString = this._secondString ? this._secondString : "";
		let  finalString  = firstString.toUpperCase() + " " + secondString.toUpperCase();
		return  finalString;
	}
	
	GetInstantLowercase() {
		let  firstString  = this._firstString ? this._firstString : "" ;
		let  secondString = this._secondString ? this._secondString : "";
		let  finalString  = firstString.toLowerCase() + " " + secondString.toLowerCase();
		return  finalString;
	}
	
	GetInstantSwapFirstLastChars() {
		
		let  inputString    = this._firstString ? this._firstString : "" ;
		let  lengthOfString = inputString.length;	
		let  firstChar      = inputString.substring(0,1);
		let  middleChar     = inputString.substring(1, lengthOfString-1)
		let  lastChar       = inputString.substring(lengthOfString-1);
		let  finalString    = lastChar + middleChar + firstChar ;
		if(lengthOfString < 2){
			return inputString;
		}
		return finalString ;
	}

	GetInstantMakeList() {
		let  firstString = this._firstString ? this._firstString : " " ;
		let  words       = firstString.split(' '); // Split array separated by a space.
		let  longestWord : string = " " ;		
		let maxLength    = 0;
		
		for( var i=0; i< words.length;i++){ // Loop through each word in array
			if(maxLength < words[i].length){ // Loop runs if there is a non empty word
			   longestWord= words[i]; // Set longest equal to the string
			   maxLength=words[i].length; //Add the count to the next word
			}
			else{
				continue;
			}
		}
		return words;		
	}

	GetInstantLongestWord() {
		let  firstString = this._firstString ? this._firstString : "" ;
		let  words       = firstString.split(' '); // Split array separated by a space.
		let  longestWord : string = "" ;
		let maxLength    = 0;
		
		for( var i=0; i< words.length;i++){ // Loop through each word in array
			if(maxLength < words[i].length){ // Loop runs if there is a non empty word
			   longestWord= words[i]; // Set longest equal to the string
			   maxLength=words[i].length; //Add the count to the next word   
			}
			else{
				continue;
			}
		}
		return longestWord +  " " + maxLength;
	}
	
	GetInstantCheckEquals() {
		let  first     = this._firstString ? this._firstString : "" ;
		let  second    = this._secondString ? this._secondString : "";
		let  isBoolean = true;
		
		if(first === second){
			return true;
		}
		else{return false;}
	}
	
	close(){
		this.viewCtrl.dismiss();
	}
}
