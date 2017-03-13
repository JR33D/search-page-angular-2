import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from './app.service';
import { Person } from './models/person';
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/search-page.html',
    providers: [ PersonService	]
})
export class AppComponent implements OnInit  {    
    @Input("firstName") firstName: string = '';
    @Input("lastName") lastName: string = '';
    allPeople: Array<Person>;
    
    constructor(private personService: PersonService) { }
    
    getAll() {
    	this.allPeople = this.personService.getAll();
    }
    
    ngOnInit(): void {
    	this.getAll();
    }
}
  