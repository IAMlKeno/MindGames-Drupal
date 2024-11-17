FROM node:22-bookworm-slim

WORKDIR /project

COPY . .
RUN chmod a+x /project/entry.sh

ENTRYPOINT [ "./entry.sh" ]
# CMD ["npm", "run", "dev", "--", "--open"]