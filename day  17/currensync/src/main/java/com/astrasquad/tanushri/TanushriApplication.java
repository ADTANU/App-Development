package com.astrasquad.tanushri;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class TanushriApplication {

	public static void main(String[] args) {
		SpringApplication.run(TanushriApplication.class, args);
	}

}
