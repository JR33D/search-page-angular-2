import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person';
@Component({
    moduleId: module.id,
    selector: 'person-list',
    templateUrl: '../templates/search-page.html',
    providers: [ PersonService ]
})
export class PersonListComponent implements OnInit  {    
    @Input("searchFirstName") searchFirstName: string = '';
    @Input("searchLastName") searchLastName: string = '';    
    @Input("searchPhoneNumber") searchPhoneNumber: string = '';
    allPeople: Array<Person>;
    
    constructor(private personService: PersonService) { }
    
    getAll() {
    	this.allPeople = this.personService.getAll();
    }
    
    ngOnInit(): void {
    	this.getAll();
    }
    
    search() {
        if (this.searchFirstName !== '' && this.searchLastName !== '' && this.searchPhoneNumber !== '') {
            
        
            
        }
    }
}
  