export interface IIndexable {
  [key: string]: any
}

export const resources = {
  fw: { // feuerwehr
    q: "Wie lange ist der markierte Schlauch? (in Metern)",
    a: "20"
  },
  zs: { // zivilschutz
    q: "Schätze und kurble: Wie schwer ist der Betonklotz? (in kg)",
    a: "90"
  },
  rd: { // rettungsdienst
    q: "Für wie viel Gewicht ist die Patiententrage ausgelegt? (in kg)",
    a: "317",
  },
  sp: { // stadtpolizei
    q: "Wie lautet das Funk-Rufzeichen userer Streifenwagen?",
    a: "Alba"
  }
} as IIndexable
