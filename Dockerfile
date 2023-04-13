FROM node:lts-slim as builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . ./

EXPOSE 5173

ENTRYPOINT [ "npm","run","dev" ]

# RUN npm run build 



# stage 2
# FROM nginx

# WORKDIR /usr/share/nginx/html

# RUN rm -rf ./*

# COPY --from=builder /app/dist .

# ENTRYPOINT ["nginx", "-g", "daemon off;"]