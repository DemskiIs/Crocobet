import { Injectable } from "@angular/core";

@Injectable()
export class AppLoadingService {
    loading= false

    constructor() {}

  togglePreloader(mode: boolean) {
    this.loading = mode
  }
}
