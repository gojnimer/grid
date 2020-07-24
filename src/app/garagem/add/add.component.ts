import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  carroForm: FormGroup = this.fb.group({
    marca: ['', [Validators.required]],
    nitro: ['', [Validators.required]],
    modelo: ['', [Validators.required]],
    cor: ['', [Validators.required]],
    roubado: ['', [Validators.required]],
    tracao: ['', [Validators.required]],
    hp: ['', [Validators.required]]
  });


  onSubmit() {
    console.log(this.carroForm);
    if (this.carroForm.invalid) {
      alert("formulário inválido");
      return;
    }

    this.http.post('http://localhost:3000/garagem', this.carroForm.value).subscribe(obj => {
      this.router.navigate(['..']);
    },
      error => console.log(error));

  }

  ngOnInit(): void {
  }

}
