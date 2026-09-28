import {esc, FIGURES, svg, txt, line, path, BLUE} from './diagrams.js';
const diagram=(body,desc,caption,viewBox='0 0 720 280')=>({image:svg(body,desc,viewBox),caption});
const sugar=(deoxy=false)=>diagram(
 path('M360 48 440 115 410 195 310 195 280 115 Z')+'<circle cx="360" cy="48" r="18" fill="white"/>'+txt(360,48,'O',28,BLUE)+
 [[440,115,'1′'],[410,195,'2′'],[310,195,'3′'],[280,115,'4′']].map(([x,y,n])=>`<circle cx="${x}" cy="${y}" r="18" fill="white"/>`+txt(x,y,n,24)).join('')+
 line(455,108,495,90)+txt(530,78,'OH',27,BLUE)+line(421,215,449,242)+txt(480,258,deoxy?'H':'OH',26,BLUE)+line(297,211,275,239)+txt(245,255,'OH',26,BLUE)+line(263,102,227,72)+txt(155,54,'5′ CH₂OH',26,BLUE),
 `${deoxy?'Deoxyribose':'Ribose'} connectivity: four carbons and one oxygen in the ring, with the fifth carbon outside; ${deoxy?'H':'OH'} at carbon 2 prime.`,
 'Cyclic sugar connectivity sketch; hydrogens and stereochemistry are not fully drawn. Numbers label carbon atoms.','70 10 515 270');
const uracil=diagram(path('M300 170 360 205 420 170 420 100 360 65 300 100 Z')+line(309,104,357,77)+line(354,207,354,246)+line(366,207,366,246)+txt(360,267,'O',30,BLUE)+line(425,94,466,70)+line(432,106,473,82)+txt(494,63,'O',30,BLUE)+[[300,170,'HN'],[420,170,'NH']].map(([x,y,n])=>`<rect x="${x-24}" y="${y-19}" width="48" height="38" fill="white"/>`+txt(x,y,n,28,BLUE)).join(''),
 'Uracil: a six-membered ring containing two nitrogens, two carbonyl groups and a carbon–carbon double bond.',
 'Uracil (an RNA base), shown free. Unlabelled corners are carbon; hydrogens on carbon are omitted.','255 35 275 245');
const aa=side=>diagram(txt(160,112,'H₃N⁺',32,BLUE)+line(207,112,311,112)+txt(340,112,'CH',32)+line(370,112,468,112)+txt(528,112,'COO⁻',32,BLUE)+line(340,138,340,186)+txt(340,220,side,30,BLUE),`Free amino acid with NH3 plus, COO minus, and side chain ${side}.`,'Condensed connectivity at approximately neutral pH; stereochemistry is not shown.','90 55 510 210');
const glycerol=diagram(txt(360,85,'HO–CH₂–CH–CH₂–OH',33)+line(360,105,360,166)+txt(360,192,'OH',32,BLUE),'Glycerol: HOCH2 bonded to CHOH bonded to CH2OH.','Condensed formula: three carbon atoms and three hydroxyl groups.');
const glucose=diagram(txt(360,45,'CHO',29)+line(360,63,360,85)+[0,1,2,3].map((n)=>{const y=103+n*38;const right=n!==1;return line(360,y,360,y+38)+line(286,y,435,y)+txt(255,y,right?'H':'HO',23,BLUE)+txt(466,y,right?'OH':'H',23,BLUE)}).join('')+txt(360,267,'CH₂OH',27),'Open-chain D-glucose Fischer projection, with OH right, left, right, right from carbon 2 to 5.','Open-chain D-glucose (Fischer projection); glucose is mainly cyclic in water.','220 15 280 270');
const entry=(name,aliases,body,visual)=>({name,aliases,body,...visual});
const fromFigure=key=>{const f=FIGURES[key];return {image:svg(f.draw(false),f.desc),caption:f.caption};};
export const MOLECULES={
 phosphate:entry('Phosphate group',['phosphate group','phosphate groups','phosphate'], 'P is surrounded by four O atoms. The drawing shows phosphate attached to an organic group R through O, as in a nucleotide phosphate ester. Phosphate groups commonly carry negative charge; the exact charge depends on pH and esterification.',fromFigure('phosphoester')),
 pentose:entry('Pentose sugar',['pentose sugar','pentose sugars'], 'A pentose has five carbon atoms. This ribose example has four carbons plus one oxygen in its ring; carbon 5′ is outside. Ribose is the sugar in RNA; deoxyribose is the sugar in DNA.',sugar()),
 base:entry('Nitrogenous base',['nitrogenous base','nitrogenous bases'], 'A nitrogen-containing ring system attached to sugar at 1′ in a nucleotide. A and G have two fused rings; C, T and U have one ring. The example below is uracil, used in RNA.',uracil),
 uracil:entry('Uracil',['uracil'], 'An RNA pyrimidine base; it pairs with adenine. In a nucleotide, its N1 is attached to the sugar’s 1′ carbon.',uracil),
 ribose:entry('Ribose',['ribose'], 'RNA’s five-carbon sugar has an –OH at 2′. A nucleotide attaches its base at 1′ and can form backbone connections through 3′ and 5′.',sugar()),
 deoxyribose:entry('Deoxyribose',['deoxyribose'], 'DNA’s five-carbon sugar has H rather than OH at 2′. It still has the 3′-OH needed at the growing end of a DNA strand.',sugar(true)),
 nucleotide:entry('Nucleotide',['nucleotide','nucleotides'], 'The building block of DNA or RNA: a pentose sugar, a nitrogenous base, and one or more phosphate groups. The sketch shows the sugar numbering, not a complete phosphate structure.',fromFigure('nucleotide')),
 glycerol:entry('Glycerol',['glycerol'], 'A three-carbon alcohol with three hydroxyl groups. Fatty acids attach to these positions through ester linkages in triacylglycerols and glycerol-based phospholipids.',glycerol),
 glucose:entry('Glucose',['glucose'], 'A six-carbon monosaccharide (C₆H₁₂O₆). Its many hydroxyl groups interact with water, making direct passage through the lipid core unfavorable. GLUT and Na⁺–glucose cotransporters provide different transport routes.',glucose),
 aspartate:entry('Aspartate',['aspartate','aspartic acid'], 'At approximately pH 7, aspartic acid’s side-chain carboxyl is usually deprotonated to COO⁻. This negative charge strongly favors hydration and can form ionic interactions with positive groups.',aa('CH₂–COO⁻')),
 threonine:entry('Threonine',['threonine'], 'Its side chain –CH(OH)–CH₃ is polar but normally uncharged. The hydroxyl group can hydrogen-bond with water or other suitable groups.',aa('CH(OH)–CH₃')),
 phenylalanine:entry('Phenylalanine',['phenylalanine'], 'Its side chain contains a nonpolar phenyl ring. In soluble globular proteins this hydrophobic side chain often packs in the interior. C₆H₅ below denotes the phenyl ring.',aa('CH₂–C₆H₅')),
 glycine:entry('Glycine',['glycine'], 'The side chain is H, so its α-carbon has two hydrogens. Its small size allows more backbone flexibility than most other amino acids.',aa('H')),
 cysteine:entry('Cysteine',['cysteine','cysteines'], 'Its –CH₂–SH side chain contains a thiol. Oxidation of two cysteine thiols can create a covalent S–S disulfide bond.',aa('CH₂–SH')),
};
for(const [key,aliases] of [
 ['ester',['ester linkage','ester linkages','ester bond','ester bonds','ester']],['ether',['ether linkage','ether linkages','ether']],['amide',['amide group','amide linkage','amide','peptide bond','peptide bonds','peptide linkage']],['thioester',['thioester','thioester linkage']],['carboxyl',['carboxyl group','carboxyl groups']],['carboxylate',['carboxylate','carboxylates']],['hydroxyl',['hydroxyl group','hydroxyl groups']],['amino',['amino group','amino groups']],['carbonyl',['carbonyl group','carbonyl oxygen','carbonyl']],['methyl',['methyl group']],['phosphoester',['phosphoester','phosphoester linkage']],['phosphodiester',['phosphodiester','phosphodiester bond','phosphodiester linkages']],['aminoacid',['amino acid','amino acids']],['tag',['triacylglycerol','triacylglycerols']],['bilayer',['phospholipid bilayer','bilayer','bilayers']],['micelle',['micelle','micelles']],['liposome',['liposome','liposomes']]
]){const f=FIGURES[key];MOLECULES[key]=entry(f.name,aliases,f.explain,fromFigure(key));}
const aliases=Object.entries(MOLECULES).flatMap(([key,v])=>v.aliases.map(alias=>({key,alias}))).sort((a,b)=>b.alias.length-a.alias.length);
const keys=new Map(aliases.map(a=>[a.alias.toLowerCase(),a.key]));
const escaped=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const pattern=new RegExp('(?<![\\p{L}\\p{N}])('+aliases.map(a=>escaped(a.alias)).join('|')+')(?![\\p{L}\\p{N}])','giu');
// Tokenize raw text once, then escape each segment. Never replace inside generated HTML.
export function highlightMolecules(text){
 let html='',pos=0;
 for(const m of String(text).matchAll(pattern)){
  html+=esc(text.slice(pos,m.index));
  const key=keys.get(m[0].toLowerCase());
  html+=`<button type="button" class="molecule-term" data-molecule="${key}" aria-haspopup="dialog" aria-expanded="false" aria-controls="molecule-popover">${esc(m[0])}</button>`;
  pos=m.index+m[0].length;
 }
 return html+esc(text.slice(pos));
}
