import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title, {
      timeOut: 3000,
      closeButton: true,
      positionClass: 'toast-top-right',
    });
  }

  showError(message: string, title: string) {
    this.toastr.error(message, title, {
      timeOut: 3000,
      closeButton: true,
      positionClass: 'toast-top-right',
    });
  }

  showInfo(message: string, title: string) {
    this.toastr.info(message, title, {
      timeOut: 3000,
      closeButton: true,
      positionClass: 'toast-top-right',
    });
  }

  showWarning(message: string, title: string) {
    this.toastr.warning(message, title, {
      timeOut: 3000,
      closeButton: true,
      positionClass: 'toast-top-right',
    });
  }
}
