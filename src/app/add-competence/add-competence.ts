import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-add-competence',
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './add-competence.html',
  styleUrl: './add-competence.css'
})
export class AddCompetence {
  competence = {
    nom: '',
    description: '',
    sousCompetences: [] as string[]
  };

  sousCompetenceTemp = '';

  ajouterSousCompetence() {
    const valeur = this.sousCompetenceTemp.trim();
    if (valeur) {
      this.competence.sousCompetences.push(valeur);
      this.sousCompetenceTemp = '';
    }
  }

  supprimerSousCompetence(index: number) {
    this.competence.sousCompetences.splice(index, 1);
  }

  enregistrerCompetence() {
    console.log('✅ Compétence à enregistrer :', this.competence);

  }
}
