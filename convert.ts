
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { NavController} from 'ionic-angular';

	@Component({
	  selector: 'page-convert',
	  templateUrl: 'Convert.html'
	})
	
	export class ConvertPage { 
	
	public _solution    : any;
	public _firstNumber : any;

	constructor(public viewCtrl: ViewController, public nav : NavController) { } 

	ConvertCelsiusFunction() {
		let  celsius    = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  kelvin     = celsius + 273.15;
		let  fahrenheit = celsius * 1.8 + 32;
		let  conversion = "Fahrenheit: " + fahrenheit.toFixed(1) + "°" + " "  + "Kelvin: " + kelvin.toFixed(1) + "°"  ;
		this._solution  = conversion ;
	}
	
	ConvertFahrenheitFunction() {
		let  fahrenheit = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  divide     = 5/9;
		let  celsius    = (fahrenheit - 32) * divide ;
		let  kelvin     = (fahrenheit + 459.67) * divide;
		let  conversion = "Celsius: " + celsius.toFixed(1) + "°" + " "  + "Kelvin: " + kelvin.toFixed(1) + "°"  ;
		this._solution  = conversion;
	}
	
	ConvertKelvinFunction() {
		let  kelvin = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  divide     = 9/5;
		let  celsius    = kelvin - 273.15 ;
		let  fahrenheit    = (kelvin * divide ) - 459.67;
		let  conversion = "Celsius: " + celsius.toFixed(1) + "°" + " "  + "Fahrenheit: " + fahrenheit.toFixed(1) + "°"  ;
		this._solution  = conversion;
	}

	
	GetInstantConvertCelsius() {
		let  celsius    = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  kelvin     = celsius + 273.15;
		let  fahrenheit = celsius * 1.8 + 32;
		let  conversion = "Fahrenheit: " + fahrenheit.toFixed(1) + "°" + " "  + "Kelvin: " + kelvin.toFixed(1) + "°"  ;
		return conversion ;
	}

	GetInstantConvertFahrenheit() {
		let  fahrenheit = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  divide     = 5/9;
		let  celsius    = (fahrenheit - 32) * divide ;
		let  kelvin     = (fahrenheit + 459.67) * divide;
		let  conversion = "Celsius: " + celsius.toFixed(1) + "°" + " "  + "Kelvin: " + kelvin.toFixed(1) + "°"  ;
		return conversion;
	}
	
	GetInstantConvertKelvin() {
		let  kelvin = this._firstNumber ? parseFloat(this._firstNumber) : 0 ;
		let  divide     = 9/5 ;
		let  celsius    = kelvin - 273.15 ;
		let  fahrenheit    = (kelvin * divide ) - 459.67;
		let  conversion = "Celsius: " + celsius.toFixed(1) + "°" + " "  + "Fahrenheit: " + fahrenheit.toFixed(1) + "°"  ;
		return conversion;
	}

	close(){
		this.viewCtrl.dismiss();
	} 
}
