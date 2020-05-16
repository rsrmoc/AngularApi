import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos: Array<any>;

  // contatos = new Contatos();

 /*
  contatos=[
    {id:"1", nome: "Renaot", email: "sasdas@dfdsf"},
    {id:"2", nome: "Rpoçl", email: "aasdasdas"}
  ];
 */
 

  constructor(private ContatoService: ContatoService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.ContatoService.listar().subscribe(dados => this.contatos = dados);
  }

}
