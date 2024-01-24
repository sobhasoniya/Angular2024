import { Component, OnInit } from '@angular/core';
import { PPharmacistViewModel } from 'src/app/shared/p-pharmacist-view-model';
import { PPharmacistViewModelService } from 'src/app/shared/p-pharmacist-view-model.service'
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-patient-vm-list',
  templateUrl: './patient-vm-list.component.html',
  styleUrls: ['./patient-vm-list.component.scss']
})
export class PatientVMListComponent implements OnInit {
  filter:string;

  patients: PPharmacistViewModel[];
  viewClicked: boolean = false;
  listPatientRecord = [];
  unitPrice: number;
  totalAmount: number;
  gstRate: number;
  billContent:string;
  dialog:any;


  constructor(
    public PPharmacistViewModelService: PPharmacistViewModelService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.PPharmacistViewModelService.BindListpatients();
  }

  getViewPatient(patient): void {
    this.viewClicked = true;
    this.listPatientRecord.push(patient);
  }

  closePrintPopup(): void {
    this.viewClicked = false;
    //this.listPatientRecord = [];
    this.dialog.nativeElement.close();
     //alert("hai")


  }

  goToHome(): void {
    this.router.navigate(['p-pharmacist/home']);
  }

  onClickBack(): void {
    this.viewClicked = false;
    this.listPatientRecord = [];
  }

  getCurrentDate(): string {
    const currentDate = new Date();
    return currentDate.toLocaleDateString();
  }

  // printPharmacyBill() {
  //   this.showPrintPreview(this.billContent);
  // }



  private showPrintPreview(billContent: string): void {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write('<html><head><title>Print Bill</title></head><body>');
      printWindow.document.write(billContent);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    } else {
      alert('Error: Unable to open the print preview window. Please ensure your browser allows pop-ups.');
    }
  }

  generateBillContent(): string {
    let billContent = '<html><head><title>Pharmacy Bill</title></head><body>';
    billContent += '<div>';
    billContent += '<h4>Patient Detail</h4>';
    billContent += `<p>Patient Name: ${this.listPatientRecord[0]?.PatientName}</p>`;
    billContent += `<p>Date: ${this.getCurrentDate()}</p>`;
    billContent += '</div>';
    billContent += '<div>';
    billContent += '<table class="table table-striped table-hover">';
    // ... add other bill details to billContent ...
    billContent += '</table>';
    billContent += '</div>';
    billContent += '</body></html>';

    return billContent;
  }

  // Function to open print preview window
  printPharmacyBill(): void {
    const billContent = this.generateBillContent();

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(billContent);
      printWindow.document.close();
      printWindow.print();
    } else {
      alert('Error: Unable to open the print preview window. Please ensure your browser allows pop-ups.');
    }
  }
}

