import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSnackBarModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  loading = false;

  constructor(private snackBar: MatSnackBar) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.loading = true;

      // Simulate sending delay
      setTimeout(() => {
        this.snackBar.open('✅ Message sent successfully!', 'Close', {
          duration: 3000,
          panelClass: 'success-snackbar'
        });
        this.loading = false;
        form.resetForm();
      }, 2000);
    } else {
      this.snackBar.open('❌ Please fill all fields correctly.', 'Close', {
        duration: 3000,
        panelClass: 'error-snackbar'
      });
    }
  }
}
