import { Component, OnInit } from '@angular/core';
import { EachContent } from '../Interfaces/interfaces';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent{
  titleColor: string = 'black'
  eachContents: EachContent[] =  [
    {
      title: 'Some Title one',
      content: 'The Mayo Clinic reported that 905 Midwest staffers were diagnosed with COVID-19 in the last two weeks, according to spokesperson Kelley Luckstein. The medical facility has 55,000 employees spread across hospitals and clinics in Wisconsin and Minnesota.',
      color: 'blue',
      select: false
    },
    {
      title: 'Some Title one',
      content: 'The Mayo Clinic reported that 905 Midwest staffers were diagnosed with COVID-19 in the last two weeks, according to spokesperson Kelley Luckstein. The medical facility has 55,000 employees spread across hospitals and clinics in Wisconsin and Minnesota.',
      color: 'black',
      select: false
    },
    {
      title: 'Some Title one',
      content: 'The Mayo Clinic reported that 905 Midwest staffers were diagnosed with COVID-19 in the last two weeks, according to spokesperson Kelley Luckstein. The medical facility has 55,000 employees spread across hospitals and clinics in Wisconsin and Minnesota.',
      color: 'red',
      select: false
    },
    {
      title: 'Some Title one',
      content: 'The Mayo Clinic reported that 905 Midwest staffers were diagnosed with COVID-19 in the last two weeks, according to spokesperson Kelley Luckstein. The medical facility has 55,000 employees spread across hospitals and clinics in Wisconsin and Minnesota.',
      color: 'green',
      select: false
    }
  ]

  changeColor(color: string){
    this.titleColor = color;
    this.eachContents.forEach((ele)=>{
      if(ele.color === this.titleColor){
        ele.select = true;
      }
      else{
        ele.select = false;
      }
    })
    console.log(color);
  }
}
