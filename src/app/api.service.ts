import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {
    instance = 'https://jsonplaceholder.typicode.com/'

    constructor(private http: HttpClient ) { } 

    async getUsers() { 
        const response = await fetch(`${this.instance}users`);
        const json = await response.json();
        return json;
    }

    async getUser(userId: number) {

        const response = await fetch(`${this.instance}users/${userId}`);
        const json = await response.json();
        
        return json;
    }

    async getUserPosts(userId: number) {
        const response = await fetch(`${this.instance}posts?userId=${userId}`);
        const json = await response.json();
        return json;
    }

    async getPostComents(postId: number) {
        const response = await fetch(`${this.instance}comments?postId=${postId}`);
        const json = await response.json();
        return json;
    }
}
