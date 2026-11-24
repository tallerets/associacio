// Fitxes dels projectes socials. Cada fitxa segueix la mateixa estructura que
// una sol·licitud de subvenció, perquè es pugui reaprofitar.
// Revisar els textos i omplir els camps [PENDENT].

export type Estat = 'En marxa' | 'En preparació' | 'Finalitzat' | 'Busquem finançament'

export interface Projecte {
  slug: string
  titol: string
  resum: string
  estats: Estat[]
  necessitat: string
  destinataries: string
  activitats: string[]
  aliances: string[]
  calendari: string
  indicadors: string[]
  financament: string
}

export const projectes: Projecte[] = [
  {
    slug: 'dones-grans-garcilaso',
    titol: 'Tallers creatius per a dones grans',
    resum:
      'Un taller setmanal d’oficis artesans per a dones grans, amb el Centre de Serveis Socials Garcilaso.',
    estats: ['En preparació'],
    necessitat:
      'La soledat no desitjada i la manca d’espais de relació afecten especialment les dones grans. Un taller estable crea vincle, rutina i sentiment de pertinença.',
    destinataries: 'Dones grans ateses pel Centre de Serveis Socials Garcilaso.',
    activitats: [
      'Sessions setmanals de 90 minuts (dimarts de 12:00 a 13:30).',
      'Tècniques tèxtils i manuals adaptades al grup: costura, ganxet, brodat, collage.',
      'Peces col·lectives que fan visible el treball del grup.',
    ],
    aliances: [
      'Centre de Serveis Socials Garcilaso',
      'Institut Municipal de Serveis Socials de Barcelona',
    ],
    calendari: 'De novembre de 2026 a juny de 2027.',
    indicadors: [
      '[PENDENT] Nombre de participants i assistència mitjana.',
      '[PENDENT] Valoració de les participants i de l’equip del centre.',
    ],
    financament: '[PENDENT: com es finança el projecte]',
  },
  {
    slug: 'viure-sense-violencia',
    titol: 'Viure sense violència',
    resum:
      'Jornada comunitària del 25N amb força, paraula i fanzine, coorganitzada amb MPOWAH i A Tu Vera.',
    estats: ['En marxa'],
    necessitat:
      'Prevenir les violències masclistes des de la comunitat, amb espais on les dones guanyen confiança, xarxa i eines.',
    destinataries: 'Dones del barri i de la ciutat.',
    activitats: [
      'Entrenament de força.',
      'Xerrada final i taller de fanzine per posar en paraules i imatges el que s’ha compartit.',
    ],
    aliances: ['MPOWAH', 'A Tu Vera'],
    calendari: '28 de novembre de 2026.',
    indicadors: [
      '[PENDENT] Inscripcions i assistència.',
      '[PENDENT] Fanzines produïts i difusió.',
    ],
    financament: '[PENDENT]',
  },
  {
    slug: 'built-for-everyone',
    titol: 'Built for Everyone: entendre la diversitat funcional per treure barreres',
    resum:
      'Un taller vivencial per entendre com les barreres del dia a dia afecten les persones amb discapacitat, i què podem canviar.',
    estats: ['En preparació'],
    necessitat:
      'Moltes barreres no són físiques sinó de disseny, d’informació i d’actitud. Entendre-les en primera persona és el primer pas per eliminar-les.',
    destinataries: 'Equips de treball, grups i entitats.',
    activitats: [
      'Joc d’obertura: construir torres de paper amb eines desiguals.',
      'Estacions de barreres: llapis gegants, dibuixar sense mirar, mà no dominant, instruccions il·legibles.',
      'Tancament: compromisos en un mural col·lectiu i fanzine per emportar-se.',
    ],
    aliances: ['[PENDENT: entitat de diversitat funcional de Sants]'],
    calendari: 'Sessions de 90 minuts.',
    indicadors: [
      '[PENDENT] Persones participants.',
      '[PENDENT] Compromisos recollits al mural.',
    ],
    financament: '[PENDENT]',
  },
  {
    slug: 'tallaristes-emprenedores',
    titol: 'Programa de tallaristes emprenedores',
    resum:
      'Formar i acompanyar artesanes perquè facin de la seva tècnica un projecte professional dins l’economia social i solidària.',
    estats: ['En preparació', 'Busquem finançament'],
    necessitat:
      'Molts oficis artesans, sovint en mans de dones, no arriben a ser una feina digna. Falten acompanyament, xarxa i un model econòmic just.',
    destinataries:
      'Dones artesanes (costura, ganxet, punt i altres oficis manuals) que volen dinamitzar tallers.',
    activitats: [
      'Formació en dinamització de tallers en català.',
      'Acompanyament per crear el propi projecte dins l’ESS.',
      'Primers tallers a Tallerets amb un model de retribució just.',
    ],
    aliances: ['[PENDENT]'],
    calendari: '[PENDENT]',
    indicadors: [
      '[PENDENT] Tallaristes formades.',
      '[PENDENT] Projectes i llocs de treball creats.',
    ],
    financament: 'Busquem finançament per posar-lo en marxa.',
  },
  {
    slug: 'artesanes-invisibles',
    titol: 'Artesanes Invisibles',
    resum:
      'Websèrie documental en català que fa visible el treball i la vida de dones artesanes.',
    estats: ['En marxa', 'Busquem finançament'],
    necessitat:
      'El treball artesà de moltes dones ha quedat fora del relat. Documentar-lo és reconèixer-lo i transmetre’l.',
    destinataries: 'Públic general, escoles i entitats culturals.',
    activitats: [
      'Episodi pilot dedicat a la Lolita.',
      '[PENDENT] Nous episodis i presentacions públiques.',
    ],
    aliances: ['[PENDENT]'],
    calendari: '[PENDENT]',
    indicadors: ['[PENDENT] Episodis, visualitzacions, presentacions.'],
    financament: 'Busquem finançament per a la resta d’episodis.',
  },
]
