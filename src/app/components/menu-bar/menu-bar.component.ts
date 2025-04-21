import { Component, Host, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  standalone: false,
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  OnWindowScroll(){
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollPosition > 50; //Define o limite para ativar a classe
  }
}
