import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tessera-socio',
  templateUrl: './tessera-socio.component.html',
  styleUrls: ['./tessera-socio.component.scss']
})
export class TesseraSocioComponent {

  qr: string | null;

  constructor(
    private route: ActivatedRoute, 
  ) {
    this.qr = null;
  }

  ngOnInit(): void {
    this.qr = '';
    this.route.params.subscribe(p => {
      this.qr = p['qr'];
    });
  }
  
}
