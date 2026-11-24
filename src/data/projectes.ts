// Projectes socials que es mostren a la web: només títol i resum.

export interface Projecte {
    titol: string
    resum: string
}

export const projectes: Projecte[] = [
  {
        titol: 'Tallers creatius per a dones grans',
        resum: 'Un espai setmanal per crear amb les mans, fer vincle i combatre la soledat no desitjada.',
  },
  {
        titol: 'Viure sense violència',
        resum: 'Jornada comunitària del 25N amb força, paraula i fanzine, coorganitzada amb MPOWAH i A Tu Vera.',
  },
  {
        titol: 'Programa de talleristes emprenedores',
        resum: 'Formar i acompanyar artesanes perquè facin de la seva tècnica un projecte professional dins l’economia social i solidària.',
  },
  {
        titol: 'Artesanes Invisibles',
        resum: 'Websèrie documental en català que fa visible el treball i la vida de dones artesanes.',
  },
  ]
