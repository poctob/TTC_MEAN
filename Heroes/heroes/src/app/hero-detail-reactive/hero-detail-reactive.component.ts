import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail-reactive',
  templateUrl: './hero-detail-reactive.component.html',
  styleUrls: ['./hero-detail-reactive.component.css']
})
export class HeroDetailReactiveComponent implements OnInit {

  heroForm: FormGroup;
  
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }
  
  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required ],
    });
  }

  ngOnInit() {
  }

}
