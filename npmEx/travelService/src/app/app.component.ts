import { Component } from '@angular/core';
import { NavigationLinks } from './navigation-links';

// @Component is a decorator to tell that AppComponent is a component class and not module class
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //if the template has less than 3 lines u can use inline template which is enclosed within back tick
  styleUrls: ['./app.component.css']
})

// properties are defined in this component class
// property binding happens from the component to the template
export class AppComponent {
  title = 'travelService';
  subHeading = 'Chennai';

 // links: string[] = ['home','catalog','payment','contact']
  links : NavigationLinks[] = [
  {text:'Home', link:'/search'},
  {text:'Catalog', link:'/show'},
  // {text:'Payment', link:'pmt.html'},
  // {text:'Contact', link:'contact.html'}
];
}
