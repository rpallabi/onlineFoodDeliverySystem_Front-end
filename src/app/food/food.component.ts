import { Component,OnInit} from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
 
})
export class FoodComponent implements OnInit{
   
    newFood: Food = new Food();

    selectedImage!: File;
    admin!: string | null;
    //selectedFile: any;
    
constructor(private foodService : FoodService, private router:Router,private route: ActivatedRoute){}

onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }
ngOnInit():void {
    this.route.paramMap.subscribe(params => {
        this.admin = params.get('adminId');
        console.log('AdminID in FoodComponent:', this.admin);
    }); 
}


saveFood(){
  this.foodService.saveFood(this.newFood,this.selectedImage).subscribe({
    next:(data)=>{
    console.log(data);
    this.gotoFoodDetails();
    alert("Food successfully upload")},
    error: (e)=>{
      console.log(e);
    }
    
  });
}

gotoFoodDetails(){
    this.router.navigate(['/adminlogin'])
    }
    
    ngSubmit(){
      console.log(this.newFood);
      this.saveFood();
      }
}  

