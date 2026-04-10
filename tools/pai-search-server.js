import Database from 'better-sqlite3';
import { createServer } from 'http';
import { homedir } from 'os';
import { join } from 'path';

const db = new Database(join(homedir(), '.pai/memory/semantic/db/memory.db'), { readonly: true });

const searchStmt = db.prepare(`
  SELECT f.project, count(*) as hits,
    group_concat(substr(f.content, 1, 120), ' | ') as snippets
  FROM facts_fts fts
  JOIN facts f ON f.rowid = fts.rowid
  WHERE facts_fts MATCH ?
    AND f.deleted_at IS NULL
    AND f.project != 'unknown'
  GROUP BY f.project
  ORDER BY hits DESC
  LIMIT 15
`);

const server = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const url = new URL(req.url, 'http://localhost');
  if (url.pathname !== '/search') {
    res.writeHead(404);
    res.end('{}');
    return;
  }

  const q = url.searchParams.get('q');
  if (!q || q.trim().length < 2) {
    res.end('[]');
    return;
  }

  try {
    // FTS5 query: add * for prefix matching
    const ftsQuery = q.trim().split(/\s+/).map(w => w + '*').join(' ');
    const results = searchStmt.all(ftsQuery);
    res.end(JSON.stringify(results));
  } catch (e) {
    res.end('[]');
  }
});

server.listen(18765, () => {
  console.log('PAI search server on http://localhost:18765/search?q=...');
});
