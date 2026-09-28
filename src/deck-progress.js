// Mastery is based on the latest review state, not opening a card or favoriting it.
export function deckProgress(deck, progress = {}) {
 const total = deck.cards.length;
 const mastered = deck.cards.reduce((n, card) => n + (progress[card.id]?.status === 'known' ? 1 : 0), 0);
 const ratio = total ? mastered / total : 0;
 const complete = total > 0 && mastered === total;
 const percent = complete ? 100 : Math.floor(ratio * 100);
 const tone = complete ? 'complete' : ratio >= .8 ? 'green' : ratio >= 1 / 3 ? 'yellow' : 'red';
 return { total, mastered, ratio, percent, complete, tone };
}
