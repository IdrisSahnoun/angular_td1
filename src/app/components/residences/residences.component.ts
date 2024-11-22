import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/app/core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent implements OnInit{
  title : string = "Liste des résidances"
  residences : Residence[]= []
  hide: boolean = false;
  selectedResidence: Residence = new Residence();
  searchText:string='';
  ngOnInit() {
    this.residences =[
    {id:1,"name": "El fel","address":"Borj Cedria",
      "image":"../../assets/images/R2.jpg", status: "Disponible"},
      {id:2,"name": "El yasmine",
      "address":"Ezzahra","image":"../../assets/images/R2.jpg", status:
      "Disponible" },
      {id:3,"name": "El Arij",
      "address":"Rades","image":"../../assets/images/R3.jpg", status:
      "Vendu"},
      {id:4,"name": "El Anber","address":"inconnu",
      "image":"../../assets/images/R4.jpg", status: "En Construction"}
      ];
  
  }
  showAddress(residences:Residence){
    this.hide=true;
    this.selectedResidence=residences;
  }
  filterResidence(){
    return this.residences.filter((residence)=>{
      return residence.address.toLowerCase().includes(this.searchText.toLowerCase())
    })
  }
  listfavorites:Residence[]=[];
  addtofavorties(residence:Residence){
    let index = this.listfavorites.findIndex((r)=>r.id==residence.id);
    if(index==-1){
      this.listfavorites.push(residence);
    }
    else{
      this.listfavorites.splice(index,1);
    }
    console.log(this.listfavorites);
  }
  isfavorite(residence:Residence){
    return this.listfavorites.findIndex((r)=>r.id==residence.id)!=-1;
  }
}
