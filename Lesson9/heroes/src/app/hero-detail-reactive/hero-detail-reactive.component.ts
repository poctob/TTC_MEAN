import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
import { Hero } from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail-reactive',
  templateUrl: './hero-detail-reactive.component.html',
  styleUrls: ['./hero-detail-reactive.component.css']
})
export class HeroDetailReactiveComponent implements OnInit, OnChanges {
  
  heroForm: FormGroup;
  @Input () hero: Hero;
 

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) {
    this.createForm();
  }
  
  goBack(): void {
    this.location.back();
  }
  
  createForm() {
    this.heroForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), forbiddenNameValidator(/Ironman/i)]],
      superPower: ''
    });
  }
  
  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero, null, () => this.rebuildForm());
  }
  
 onSubmit() {
    this.hero = this.prepareSaveHero();
    this.heroService.updateHero(this.hero).subscribe(/* error handling */);
    this.rebuildForm();
  }

  prepareSaveHero(): Hero {
    const formModel = this.heroForm.value;
   
   const saveHero: Hero = {
      _id: this.hero._id,
      name: formModel.name as string
    };
    return saveHero;
  }
    
    
  ngOnInit() {
     this.getHero();
  }
  
  ngOnChanges(){
    this.rebuildForm();
  }
  
  rebuildForm() {
    this.heroForm.reset({
      name: this.hero.name
    });
  }

}
