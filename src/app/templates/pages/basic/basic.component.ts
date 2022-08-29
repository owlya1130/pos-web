import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  @Input() editable!: boolean;
  @Output() editableChange = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<void>();

  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) {  }

  ngOnInit(): void {

  }

  back() {
    this.location.back();
  }

  toEdit() {
    this.editable = true;
    this.editableChange.emit(this.editable);
  }

  toSave() {
    this.save.emit();
  }

}
