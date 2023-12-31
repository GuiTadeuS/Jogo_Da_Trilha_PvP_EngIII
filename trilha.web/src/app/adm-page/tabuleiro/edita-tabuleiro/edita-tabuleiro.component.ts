import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edita-tabuleiro',
  templateUrl: './edita-tabuleiro.component.html',
  styleUrls: ['../../adm-page.component.css']
})
export class EditaTabuleiroComponent implements OnInit {
  tabuleiro: any = {}

  constructor(
    private http: HttpClient,
    private ngZone: NgZone,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.consultaTabuleiro(this.route.snapshot.paramMap.get('id'))
  }

  consultaTabuleiro(id: any) {
    this.http.get(`http://15.229.11.82:90/tabuleiro/${id}`, { headers: { "Content-Type": 'application/json' } })
      .subscribe(response => {
        this.tabuleiro = response
      })
  }

  editaTabuleiro(tabuleiro: any) {
    this.http.put(`http://15.229.11.82:90/tabuleiro/${this.tabuleiro._id}`, tabuleiro, { headers: { "Content-Type": 'application/json' } })
      .subscribe(response => {
        this.ngZone.run(() => this.router.navigateByUrl('/tabuleiros'));
      })
  }
}
