## Getting Started

First, install node modules and run the development server:

```bash
npm i # install node modules

npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Commit on GitHub

project use plugin husky to precommit.
The workflow after commit code

1.  Check Prettier standards
2.  Check ESLint Standards
3.  Check tsconfig standards
4.  build code
    `If in 4 steps is error. Code that commit is note pass`

### Step Commit by commnad line

```bash
git add .

git commit -m 'message'

```

### Step Commit by Git GUI (sourcetree on Mac) and use NVM

If there is a problem in the commit code
link issue => https://github.com/typicode/husky/issues/390#issuecomment-762213421

1.  create file .huskyrc in root path by command `touch ~/.huskyrc`
2.  Run echo `export PATH=\"$(dirname $(which node)):\$PATH\` in termital
3.  Copy the text that comes out of command as `export PATH="/Users/thanaphon.itt/.nvm/versions/node/v14.15.1/bin:$PATH"`
4.  Create file `.huskyrc` in root path by command `touch ~/.huskyrc`
5.  Paste value to file .huskyrc by run command `nano ~/.huskyrc` paste value
6.  ^X (exit) and Enter for exit to the page
7.  ship + Y for save file

### Deploy on AWS (Elasticberanstalk)

Project use Github Action(CI/CD) to deploy on Elasticberanstalk by commit code to branch `master`.

You can edit step deploy by edit file ([`Deploy.yml`](./.git/workflows/.Deploy.yml))
