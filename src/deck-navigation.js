// Display order is independent of persisted deck indices.
export function courseUnits(decks, course) {
 return [...new Set(decks.filter(d=>d.course===course).map(d=>d.unit))].map(unit=>({
  unit, decks:decks.flatMap((deck,index)=>deck.course===course&&deck.unit===unit?[{deck,index}]:[])
 }));
}
export const sameUnit=(a,b)=>a.course===b.course&&a.unit===b.unit;
export function defaultFigure(deck) {
 if(deck.defaultFigure)return deck.defaultFigure;
 if(deck.course==='CHEM 121')return 'v-ax4';
 return {'Functional groups & linkages':'ester','Structures & directionality':'nucleotide','Lipids & membranes':'bilayer','Hydrophobic effect':'hydrophobic'}[deck.title]||'aminoacid';
}
export const sourceLabel=deck=>deck.source||(deck.course==='CHEM 121'?'From your four VSEPR tables':'From your September 18 & 21 notes');
export const unitExportName=deck=>deck.course==='CHEM 121'?'CHEM121_VSEPR_Master.txt':deck.unit==='Macromolecules'?'BIOL_Macromolecules_Master.txt':'BIOL112_Membranes_Master.txt';
