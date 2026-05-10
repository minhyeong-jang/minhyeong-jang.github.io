import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_SOURCE = '/Users/doriri/Documents/private/minhyeong-jang.github.io/_posts';
const POSTS_DEST = '/Users/doriri/Documents/private/minhyeong-jang.github.io/astro-blog/src/content/posts';
const PROJECTS_DEST = '/Users/doriri/Documents/private/minhyeong-jang.github.io/astro-blog/src/content/projects';

function getAllMdFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllMdFiles(fullPath));
    } else if (entry.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

function extractSlug(filename) {
  // Remove .md extension
  const base = path.basename(filename, '.md');
  // Remove YYYY-MM-DD- prefix
  return base.replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

function migrate() {
  const files = getAllMdFiles(POSTS_SOURCE);
  let postsCount = 0;
  let projectsCount = 0;
  let skippedCount = 0;

  for (const filePath of files) {
    const filename = path.basename(filePath);

    // Skip drafts with 0000-00-00 prefix
    if (filename.startsWith('0000-00-00')) {
      skippedCount++;
      continue;
    }

    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(raw);

    const slug = extractSlug(filename);
    const isProject = frontmatter.layout === 'project';

    // Clean frontmatter
    const cleaned = {};
    cleaned.title = frontmatter.title || slug;
    cleaned.date = frontmatter.date || filename.slice(0, 10);

    // Ensure tags is always an array
    if (frontmatter.tags) {
      if (Array.isArray(frontmatter.tags)) {
        cleaned.tags = frontmatter.tags;
      } else if (typeof frontmatter.tags === 'string') {
        cleaned.tags = frontmatter.tags.split(',').map(t => t.trim());
      }
    }

    if (frontmatter.image) {
      cleaned.image = frontmatter.image;
    }

    if (frontmatter.published === false) {
      cleaned.published = false;
    }

    // Build new frontmatter string
    const newFrontmatter = buildFrontmatter(cleaned);
    const newContent = `---\n${newFrontmatter}---\n${content}`;

    const dest = isProject ? PROJECTS_DEST : POSTS_DEST;
    const destPath = path.join(dest, `${slug}.md`);
    fs.writeFileSync(destPath, newContent, 'utf-8');

    if (isProject) {
      projectsCount++;
    } else {
      postsCount++;
    }
  }

  console.log(`Migration complete:`);
  console.log(`  Posts: ${postsCount}`);
  console.log(`  Projects: ${projectsCount}`);
  console.log(`  Skipped (drafts): ${skippedCount}`);
}

function buildFrontmatter(data) {
  let lines = [];
  lines.push(`title: "${data.title.replace(/"/g, '\\"')}"`);
  lines.push(`date: ${data.date}`);
  if (data.tags && data.tags.length > 0) {
    lines.push(`tags: [${data.tags.map(t => `"${t}"`).join(', ')}]`);
  }
  if (data.image) {
    lines.push(`image: ${data.image}`);
  }
  if (data.published === false) {
    lines.push(`published: false`);
  }
  return lines.join('\n') + '\n';
}

migrate();
