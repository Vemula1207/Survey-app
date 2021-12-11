package com.stackroute.matchmaking.config;
import org.neo4j.ogm.session.SessionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;

import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
//@EnableNeo4jRepositories(basePackages = "com.stackroute.matchmaking.repository")
@EnableTransactionManagement
public class Neo4jConfig {

	@Bean
    public SessionFactory sessionFactory() {
        return new SessionFactory(configuration(), "com.stackroute.matchmaking.model");
    }

    @Bean
    public org.neo4j.ogm.config.Configuration configuration() {
    	org.neo4j.ogm.config.Configuration configuration = new org.neo4j.ogm.config.Configuration.Builder()
    	.uri("bolt://localhost:7687")
    	.credentials("neo4j", "pass")
    	.autoIndex("none")
        .build();
    	return configuration;
    }


}
