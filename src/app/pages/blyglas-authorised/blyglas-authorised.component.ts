import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from 'src/app/components/contact/contact.component';

@Component({
  selector: 'app-blyglas-authorised',
  templateUrl: './blyglas-authorised.component.html',
  styleUrls: ['./blyglas-authorised.component.scss']
})
export class BlyglasAuthorisedComponent implements OnInit {

  text: string[] = [
    'Att spara de goda kvalitetsfönstren från tiden före 1970, med kärnved, täta årsringar och hög densitet och de bästa fönstren från 70-, 80- och 90-talen är rätt miljöval och kretsloppstänkande.',
    'Att återanvända klassiska träfönster är att bevara och återskapa fastighetens estetik/skönhet.',
    'Att återställa orginalfönstren är hantverkskunnande och kulturhistoria.',
    'Att träfönster är klimatsmart. De binder 1,65 milj. ton CO2 i Sverige och betyder låga växthusgasutsläpp. Små kolavtryck / Carbon Footprints/ betyder miljöhållbarhet och lång livscykel.',
    'Att kombinera fönsterrenovering med olika energiglasåtergärder.',
    'Auktoriserad fönsterfärg från Alcro, Beckers, Caparol, Wibo linoljefärg, Flügger, Jotun och Nordsjö.'
  ];
  actions: string[] = [
    'Ersätt innerglaset med ett 4 mm energiglas.',
    'Montera ett extra energiglas (3:e rutan) på innerbågens insida.',
    'Innerglaset ersätts med en 2-isolerglaskassett.',
    'Ny ytterbåge med 2-isolerglaskassett.',
    'Auktoriserat Fönsterenergisystem. Ytter + Innerbåge = en fönsterbåge.',
    'Inner- och ytterbåge skruvas ihop och förseglas. Kittfalsen fräses ur och de bägge rutorna ersätts med en ny 3-/2- isolerglaskassett.',
    'Ny fönsterbåge med 3-/2- isolerglaskassett.'
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openContact() {
    this.dialog.open(ContactComponent);
  }

}
