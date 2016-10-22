/* @flow */

import { writeFileSync } from 'fs';

import { prompt } from 'inquirer';
import { safeDump as dumpYaml } from 'js-yaml';
import { sync as mkdirpSync } from 'mkdirp';
import moment from 'moment';
import open from 'open';
import slug from 'slug';

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter a title:',
  },
  {
    type: 'input',
    name: 'slug',
    message: 'Set a slug:',
    // $FlowMissingDefinition
    default: ({ title }: { title: string }) => slug(title, { lower: true }),
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe this post:',
  },
  {
    type: 'input',
    name: 'author',
    message: 'Who is the author of this post (GitHub username):',
  },
];

prompt(questions)
  .then((answers: {
    title: string,
    slug: string,
    description: string,
    author: string,
  }) => {
    const dir = `./pages/blog/${answers.slug}`;
    mkdirpSync(dir);

    const meta = {
      title: answers.title,
      date: moment().format(),
      description: answers.description,
      author: answers.author,
      draft: true,
    };
    writeFileSync(
      `${dir}/index.md`,
      `---\n${dumpYaml(meta)}---\n`,
      { encoding: 'utf-8' },
    );
    console.log(`\n${dir}`);// eslint-disable-line no-console

    open(`${dir}/index.md`);

    return;
  })
  .catch((err: Error) => {
    console.error(err); // eslint-disable-line no-console
    process.exit(1); // eslint-disable-line unicorn/no-process-exit
  });
