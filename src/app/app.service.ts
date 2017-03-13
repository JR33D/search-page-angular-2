import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Person } from './models/person';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonService {
    allPeople: Person[] = [
        { "id": 1, "firstName": "Bruce", "lastName": "Wayne", "phoneNumber": "444-622-28626" },
        { "id": 2, "firstName": "Joe", "lastName": "Smith", "phoneNumber": "111-222-3333" },
        { "id": 3, "firstName": "Stephen", "lastName": "Wallace", "phoneNumber": "890-180-6395" },
        { "id": 4, "firstName": "Sharon", "lastName": "Richards", "phoneNumber": "907-625-3698" },
        { "id": 5, "firstName": "Michael", "lastName": "West", "phoneNumber": "273-225-5564" },
        { "id": 6, "firstName": "Jesse", "lastName": "Bryant", "phoneNumber": "666-837-2735" },
        { "id": 7, "firstName": "Diane", "lastName": "Mitchell", "phoneNumber": "118-869-8995" },
        { "id": 8, "firstName": "Katherine", "lastName": "Cooper", "phoneNumber": "677-659-1407" },
        { "id": 9, "firstName": "Dennis", "lastName": "Fowler", "phoneNumber": "309-583-0545" },
        { "id": 10, "firstName": "Ryan", "lastName": "Taylor", "phoneNumber": "341-875-5301" },
        { "id": 11, "firstName": "Michelle", "lastName": "Murphy", "phoneNumber": "975-174-8532" },
        { "id": 12, "firstName": "Randy", "lastName": "Gray", "phoneNumber": "584-966-4982" },
        { "id": 13, "firstName": "Harold", "lastName": "Clark", "phoneNumber": "688-663-8908" },
        { "id": 14, "firstName": "Jean", "lastName": "Ramirez", "phoneNumber": "487-592-2829" },
        { "id": 15, "firstName": "Bonnie", "lastName": "George", "phoneNumber": "383-122-0082" }];
    constructor(private http: Http) { }

    // This is intended as a sample of how to use and call http services.
    public getAll() {
        return this.allPeople;
    }
}