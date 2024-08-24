import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(
    private toastr : ToastrService
  ) { }

  showSuccess(message = '', title = 'Success!', options = {closeButton: true}) {
    this.toastr.success(message, title, options);
  }

  showError(message = '', title = 'Oops!', options = {closeButton: true}) {
    this.toastr.error(message, title, options);
  }

  showWarning(message = '', title = 'Alert!', options = {closeButton: true}) {
    this.toastr.warning(message, title, options);
  }

  showInfo(message = '') {
    this.toastr.info(message);
  }
}
