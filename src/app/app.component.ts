import { Component } from '@angular/core';

//component, html datasını yönettiğimiz yer
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind'
  user: string = "Fatih eren"
 
}
