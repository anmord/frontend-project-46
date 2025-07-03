install:
	npm ci

lint:
	npx eslint . 
	
test-coverage:
	npm run test -- --coverage
gendiff: 
	node ./bin/gendiff.js __fixtures__/file_json_3_test.json __fixtures__/file_json_3_test.json 