import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true, // This makes it a modern, standalone component
  imports: [CommonModule], // Imports common directives like *ngIf or *ngFor if you need them later
  templateUrl: './footer.html',
//   styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // Currently, your footer is static (HTML only), so no logic is needed here yet.
  // If you wanted to make the year dynamic, you could do this:
  
  currentYear: number = new Date().getFullYear();
}