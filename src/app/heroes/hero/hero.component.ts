import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHerorDescription():string {
    return `${ this.name } - ${ this.age }`
  }

  changeHeroe():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 43
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }
}
