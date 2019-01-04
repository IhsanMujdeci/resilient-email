default: dev

dev:
	npx concurrently --kill-others-on-fail "make dev-server" "make dev-client"

dev-server:
	cd server &&
	npm start

dev-client:
	cd client &&
	npm start
