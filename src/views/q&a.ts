export interface IIndexable {
  [key: string]: any
}

export const q_n_a = {
  fw: {
    // feuerwehr
    q: 'Wie lange ist der markierte Schlauch? (in Metern)',
    a: new RegExp('^20 ?(m|meter)?$'),
    img: 'fw_schlauch.jpg'
  },
  zs: {
    // zivilschutz
    q: 'Schätze und kurble: Wie schwer ist der Betonklotz? (in kg)',
    a: new RegExp('^(1[6-9][0-9]|200) ?(kg|kilogramm|kilo)?$'),
    img: 'zs_truemmer.jpg'
  },
  rd: {
    // rettungsdienst
    q: 'Für wie viel Gewicht ist die Patiententrage ausgelegt? (in kg)',
    a: new RegExp('^317 ?(kg|kilogramm|kilo)?$'),
    img: 'rd_rettungstrage.jpg'
  },
  sp: {
    // stadtpolizei
    q: 'Wie lautet das Funk-Rufzeichen unserer Streifenwagen?',
    a: new RegExp('^alba$'),
    img: 'sp_funk.jpg'
  },
  na: {
    q: 'Ooops! da ist wohl etwas schief gelaufen',
    a: new RegExp('')
  }
} as IIndexable
