import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadingMode: boolean = true 
  title = 'crocobet';

  togglePreloader(isLoading: boolean) {
    this.loadingMode = isLoading
  }
}
