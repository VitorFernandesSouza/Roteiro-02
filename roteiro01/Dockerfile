# Estágio de construção
FROM maven:3.8.5-openjdk-11 AS build

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn clean package

# Estágio de produção
FROM openjdk:11-jre-slim

WORKDIR /app

COPY --from=build /app/target/roteiro01-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
