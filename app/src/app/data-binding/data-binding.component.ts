import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for [(ngModel)]

@Component({
  selector: 'app-data-binding',
  standalone: true, // Mark as standalone
  imports: [FormsModule], // Import FormsModule for standalone usage
  templateUrl: './data-binding.component.html', // Link to the HTML template
})
export class DataBindingComponent {
  Name: string = ''; // Define the property for binding

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.Name = input.value; // Update the Name property dynamically
  }

  onClick(): void {
    alert(`Submitted: ${this.Name}`); // Display the Name in an alert
  }
}
