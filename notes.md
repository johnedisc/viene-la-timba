# 'si no viene la guagua, me voy de pie' notes

### i want to do the following:
* get a domain name
* spin up a aws machine. [techLead](https://www.youtube.com/watch?v=1YXqXPWjmKk)
* build a simple node js server [dave gray](https://www.youtube.com/watch?v=3ZAKY-CDKog) [start with his intro to node](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw)
* set up a database on that virtual machine (mysql or [mongo](https://fullstackopen.com/en/part3/saving_data_to_mongo_db)
* hook a typescript front end up to it (react or [vanilla js](https://dev.to/vijaypushkin/dead-simple-state-management-in-vanilla-javascript-24p0)?)
* make api calls from that front end
* use vite and yarn?
* testing?
* space background? [generated with js?](https://www.siteinspire.com/websites/6430-clement-brichon)


### Set up typescript for node with simple project
(make package.json)
* npm init -y
(install typescript as dev dependency)
* yarn add -D typescript
(make tsconfig)
* npx tsc --init
(add ts-node to skip compile in dev)
* yarn add -D ts-node
(add to package.json scripts)
* "start": "ts-node fill.ts"
(add node dev server)
* yarn add -D ts-node-dev
* "start": "ts-node-dev --respawn file.ts"
(add node types)
* yarn add -D @types/node


