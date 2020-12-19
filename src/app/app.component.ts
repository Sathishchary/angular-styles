import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  name = null;
  array = [1, "2", 6, 0.5, "6366"];

  ngOnInit(){
  this.name ??= 'Angular';
  }
}
