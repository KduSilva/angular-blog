import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  title = 'Angular 2025: Novidades e Atualizações';

  sections = [
    {
      heading: '1. Lançamentos e Atualizações Recentes',
      content:'Angular 2025: O que há de novo? Destaque as melhorias de performance e novas funcionalidades introduzidas nas versões mais recentes. Fale sobre a adoção de Signals (introduzidos no Angular 16) como uma alternativa mais eficiente ao Change Detection. Comente sobre a integração aprimorada com Web Components e suporte a bibliotecas modernas.'
    },
    {
      heading:'2. Angular e o Futuro do Desenvolvimento Web',
      content:'Explique como o Angular continua sendo uma escolha sólida para aplicações corporativas devido à sua robustez e suporte de longo prazo. Fale sobre a evolução do Angular Standalone Components, que simplifica a criação de componentes sem a necessidade de módulos.'
    },
    {
      heading:'3. Ferramentas e Ecossistema',
      content:'Destaque as melhorias na CLI, como suporte a bundling mais eficiente e ferramentas de análise de performance. O Angular Material e o CDK continuam a facilitar a criação de componentes personalizados.'
    },
    {
      heading:'4. Casos de Uso e Benefícios',
      content:'Fale sobre a escalabilidade do Angular para grandes projetos. Destaque o suporte contínuo do Google e a grande comunidade de desenvolvedores. Explique como o Angular é ideal para aplicações que exigem alta performance e manutenção a longo prazo.'
    },
    {
      heading:'5. Integração com Tecnologias Modernas',
      content:'Comente sobre como o Angular pode ser integrado com APIs de IA, como o OpenAI, para criar aplicações inteligentes. Fale sobre o suporte crescente para WebAssembly e como ele pode ser usado em conjunto com Angular para melhorar a performance.'
    },

  ]

  constructor(private route: ActivatedRoute ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => console.log(value.get('Id')) // id é o parâmetro da rota
    )
  }

}
