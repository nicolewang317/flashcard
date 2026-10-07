// Existing cards stay in the same deck with the same IDs. This list only
// routes questions that require applying a concept to a case, graph, or data.
export const BIOL112_APPLICATION_IDS = new Set([
  // Functional groups & linkages: transfer rules to an unfamiliar molecule.
  '2d93055072c7c4', '006ef919da5d8d', '5231084ab9f460', '1811912db864f3',
  // Structures & directionality: charge, orientation, counting, and enzyme cases.
  '08365faa9e7bd7', '24fd620b6c912c', 'c9fb7bdd206a68',
  '601c7a29f950be', 'dcf0a04543870b', 'b7e9b1efdc7e8c',
  '1e34614c3e6692', 'biol112-lecture-starch-location',
  'biol112-lecture-bacterial-carbohydrates', 'biol112-lecture-bacterial-proteins',
  // Lipids: stoichiometry and products of reactions.
  '8b7b0441de337d', 'ed97f6cf8955db', 'aedbcf85cfccda',
  // Hydrophobic effect: calculate and predict changes in free energy.
  'f20c7da6097384', 'c91e4b83bed467', '64167b51d35e89',
  // Protein structure: predict outcomes for mutations, environments, and cases.
  'biol112-protein-sidechain-classification', 'biol112-protein-soluble-core',
  'biol112-protein-membrane-surface', 'biol112-protein-ionic-pair',
  'biol112-protein-ph-protonation', 'biol112-protein-sequence-order',
  'biol112-protein-sequence-to-function', 'biol112-protein-denaturation-sequence',
  'biol112-protein-shape-function', 'biol112-protein-unfolding-aggregation',
  'biol112-protein-chaperone-protection', 'biol112-protein-chaperone-limits',
  'biol112-protein-hydrophilicity-ranking', 'biol112-protein-sidechain-hbond',
  'biol112-lecture-peptide-energy',
  // Membrane transport: scenarios, gradient calculations, and curve reading.
  '29480d7477adf4', '6094adf0179c40', '7664b2ee0eb6e6',
  'biol112-transport-equilibrium-concentration', 'biol112-transport-glut-reversal',
  'biol112-transport-channel-gating', 'biol112-transport-nak-stoichiometry',
  'biol112-transport-pump-electrogenic', 'biol112-transport-cotransport-directions',
  'biol112-transport-electrical-opposition', 'biol112-transport-sglt-pump-dependence',
  'biol112-transport-glut-sglt-comparison', 'biol112-class-net-flux',
  'biol112-class-gradient-energy', 'biol112-class-action-potential',
  'biol112-class-draw-cotransport', 'biol112-class-heart-antiport',
  'biol112-class-gas-cell-example', 'biol112-class-glut-cell-example',
  'biol112-lecture-channel-lining', 'biol112-lecture-leak-gated',
  'biol112-lecture-carrier-rate', 'biol112-lecture-ratio-start',
  'biol112-lecture-ratio-draw', 'biol112-lecture-ratio-active',
  'biol112-lecture-ratio-limit', 'biol112-lecture-ratio-distribution',
  'biol112-lecture-pump-phosphorylation', 'biol112-lecture-gut-uptake-purpose',
  // Chemistry: classify real regions and reason from their partners.
  'e24f7c8c3adf9f', '541ec6d6374e70', '1423aa549927ea',
  'biol112-lecture-interaction-ion-water', 'biol112-lecture-interaction-ion-induced',
  'biol112-lecture-interaction-pd-induced', 'biol112-lecture-interaction-id-id',
  'biol112-lecture-interaction-pd-pd', 'biol112-lecture-dipole-attract-repel',
  'biol112-lecture-induced-attraction',
  // DNA/RNA: apply directionality rules to a strand.
  '22f497f52cc9df',
  // Cells: scale-bar reading, identification, and comparisons in examples.
  'biol112-lecture-size-not-identity', 'biol112-lecture-scale-bar',
  'biol112-lecture-cell-common', 'biol112-lecture-nucleoid-recognition',
  'biol112-lecture-nucleus-comparison', 'biol112-lecture-gram-negative',
  'biol112-lecture-ribosomes', 'biol112-lecture-yeast-genomes',
  'biol112-lecture-chromosome-topology', 'biol112-lecture-genome-size',
  'biol112-lecture-endosymbiotic-evidence', 'biol112-lecture-endosymbiotic-division',
  'biol112-lecture-endosymbiotic-ancestors', 'biol112-lecture-unicellular-eukaryote',
  // Cell growth: graphs, population calculations, and the supplied culture cases.
  'biol112-lecture-individual-population', 'biol112-lecture-growth-log-axis',
  'biol112-lecture-growth-lag', 'biol112-lecture-growth-log',
  'biol112-lecture-growth-stationary', 'biol112-lecture-growth-death',
  'biol112-lecture-growth-seven', 'biol112-lecture-growth-inhibitors',
  'biol112-lecture-growth-expression', 'biol112-lecture-growth-replication',
  'biol112-lecture-diauxic-first-sugar', 'biol112-lecture-diauxic-pause',
  'biol112-lecture-diauxic-final', 'biol112-lecture-isotope-tracing',
  'biol112-lecture-carbon-reallocation', 'biol112-lecture-tracer-atom',
  'biol112-lecture-growth-doublings',
  // Fluid mosaic: course-specific blood-group example.
  'biol112-lecture-membrane-sugars'
]);

export function studyModeForCard(card, deck) {
  return deck?.course === 'BIOL 112' && BIOL112_APPLICATION_IDS.has(card.id) ? 'apply' : 'learn';
}
