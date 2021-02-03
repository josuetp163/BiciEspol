import { Component, OnInit } from '@angular/core';
import { Puente } from '../../models/puente';
import  * as d3 from "d3";
import {datos} from "./datos";

@Component({
  selector: 'app-adm-estadistica',
  templateUrl: './adm-estadistica.component.html',
  styleUrls: ['./adm-estadistica.component.css']
})
export class AdmEstadisticaComponent implements OnInit {

  constructor() { 
  }
  

  ngOnInit(): void {
  
    this.fetchData();
    this.fetchDataBar();
    this.fetchDataHor();
    

    
  }
  
  



  private dataHor=[
{"Bicicleta":"112", "Numero":"4"},
{"Bicicleta":"114", "Numero":"3"},
{"Bicicleta":"113","Numero":"2"}
  ]

  private svg;
  private margin = 10;
  private width = 300;
  private height = 300;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors;

 
private svgBar;
private marginBar = 50;
private widthBar = 400 - (this.marginBar * 2);
private heightBar = 300 - (this.marginBar * 2);

private svgHor;
private marginHor = 50;
private widthHor = 400 - (this.marginHor * 2);
private heightHor = 300 - (this.marginHor * 2);


public  fetchData(){
  let datos=[];

   fetch(Puente.url + '/bicicletas/leerBicicleta')
  .then((resultado)=>{
      return resultado.json();
    })
    .then((json)=>{
      let cantidadDisp=0;
      let rotas=0;
        for(let bici of json){
          if(bici.estado=='Defectuosa'){
             rotas++;
              
          }else{
              cantidadDisp++;
          }
        }

        datos=[
          {"Estado":"Disponible", "Cantidad":cantidadDisp},
          {"Estado":"Defectuosa", "Cantidad":rotas},
          ]

          //create svg
          this.svg = d3.select("figure#pie")
          .append("svg")
          .attr("width", this.width)
          .attr("height", this.height)
          .append("g")
          .attr(
            "transform",
            "translate(" + this.width/2  + "," + this.height/2+ ")"
          );

          //create color
          this.colors = d3.scaleOrdinal()
  .domain(datos.map(d => d.Cantidad.toString()))
  .range(["#ff00ff", "#a5b8db"]);

  //DRAW CHART
   // Compute the position of each group on the pie:
   const pie = d3.pie<any>().value((d: any) => Number(d.Cantidad));

   // Build the pie chart
   this.svg
   .selectAll('pieces')
   .data(pie(datos))
   .enter()
   .append('path')
   .attr('d', d3.arc()
     .innerRadius(0)
     .outerRadius(this.radius)
   )
   .attr('fill', (d, i) => (this.colors(i)))
   .attr("stroke", "#121926")
   .style("stroke-width", "1px");
 
   // Add labels
   const labelLocation = d3.arc()
   .innerRadius(70)
   .outerRadius(this.radius);
 
   this.svg
   .selectAll('pieces')
   .data(pie(datos))
   .enter()
   .append('text')
   .text(d => d.data.Estado)
   .attr("transform", d => "translate(" + labelLocation.centroid(d)+ ")")
   .style("text-anchor", "middle")
   .style("font-size", 11);

    }).catch()
     

  }



  public  fetchDataBar(){
    let datos=[];
  
     fetch(Puente.url + '/bicicletas/leerBicicleta')
    .then((resultado)=>{
        return resultado.json();
      })
      .then((json)=>{
        let cantidadGar=0;
        let cantidadRec=0;
          for(let bici of json){
            if(bici.estacion=='1'){
               cantidadGar++;
                
            }else{
                cantidadRec++;
            }
          }
  
          datos=[
            {"Ubicacion":"Garita", "Cantidad":cantidadGar},
            {"Ubicacion":"Rectorado", "Cantidad":cantidadRec},
            ]
  
     //BARRAS
     this.svgBar = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.widthBar + (this.marginBar * 2))
    .attr("height", this.heightBar + (this.marginBar * 2))
    .append("g")
    .attr("transform", "translate(" + this.marginBar + "," + this.marginBar + ")");
  
  
    //drawBar
  
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.widthBar])
    .domain(datos.map(d => d.Ubicacion))
    .padding(0.2);
  
    // Draw the X-axis on the DOM
    this.svgBar.append("g")
    .attr("transform", "translate(0," + this.heightBar + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");
  
    // Create the Y-axis band scale
    const y = d3.scaleLinear()
    .domain([0, 12])
    .range([this.heightBar, 0]);
  
    // Draw the Y-axis on the DOM
    this.svgBar.append("g")
    .call(d3.axisLeft(y));
  
    // Create and fill the bars
    this.svgBar.selectAll("bars")
    .data(datos)
    .enter()
    .append("rect")
    .attr("x", d => x(d.Ubicacion))
    .attr("y", d => y(d.Cantidad))
    .attr("width", x.bandwidth())
    .attr("height", (d) => this.heightBar - y(d.Cantidad))
    .attr("fill", "#d04a35");
  
      }).catch()
       
  
    }

    public  fetchDataHor(){
      let datos=[];
      
      console.log("fetcha dataHor")
       fetch(Puente.url + '/mongo/showReportes')
      .then((resultado)=>{
          return resultado.json();
        })
        .then((json)=>{
          console.log("entra json")
          console.log(json)
          let  mapBicicletas=new Map();
          let arrBicis=[]
            for(let bici of json){
              if(arrBicis.includes(bici.codigoBici)){
                console.log("ya tiene: "+bici.codigoBici)
                 mapBicicletas.set(bici.codigoBici,mapBicicletas.get(bici.codigoBici)+1)
                  
              }else{
                arrBicis.push(bici.codigoBici)
                console.log("añadir: "+bici.codigoBici);
                  mapBicicletas.set(bici.codigoBici,1);
              }
            }
    
            datos=[]
            for(var [clave,valor] of mapBicicletas){
              console.log(clave,valor)
              datos.push({"Id":clave,"Cantidad":valor})
            
            }
    
              //create svg
              this.svgHor = d3.select("figure#barHor")
  .append("svg")
  .attr("width", this.widthHor + (this.marginHor * 2))
  .attr("height", this.heightHor + (this.marginHor * 2))
  .append("g")
  .attr("transform", "translate(" + this.marginHor + "," + this.marginHor + ")");

   // Create the X-axis band scale
   const x = d3.scaleBand()
   .range([0, this.widthHor])
   .domain(datos.map(d => d.Id))
   .padding(0.2);
 
   // Draw the X-axis on the DOM
   this.svgHor.append("g")
   .attr("transform", "translate(0," + this.heightHor + ")")
   .call(d3.axisBottom(x))
   .selectAll("text")
   .attr("transform", "translate(-10,0)rotate(-45)")
   .style("text-anchor", "end");
 
   // Create the Y-axis band scale
   const y = d3.scaleLinear()
   .domain([0, 12])
   .range([this.heightHor, 0]);
 
   // Draw the Y-axis on the DOM
   this.svgHor.append("g")
   .call(d3.axisLeft(y));
 
   // Create and fill the bars
   this.svgHor.selectAll("bars")
   .data(datos)
   .enter()
   .append("rect")
   .attr("x", d => x(d.Id))
   .attr("y", d => y(d.Cantidad))
   .attr("width", x.bandwidth())
   .attr("height", (d) => this.heightHor - y(d.Cantidad))
   .attr("fill", "#d04a35");
        }).catch()
         
    
      }
}




