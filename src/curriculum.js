import {SYLLABUS_TEXT} from './syllabus-source.js';
export {SYLLABUS_TEXT};
export const MODULES=[
 {id:'1-1',unit:'Unit 1',title:'What makes a cell living?',marker:'## **Module 1-1:'},
 {id:'1-2',unit:'Unit 1',title:'',marker:'## **(Module 1-2)**'},
 {id:'2-1',unit:'Unit 2',title:'Chemistry for Biology (Mastery Learning Module #1)',marker:'### **Module 2-1'},
 {id:'2-2',unit:'Unit 2',title:'Major macromolecules in cells',marker:'### **Module 2-2:'},
 {id:'2-3',unit:'Unit 2',title:'Making a container - lipids and membranes',marker:'## **Module 2-3:'},
 {id:'2-4',unit:'Unit 2',title:'How things get across membranes - membrane transport',marker:'### **Module 2-4:'},
 {id:'2-5',unit:'Unit 2',title:'Structure, function and self-assembly of proteins',marker:'### **Module 2-5:'},
 {id:'2-6',unit:'Unit 2',title:'Structure and function of nucleic acids',marker:'### **Module 2-6:'}
];
export const UNIT_TITLES={'Unit 1':'Unit 1','Unit 2':'Unit 2 Overview - Macromolecules the building blocks of cells'};
export const moduleLabel=id=>{const m=MODULES.find(m=>m.id===id);return m?`Module ${m.id}${m.title?': '+m.title:''}`:'';};
// All views are literal slices of the single source, never rewritten summaries.
export function syllabusSection(scope='all'){
 if(scope==='all')return SYLLABUS_TEXT;
 const unit2=SYLLABUS_TEXT.indexOf('# Unit 2 Overview');
 if(scope==='Unit 1')return SYLLABUS_TEXT.slice(0,unit2);
 if(scope==='Unit 2')return SYLLABUS_TEXT.slice(unit2);
 const i=MODULES.findIndex(m=>m.id===scope);if(i<0)return '';
 const start=SYLLABUS_TEXT.indexOf(MODULES[i].marker);
 const end=i===1?unit2:i+1<MODULES.length?SYLLABUS_TEXT.indexOf(MODULES[i+1].marker):SYLLABUS_TEXT.length;
 return SYLLABUS_TEXT.slice(start,end);
}
export function curriculumUnits(decks){return Object.entries(UNIT_TITLES).map(([unit,title])=>({unit,title,modules:MODULES.filter(m=>m.unit===unit).map(m=>({...m,decks:decks.flatMap((d,index)=>d.course==='BIOL 112'&&d.module===m.id?[{deck:d,index}]:[])}))}));}
export function readableOriginal(raw){return raw.replace(/&#x([0-9a-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n)));}
