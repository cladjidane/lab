const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(process.env.HOME, '.pai/memory/semantic/db/memory.db'), { readonly: true });

const STOP_WORDS = new Set([
  'dans','avec','pour','plus','tout','sans','mais','donc','sont','etait','fait',
  'peut','doit','tous','etre','bien','tres','leur','nous','vous','elle','elles',
  'cette','comme','avoir','faire','entre','aussi','encore','apres','avant','depuis',
  'quand','alors','cela','ceci','dont','celui','meme','autre','chaque','quelque',
  'projet','fichier','utiliser','faut','sera','lors','deja','suite','vers','selon',
  'partir','reste','permet','prend','passe','place','point','niveau','partie',
  'celui','celle','ceux','celles','lequel','laquelle','lesquels','lesquelles',
  'the','and','for','with','from','that','this','have','been','will','would',
  'should','could','about','which','their','there','these','those','after','before',
]);

const rows = db.prepare(`
  SELECT project, content FROM facts
  WHERE deleted_at IS NULL AND project != 'unknown'
`).all();

// Count words per project
const projectWords = {};

rows.forEach(row => {
  const words = row.content.toLowerCase()
    .replace(/[^a-zàâäéèêëïîôùûüçœæ0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 3 && !STOP_WORDS.has(w) && !/^\d+$/.test(w));

  if (!projectWords[row.project]) projectWords[row.project] = {};
  const counts = projectWords[row.project];
  words.forEach(w => { counts[w] = (counts[w] || 0) + 1; });
});

// For each project, get top 40 keywords (by frequency, min 3 occurrences)
const result = {};
for (const [project, counts] of Object.entries(projectWords)) {
  const sorted = Object.entries(counts)
    .filter(([, c]) => c >= 3)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 40)
    .map(([word, count]) => ({ word, count }));
  if (sorted.length > 0) result[project] = sorted;
}

console.log(JSON.stringify(result, null, 2));
