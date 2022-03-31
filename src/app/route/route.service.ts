import { Injectable } from "@angular/core";

@Injectable()
export class RouteService {

    constructor() { }

    getUserPath(userId: number) {
        return "/users/" + userId;
    }

    getUserPostsPath(userId: number) {
        return "/users/" + userId + "/posts";
    }

    getPostComentsPath(postId: number) {
        return "/posts/" + postId + "/coments"
    }
    
}
