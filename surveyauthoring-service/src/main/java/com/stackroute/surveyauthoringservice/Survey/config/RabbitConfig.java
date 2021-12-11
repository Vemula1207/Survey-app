// package com.stackroute.surveyauthoringservice.Survey.config;


// import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
// import org.springframework.amqp.rabbit.connection.ConnectionFactory;
// import org.springframework.amqp.rabbit.core.RabbitTemplate;
// import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
// import org.springframework.amqp.support.converter.MessageConverter;
// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;

// @Configuration
// public class RabbitConfig {
//    @Value("${spring.rabbitmq.host}")
//    public String host;

//    @Value("${spring.rabbitmq.username}")
//    public String username;

//    @Value("${spring.rabbitmq.password}")
//    public String password;


//    @Bean
//    public MessageConverter jsonMessageConvertor() {
//        return new Jackson2JsonMessageConverter();
//    }

//    @Bean
//    public ConnectionFactory connectionFactory() {
//        CachingConnectionFactory cachingConnectionFactory = new CachingConnectionFactory(host);
//        cachingConnectionFactory.setUsername(username);
//        cachingConnectionFactory.setPassword(password);
//        return cachingConnectionFactory;
//    }

//    @Bean
//    public RabbitTemplate template(ConnectionFactory connectionFactory) {
//        final RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
//        rabbitTemplate.setMessageConverter(jsonMessageConvertor());
//        return rabbitTemplate;
//    }

// }
