export interface IIndexable {
  [key: string]: any
}

export const resources = {
  fw1_q: {
    img: '/assets/fire_fighters.jpg',
    msg: 'Mit welchem Gerät schneiden wir ein Fahrzeug (Auto, LKW) auf?'
  },
  fw1_hydSchere: {
    img: '/assets/FW_Foto1-1.jpg',
    msg: 'Richtig, mit der hydraulischen Schere. Mit dieser Schere können wir einen Schneidedruck von bis zu 40 Tonnen erzeugen. In Kombination mit dem hydraulischen Spreitzer gibt es kein Fahrzeug, das wir so nicht innert kürzester Zeit öffnen können.',
    rightAnswer: true
  },
  fw1_rettungssaege: {
    img: '/assets/FW_Foto1-2.jpg',
    msg: 'Das ist eine Rettungssäge. Die Rettungssäge ist einer Kettensäge sehr ähnlich, hat aber eine spezielle Kette mit Diamant-Schneidezähnen. So können wir auch Glas, Blech und andere Materialien aufschneiden, ohne dass die Kette Stumpf wird.'
  },
  fw1_kettensaege: {
    img: '/assets/FW_Foto1-3.jpg',
    msg: 'Das ist eine Kettensäge. Eine Kettensäge kann nur Holz schneiden. Das macht sie sehr schnell und effizient. So ist auch der dickste Baumstamm in kurzer Zeit zerstückelt.'
  },
  fw2_q: {
    img: '/assets/fire_fighters.jpg',
    msg: 'Welcher Gegenstand ist gemacht, um ihn über den Boden zu ziehen?'
  },
  fw2_schleifkorbtrage: {
    img: '/assets/FW_Foto2-1.jpg',
    msg: 'Richtig, die Schleifkorbtrage. In dieser Wanne können wir Personen oder auch Material transportieren. Natürlich können wir die Schleifkorbtrage auch tragen oder sogar mit der Drehleiter oder einem Kran in die Luft heben. Für die Autodrehleiter (ADL) haben wir auch eine Halterung, um die Schleifkorbtrage am Korb zu fixieren. So können wir den Rettungsdienst unterstützen, um eine Person, die liegend befördert werden muss, auf den Boden zu transportieren. Zum Beispiel machen wir das, wenn die Person vom 2. Stock eines Hauses zum Rettungswagen muss.',
    rightAnswer: true
  },
  fw2_vorschlaghammer: {
    img: '/assets/FW_Foto2-2.jpg',
    msg: 'Das ist ein Vorschlaghammer. Zwar ist er für grobe Arbeit gemacht, etwa um Pfähle einzuschlagen oder etwas zu zerbrechen.Aber diesen Tragen wir zum Einsatzort.'
  },
  fw2_elektrosatellit: {
    img: '/assets/FW_Foto2-3.jpg',
    msg: 'Das ist der Elektrosatellit. Am Elektrosatellit können wir viele verschiedene Geräte mit unterschiedlichen Steckertypen einstecken. Diesen Satelitten tragen wir natürlich und ziehen ihn nicht über den Boden.'
  },
  sp1_q: {
    img: '/assets/Stapo_Frontblitzer.png',
    msg: 'Wo befinden sich die Frontblitzer am Streifenwagen?'
  },
  sp1_frontblitzer: {
    img: '/assets/Stapo_Frontblitzer.png',
    msg: 'Richtig, die Frontblitzer sind bei diesem Fahrzeugtyp hinter dem Kühlergrill montiert. So werden wir bei Blaulicht-Fahrten noch besser gesehen.',
    rightAnswer: true
  },
  sp1_scheinwerfer: {
    img: '/assets/Stapo_Frontblitzer.png',
    msg: 'Nein, das sind die Scheinwerfer. Diese brauchen wir für eine bessere Sicht in der Nacht.'
  },
  sp1_zusatzblinker: {
    img: '/assets/Stapo_Frontblitzer.png',
    msg: 'Nein, das sind Zusatzblinker. Damit werden unsere Fahrzeuge, wenn sie beispielsweise bei schlechter Sicht auf der Strasse abgestellt sind, besser erkannt.'
  },
  sp2_q: {
    img: '/assets/Stapo_Funkgerät.png',
    msg: 'Wie kommuniziert eine Patrouille aus dem Fahrzeug heraus?'
  },
  sp2_funkgeraet: {
    img: '/assets/Stapo_Funkgerät.png',
    msg: 'Richtig, mit dem Funkgerät. Einerseits kann die Patrouille mit dem Funkgerät aus dem Fahrzeug heraus mit der Einsatzzentrale sowie anderseits mit anderen Polizistinnen und Polizisten kommunizieren.',
    rightAnswer: true
  },
  sp2_radio: {
    img: '/assets/Stapo_Funkgerät.png',
    msg: 'Nein, das ist das Radio. Auch wir Polizistinnen und Polizisten hören im Auto gerne Musik oder die Nachrichten.'
  },
  sp2_blaulicht: {
    img: '/assets/Stapo_Funkgerät.png',
    msg: 'Leider nicht. Mit diesem Gerät stellen wir die Anzeige sowie das Blaulicht und die Sirene auf dem Dachbalken ein.'
  },
  rd1_q: {
    img: '/assets/RD_Vac.jpg',
    msg: 'Welches Hilfsmittel wird eingesetzt, um Verunfallte mit Verdacht auf eine Wirbelsäulenverletzung auf der Trage im Rettungswagen zu transportieren?'
  },
  rd1_vakuummatratze: {
    img: '/assets/RD_Vac.jpg',
    msg: 'Richtig, die Vakuummatratze. Bei Verdacht auf eine Wirbelsäulenverletzung dürfen Verunfallte möglichst nicht bewegt werden. Für den Transport werden sie deshalb auf die Vakuummatratze gelegt, welche sich an den Körper anformen lässt. Das ermöglicht eine optimale Stabilisation der gesamten Wirbelsäule und ein angenehmes Liegen.',
    rightAnswer: true
  },
  rd1_schaufeltrage: {
    img: '/assets/RD_Vac.jpg',
    msg: 'Nein, das ist die Schaufeltrage. Die Schaufeltrage wird zum Aufnehmen («Aufschaufeln») von Verunfallten, die auf dem Boden liegen, eingesetzt. Vor dem Transport wird die verunfallte Person damit auf die Vakuummatratze gelegt und die Schaufeltrage wird entfernt.'
  },
  rd2_q: {
    img: '/assets/RD_Meds.jpg',
    msg: 'In welcher Form werden die meisten Medikamente verabreicht?'
  },
  rd2_fluessig: {
    img: '/assets/RD_Meds.jpg',
    msg: 'In flüssiger Form. Wird ein Medikament in flüssiger Form direkt in die Blutbahn injiziert (gespritzt), tritt seine Wirkung sofort ein. Bei starken Schmerzen z. B., kann somit schnell eine Linderung erzielt werden.',
    rightAnswer: true
  },
  rd2_tablette: {
    img: '/assets/RD_Meds.jpg',
    msg: 'Als Tablette. Bei einem akuten Ereignis würde die Wirkung einer Tablette zu langsam einsetzen. Denn es dauert eine gewisse Zeit bis die Wirkstoffe in die Blutbahn gelangen und zu wirken beginnen. (Bei einer Tablette erfolgt dafür kein Stich in die Haut.)'
  },
  zs1_q: {
    img: '/assets/zs_kommunikation.png',
    msg: 'Wie kommunizieren wir im Einsatz auf Distanz?'
  },
  zs1_funkgeraet: {
    img: '/assets/zs_funk.png',
    msg: 'Richtig, mit dem Funkgerät. Das Polycom-Funkgerät ist unser Kommunikationsmittel im Einsatz. Polycom heisst das flächendeckende Sicherheitsnetz «Funk» der Behörden und Organisationen für Rettung und Sicherheit (BORS). Es ermöglicht den Funkkontakt innerhalb sowie zwischen den verschiedenen Organisationen wie Grenzwacht, Polizei, Feuerwehr, Rettungsdienst, Zivilschutz und unterstützenden Verbänden der Armee.',
    rightAnswer: true
  },
  zs1_mobiltelefon: {
    img: '/assets/zs_mobiltelefon.png',
    msg: 'Das Mobiltelefon ist nur bedingt richtig. Wir tauschen gewisse Informationen über dieses Alltags-Kommunikationsmittel aus. Bei einem Strom- bzw. Stromnetzausfall oder bei einer Mobilfunküberlastung ist die Kommunikation über Mobiletelefone nicht zuverlässig. Such nach einem besser geeigneten Kommunikationsmittel.'
  },
  zs2_q: {
    img: '/assets/zs_auftrag.png',
    msg: 'Welchen Auftrag hat der Zivilschutz im Video erhalten? Die richtige Antwort findest du auf der Führungswand an unserem Einsatzleitfahrzeug.'
  },
  zs2_sammelstelle: {
    img: '/assets/ZS_AW_Sammelstelle.png',
    msg: 'Richtig, im Video betreuen wir die Sammelstelle der Unverletzten. Wir kümmern uns an der Sammelstelle, die wir zuvor aufgebaut haben, um die Unverletzten. Bei der Aufnahme der Personalien unterstützt uns die Stadtpolizei.',
    rightAnswer: true
  },
  zs2_sanitaetshilfstelle: {
    img: '/assets/ZS_AW_Sanitaetshilfestelle.png',
    msg: 'Sanitätshilfsstelle ist nicht der gesuchte Ort bzw. Auftrag. Die Sanitätshilfsstelle liegt innerhalb der Sperrzone. Der Platzbedarf für eine Sanitätshilfsstelle kann bis zu 1500m2 (1/4 Fussballfeld) betragen. Sie ist ein Element des Rettungsdienstes.'
  },
  zs2_patientensammelstelle: {
    img: '/assets/ZS_AW_Patientensammelstelle.png',
    msg: 'Die Patientensammelstelle ist nicht der gesuchte Ort bzw. Auftrag. Die Patientensammelstelle liegt am Rand der Gefahrenzone. Der Standort muss mit dem Patientenabfluss abgestimmt sein.'
  },
  zs2_rettungsachse: {
    img: '/assets/ZS_AW_Rettungsachse.png',
    msg: 'Die Rettungsachse ist nicht der gesuchte Auftrag bzw. Ort. Die Rettungsachse definiert die ungehinderte Zu- und Wegfahrt der am Einsatz beteiligten Fahrzeuge. Sie ist mit dem Standort der Sanitätshilfsstelle abgestimmt. Die Rettungsachse wird durch die Polizei freigehalten.'
  },
  zs2_einsatzleitung: {
    img: '/assets/ZS_AW_Einsatzleitung.png',
    msg: 'Der Standort der Einsatzleitung ist nicht der gesuchte Auftrag bzw. Ort. Hier befindet sich Standort der Einsatzleitung bestehend aus Polizei, Feuerwehr, Rettungsdienst und Zivilschutz.Dieser Absprachepunkt darf nicht im Patientenfluss oder zu nahe an der Sammelstelle liegen.Überdies darf er für Medien nicht einsehbar sein und muss kontrolliert werden.'
  },
  zs2_warteraum: {
    img: '/assets/ZS_AW_Warteraum.png',
    msg: 'Der Warteraum ist nicht der gesuchte Ort. Der Warteraum liegt in der Verkehrsumleitungszone und muss mit der Rettungsachse abgestimmt sein. Die Einsatzleitung definiert den Warteraum. Hierhin werden Rettungsmittel geleitet, die nicht sofort für die Bewältigung des Ereignisses benötigt werden.'
  }
} as IIndexable
