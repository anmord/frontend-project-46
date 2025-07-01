install:
	npm ci

lint:
	npx eslint . 
	
test-coverage:
	npm run test -- --coverage
gendiff: 
	node ./bin/gendiff.js file_json_3.json file_json_4.json 