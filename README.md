# Expressjs Demo for CC-25
## Part of Bangkit 2022

## How to use in local
1. Clone this repositroy
2. Run `npm install`
3. Run `docker run --name expressjs-demo-mysql -e MYSQL_ROOT_PASSWORD=passw0rd -p 0.0.0.0:3306:3306 -d mysql:8.0`
4. Run `docker exec -it expressjs-demo-mysql bash`
5. Populate Database with `db.sql`
6. Run `npm run dev`

References : 
[1] https://medium.com/@rahulguptalive/create-crud-apis-in-nodejs-express-and-mysql-abda4dfc2d6

[2] https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/