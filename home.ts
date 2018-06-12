import { Component } from "@angular/core";
import { NavController, ModalController } from 'ionic-angular';
import { AddReviewPage } from '../add-review/add-review';
import { CalculatePage } from '../calculate/calculate';
import { ManipulatePage } from '../manipulate/manipulate';
import { ConvertPage } from '../convert/convert';
import { MenuPage } from '../menu/menu';
import { Reviews } from '../../providers/reviews/reviews';
import { ComputationsProvider } from '../../providers/computations/computations';

import 'rxjs/add/operator/map';

	@Component({
	  selector: 'page-home',
	  templateUrl: 'home.html'
	})
	
	export class HomePage {

	public reviews: any[] = []; 
	constructor(public nav: NavController, public reviewService: Reviews, public modalCtrl: ModalController) { }

    ionViewDidLoad(){
		this.reviewService.getReviews().then((data) => {
		  console.log(data);
		  this.reviews = data;
		});
    } 
  
    addReview() {
		let modal = this.modalCtrl.create(AddReviewPage);
		modal.onDidDismiss(review => {
		 if(review){
			 this.reviewService.createReview(review);
			 this.reviews.push(review);
			 alert('Review successfully added.');
			 console.log(review);
       		 }
		 });
	 modal.present();
	 }
 
    deleteReview(review){
      //Remove locally
		  let index = this.reviews.indexOf(review);
		  if(index > -1){
			this.reviews.splice(index, 1);
		  }   
		  //Remove from database
		this.reviewService.deleteReview(review._id);
		alert('Review removed successfully.');
    }

	calculate(){	
		this.nav.push(CalculatePage);
	}
	
	manipulate(){	
		this.nav.push(ManipulatePage);
	}
	
	convert(){	
		this.nav.push(ConvertPage);
	}
}
