import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Negocios digitales';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver){

  }
  ngAfterViewInit(){

    this.observer?.observe(['(max-width: 800px)'])?.subscribe((resp: any)=>{
      if(this.sidenav!=null && resp.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }else if(this.sidenav!=null && resp.matches){
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })
   
  }
}
