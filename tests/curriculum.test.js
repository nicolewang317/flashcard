import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {DECKS,CHEM_SHAPES} from '../src/library.js';
import {FIGURES} from '../src/diagrams.js';
import {SYLLABUS_TEXT,MODULES,syllabusSection,curriculumUnits,readableOriginal} from '../src/curriculum.js';
const hash=x=>createHash('sha256').update(x).digest('hex');
test('all 276 question, answer, prompt and ID values are unchanged by the curriculum and visual review',()=>{
 const rows=DECKS.flatMap(d=>d.cards).filter(c=>!c.id.startsWith('biol112-lecture-')).map(({id,front,prompt,back})=>({id,front,prompt,back})).sort((a,b)=>a.id.localeCompare(b.id));
 assert.equal(rows.length,276);assert.equal(hash(JSON.stringify(rows)),'b0dbfdfdf0cf0a4723e203edc79408d166bd84dca0d560c56375c2914b3ede19');
});
test('full source archive is immutable and identical to the downloadable original',()=>{
 assert.equal(hash(SYLLABUS_TEXT),'be4d559ad17aae29082c76ef97cf2c609558c2091c6025be4998e0ffc029beb4');
 assert.equal(SYLLABUS_TEXT,fs.readFileSync(new URL('../public/BIOL112_Syllabus_Original.txt',import.meta.url),'utf8'));
 for(const n of ['2-3','2-4','2-5'])assert.equal((SYLLABUS_TEXT.match(new RegExp('Module '+n+':','g'))||[]).length,2);
 assert.match(SYLLABUS_TEXT,/Predict.*types of noncovalent interactions/);
 assert.match(readableOriginal(SYLLABUS_TEXT),/predict\*\* \(C4\)/);
 assert.equal(syllabusSection('Unit 1')+syllabusSection('Unit 2'),SYLLABUS_TEXT);
 for(const m of MODULES)assert.ok(SYLLABUS_TEXT.includes(syllabusSection(m.id)));
 assert.doesNotMatch(syllabusSection('2-6'),/Learning Objectives|By the end/);
});
test('official module order includes the newly populated growth module; each card has exactly one home',()=>{
 const units=curriculumUnits(DECKS);assert.deepEqual(units.map(u=>u.unit),['Unit 1','Unit 2']);assert.deepEqual(units.flatMap(u=>u.modules.map(m=>m.id)),['1-1','1-2','2-1','2-2','2-3','2-4','2-5','2-6']);
 assert.equal(units[0].modules[1].decks.length,1);
 const ids=units.flatMap(u=>u.modules.flatMap(m=>m.decks.flatMap(d=>d.deck.cards.map(c=>c.id))));
 assert.equal(ids.length,289);assert.equal(new Set(ids).size,289);
 for(const d of DECKS.filter(d=>d.course==='BIOL 112'))assert.ok(MODULES.some(m=>m.id===d.module&&m.unit===d.unit));
});
test('all reviewed models resolve, every card has an audit row, and unit exports have correct totals',()=>{
 const audit=JSON.parse(fs.readFileSync(new URL('../docs/STRUCTURE_REVIEW.json',import.meta.url)));
 const cards=DECKS.flatMap(d=>d.cards);assert.equal(audit.length,cards.length);
 const keys=new Set([...Object.keys(FIGURES),...CHEM_SHAPES.map(s=>'v-'+s.key)]);
 for(const c of cards){assert.equal(audit.filter(r=>r.id===c.id).length,1);if(c.answerFigure)assert.ok(keys.has(c.answerFigure),c.answerFigure);}
 assert.equal(cards.filter(c=>c.answerFigure).length,277);
 for(const unit of ['Unit 1','Unit 2']){const filename='BIOL112_'+unit.replace(' ','')+'_Master.txt';assert.equal(fs.readFileSync(new URL('../public/'+filename,import.meta.url),'utf8').trim().split('\n').length,DECKS.filter(d=>d.unit===unit).flatMap(d=>d.cards).length);}
});
