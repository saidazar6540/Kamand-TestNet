FROM openjdk:11-jre-slim

WORKDIR /app

COPY config.conf /app/config.conf

RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/tronprotocol/java-tron/releases/download/GreatVoyage-v4.6.0/FullNode.jar -O FullNode.jar && \
    chmod +x FullNode.jar

EXPOSE 18888 19111 18890

CMD ["java", "-jar", "FullNode.jar", "-c", "config.conf"]
