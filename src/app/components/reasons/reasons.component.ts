import { Component, OnInit } from '@angular/core';

interface IReasons {
  title: string;
  content: string;
}

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.scss']
})
export class ReasonsComponent implements OnInit {
  reasons: IReasons[] = [];

  constructor() {
    this.reasons = [
      {
        title: 'LIVSLÄNGDEN',
        content: 'Fönster med bågar och karmar av kvalitetsvirke, enkla glasrutor i bågarna och linoljebaserad färg och kitt håller i hundratals år med regelbundet underhåll.'
      },
      {
        title: 'SKÖNHETEN',
        content: 'Smäckra karmar, bågar och spröjsar, omsorgsfullt utformade snickerier och beslag, skiftande glas med största möjliga ljusinsläpp och genomtänkta in- och utvändiga omfattningar tillfredsställer våra mänskliga behov av skönhet.'
      },
      {
        title: 'PRIVATEKONOMIN',
        content: 'Renovering och energieffektivisering av befintliga fönster är lönsamt på kort och lång sikt.'
      },
      {
        title: 'VÄRDEUTVECKLINGEN',
        content: 'Välbevarade fönster är eftertraktade detaljer för husköpare och höjer värdet på bostaden.'
      },
      {
        title: 'SAMHÄLLSUTVECKLINGEN',
        content: 'Löpande underhållsåtgärder skapar arbetstillfällen på orten, småföretagande med skatteintäkter inom landet och minskade miljökostnader.'
      },
      {
        title: 'MILJÖN',
        content: 'Renovering, energiförbättring och långsiktigt underhåll av äldre träfönster innebär minsta möjliga resursförbrukning, minsta möjliga användning av miljöfarliga material och minsta möjliga utsläpp av växthusgaser.'
      },
      {
        title: 'INOMHUSKLIMATET',
        content: 'I hus med fungerande självdragssystem är de traditionella fönstren med sin vindtäta men inte lufttäta konstruktion en förutsättning för bra inomhusmiljö.'
      },
      {
        title: 'MATERIALEN',
        content: 'Traditionellt fönsterunderhåll använder kretsloppsvänliga material som trä och vegetabilisk olja till impregnering, färg och kitt. Fönsterhantverkare har ett etablerat återbruk av fönsterglas.'
      },
      {
        title: 'KULTURHISTORIEN',
        content: 'Bevarade äldre fönster är avgörande för upplevelsen av historiska miljöer och därför viktig för vår och kommande generationers möjlighet att kunna förstå kulturarvet.'
      },
      {
        title: 'HÄLSAN',
        content: 'Största möjliga ljusinsläpp får en genom smäckra fönsterbågar och poster, profilerade snickerier och skiftande glas som också hjälper till att sprida ljuset i rummet. '
      },
    ]
  }

  ngOnInit(): void {
  }

}
