import { Component } from '@angular/core';
import { CounterComponent } from '../components/counter/counter.component';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent,CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = "Passed to the greeting component";

  keyUpHandler(event: KeyboardEvent) {
    console.log(`Key ${event.key} triggered`);
  }

}
