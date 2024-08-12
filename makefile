# Variables
UI_DIR = ./frontend
SERVER_DIR = ./backend
PRISMA_DIR = ./backend/prisma

# Targets
.PHONY: ui build-ui server prisma-studio

ui:
	cd $(UI_DIR) && npm run dev

build-ui:
	cd $(UI_DIR) && npm run dev

server:
	cd $(SERVER_DIR) && node server.js

prisma-studio:
	cd $(PRISMA_DIR) npx prisma generate && npx prisma db push && npx prisma studio