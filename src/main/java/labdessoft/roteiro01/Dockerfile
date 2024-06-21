FROM ubuntu:latest AS build

# Instalar dependências
RUN apt-get update && apt-get install -y \
    openjdk-21-jdk \
    wget \
    unzip

# Configurar diretório de trabalho
WORKDIR /app

# Copiar o conteúdo do repositório para o contêiner
COPY . .

# Garantir que o Maven Wrapper tenha permissões de execução
RUN chmod +x mvnw

# Baixar e configurar o Maven Wrapper usando o código fornecido
RUN wget -O .mvn/wrapper/maven-wrapper.jar https://repo.maven.apache.org/maven2/io/takari/maven-wrapper/0.5.6/maven-wrapper-0.5.6.jar
RUN sed -i 's|distributionUrl=.*|distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.8.1/apache-maven-3.8.1-bin.zip|' .mvn/wrapper/maven-wrapper.properties

# Construir o projeto usando Maven Wrapper
RUN ./mvnw clean install

# Listar o conteúdo do diretório de destino para ver onde o JAR foi gerado
RUN ls -l target

FROM openjdk:21-jdk-slim

# Expor a porta 8080
EXPOSE 8080

# Copiar o JAR gerado do estágio de construção para o novo contêiner
COPY --from=build /app/target/todo-0.3.1-SNAPSHOT.jar app.jar

# Definir o ponto de entrada
ENTRYPOINT ["java", "-jar", "app.jar"]
