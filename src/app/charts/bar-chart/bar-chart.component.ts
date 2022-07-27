import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA:any[]=[
  {data:[65,59,45,45,34,55,35],label:'Q2 Sales'},
  {data:[20,49,55,65,34,55,35],label:'Q3 Sales'}
];

const SAMPLE_BARCHART_LABELS:string[]=[
  'w1','w2','w3','w4','w5','w6','w7'
];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

public barChartData:any[]=SAMPLE_BARCHART_DATA
public barChartLables:string[]=SAMPLE_BARCHART_LABELS
public barChartType='bar';
public barChartLegend=false;
public barChartOptions:any={
  scaleShowVeticaalLines:false,
  responsive:true
};

  ngOnInit(): void {
  }

}
