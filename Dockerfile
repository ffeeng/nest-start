FROM node:20.19.6
# 设置工作目录
WORKDIR /app

# 设置 npm 国内镜像并全局安装 pnpm
RUN npm install -g pnpm --registry https://registry.npmmirror.com/ --fetch-timeout=60000

# 复制依赖文件并安装项目依赖
COPY package*.json ./
RUN pnpm install

# 复制项目代码
COPY . .

EXPOSE 3000
CMD ["pnpm", "run", "dev"]
