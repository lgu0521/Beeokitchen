FROM node:16.10.0 as base

RUN mkdir -p /app
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# next 의 default port 는 3000 번 이지만 beanstalk 의 default port 는 8081 이기 때문에
# 간편하게 맞추고자 8081 로 실행합니다.
EXPOSE 8081 
CMD [ "npm", "start" ]