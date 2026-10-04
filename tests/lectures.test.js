import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {DECKS,TESTS} from '../src/library.js';
import {LECTURES} from '../src/lecture-sources.js';
import {LECTURE_FIGURES} from '../src/lecture-diagrams.js';
const cards=DECKS.flatMap(d=>d.cards),added=cards.filter(c=>c.id.startsWith('biol112-lecture-'));
test('all supplied lectures have source metadata and original requirements pages',()=>{
 assert.deepEqual(LECTURES.map(l=>l.id),[2,3,4,5,6,7,8,9,10]);assert.equal(LECTURES.reduce((n,l)=>n+l.pageCount,0),319);
 for(const l of LECTURES){assert.match(l.sha256,/^[a-f0-9]{64}$/);const rows=JSON.parse(fs.readFileSync(new URL('../public/lecture-originals/L'+l.id+'-requirements.json',import.meta.url)));assert.deepEqual(rows.map(r=>r.page),l.requirements);for(const r of rows){assert.ok(r.text.trim());const svg=fs.readFileSync(new URL('../public'+r.image,import.meta.url),'utf8');assert.match(svg,/<svg/);assert.doesNotMatch(svg,/<script|javascript:/);}}
});
test('75 new independent cards have bounded, inspectable lecture references and original models',()=>{
 assert.equal(added.length,75);assert.equal(new Set(added.map(c=>c.front)).size,75);
 for(const c of cards.filter(c=>DECKS[c.deck].course==='BIOL 112'))for(const s of c.sources||[]){const l=LECTURES.find(l=>l.id===s.lecture);assert.ok(l);for(const p of s.pages)assert.ok(Number.isInteger(p)&&p>0&&p<=l.pageCount);}
 for(const c of added){assert.ok(c.sources.length);assert.ok(c.back&&c.concept);assert.equal(cards.filter(d=>d.front===c.front).length,1);}
 for(const f of Object.values(LECTURE_FIGURES))for(const labels of [false,true])assert.doesNotMatch(f.draw(labels),/NaN|undefined/);
 assert.equal(TESTS.filter(q=>q.cardId.startsWith('biol112-lecture-')).length,14);
});
test('course limitations remain explicit rather than turning slide simplifications into universal facts',()=>{
 const lookup=id=>cards.find(c=>c.id==='biol112-lecture-'+id);
 assert.match(lookup('interaction-ion-water').studyNote,/PD–PD/);assert.match(lookup('interaction-strength').studyNote,/not a universal/);
 assert.match(lookup('growth-seven').back,/Acceleration, deceleration and long-term/);
 assert.match(lookup('ratio-limit').back,/No/);assert.match(lookup('ratio-active').front,/no metabolism or binding/);
 assert.match(lookup('residue').studyNote,/side chains and terminal groups/);
 assert.ok(!added.some(c=>/SGLT2|biconvex|all residues cannot/i.test(c.back)));
});
