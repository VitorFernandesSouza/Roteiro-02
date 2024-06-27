# Etapa de build
FROM ubuntu:latest AS build

# Instalação do JDK e Maven
RUN apt-get update
RUN apt-get install openjdk-11-jdk -y  # Corrigido para openjdk-11-jdk
RUN apt-get install maven -y

# Copia do código fonte e construção do projeto Maven
COPY . .
RUN mvn clean install

# Segunda etapa: criação da imagem final
FROM openjdk:11-jdk-slim

# Expor a porta 8080 para fora do container
EXPOSE 8080

# Copia o arquivo JAR construído na etapa anterior para o container
COPY --from=build target/roteiro01-0.0.1-SNAPSHOT.jar app.jar

# Comando para executar a aplicação quando o container for iniciado
ENTRYPOINT ["java", "-jar", "app.jar"]
