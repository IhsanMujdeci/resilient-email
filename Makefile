default: dev

install-dependencies:
	cd client && npm install
	cd server && npm install

dev-server:
	cd server && npm start

dev-client:
	cd client && npm start

dev:
	npx concurrently --kill-others-on-fail "make dev-server" "make dev-client"

test-server:
	cd server && npm test
