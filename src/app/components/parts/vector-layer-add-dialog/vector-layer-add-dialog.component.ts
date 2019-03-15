import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-vector-layer-add-dialog',
  templateUrl: './vector-layer-add-dialog.component.html',
  styleUrls: ['./vector-layer-add-dialog.component.scss']
})
export class VectorLayerAddDialogComponent implements OnInit {

  formData = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(
    public dialogRef: MatDialogRef<VectorLayerAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.formData.value);
  }

}
